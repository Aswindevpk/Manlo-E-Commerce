import styled from "styled-components";
import Spinner from "../../ui/Spinner";
import { Link } from "react-router-dom";
import CategoryCard from "../../ui/CategoryCard";
import useCategoryList from "./useCategoryList";

const StyledCategoryList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8rem;
`;

interface Props {
    collectionSlug?: string | null;
}

function CategoryList({ collectionSlug = null }: Props) {
    const {isLoading , categories} = useCategoryList({collectionSlug})

    if(isLoading) return <Spinner/>

    if (!categories) return null


    return (
        <StyledCategoryList>
            {categories.map(cat => (
                <Link key={cat.id} to={`/collection/${cat.slug}`}>
                    <CategoryCard key={cat.id} category={cat} />
                </Link>
            ))}
        </StyledCategoryList>
    )
}

export default CategoryList;