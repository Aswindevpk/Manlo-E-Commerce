import useCategories from "../../hooks/useGetCategories";

function useCategoryList({
  collectionSlug,
}: {
  collectionSlug?: string | null;
}) {
  const { isLoading, categories: allCategories } = useCategories();

  // Decide which categories to return
  const filteredCategories = collectionSlug
    ? allCategories?.filter((cat) => cat.parent?.slug === collectionSlug) // Subcategories
    : allCategories?.filter((cat) => cat.parent_id === null);// Top-level categories


  return { isLoading, categories: filteredCategories };
}

export default useCategoryList;
