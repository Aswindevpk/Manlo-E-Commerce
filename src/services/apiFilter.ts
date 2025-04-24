import supabase from "./supabase";

type DataObj = {
  color?: string;
  brand?: string;
  type?: string;
  category?: string;
};

type filterValue = {
  name: string;
  count: number;
};

type FieldCounts = {
  color: filterValue[];
  brand: filterValue[];
  type: filterValue[];
  category: filterValue[];
};

function getFieldCounts(data: DataObj[], fields: string[]): FieldCounts {
  const result: FieldCounts = { color: [], brand: [], type: [], category: [] };

  fields.forEach((field) => {
    const counts: Record<string, number> = {};

    data.forEach((item) => {
      const key = item[field as keyof DataObj];
      if (key) {
        counts[key] = (counts[key] || 0) + 1;
      }
    });

    result[field as keyof FieldCounts] = Object.entries(counts).map(
      ([key, value]) => ({
        name: key,
        count: value,
      })
    );
  });

  return result;
}

interface Filter {
  field: string;
  values: string[] | null; // Support both string and number filters
}

interface SortBy {
  field: string;
  direction: string;
}

interface Props {
  filters?: Filter[];
  sortBy?: SortBy;
  searchQuery: string;
  collectionSlug?: string | null;
}

export async function getFilterCounts({
  collectionSlug,
  searchQuery,
  sortBy,
  filters,
}: Props): Promise<FieldCounts | null> {
  let query = supabase
    .from("product_search_view")
    .select("color,brand,category,type");

  //filter by collection slug
  if (collectionSlug) {
    query = query.or(`type.eq.${collectionSlug},category.eq.${collectionSlug}`);
  }

  //add searchQuery if any
  if (searchQuery) {
    query = query.ilike("product_name", `%${searchQuery}%`);
  }

  // Apply filter dynamically
  if (filters && filters?.length > 0) {
    filters.forEach((filter: Filter) => {
      if (filter.values) {
        query = query.in(filter.field, filter.values);
      }
    });
  }

  //apply sort
  if (sortBy)
    query = query.order(sortBy.field, {
      ascending: sortBy.direction === "asc",
    });

  const { data, error } = await query;

  const fields = ["color", "brand", "category", "type"];

  if (data) {
    const result = getFieldCounts(data, fields);
    return result;
  }

  if (error) {
    console.error("Error fetching brand counts:", error);
  }
  return null
}
