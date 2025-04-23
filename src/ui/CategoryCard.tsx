import styled from "styled-components";
import { Category } from "../types";



const StyledCategoryCard = styled.li`
  position: relative;
  width: 200px; /* Fixed width */
  height: 125px; /* Fixed height */
  overflow: hidden;
  cursor: pointer;
  border-radius: var(--border-radius-lg);
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, opacity 0.3s ease-in-out;

  ${StyledCategoryCard}:hover & {
    transform: scale(1.05);
    box-shadow: var(--shadow-lg);
    opacity: 0.8; /* Reduced opacity */
  }
`;

const CategoryText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 2rem;
  color: white;
  background: rgba(0, 0, 0, 0.2);
  opacity: 1;
  transition: opacity 0.3s ease-in-out;

  ${StyledCategoryCard}:hover & {
    background: rgba(0, 0, 0, 0.4);
  }
`;


interface Props {
  category: Category
}

function CategoryCard({ category }: Props) {
  return (
    <StyledCategoryCard>
      <CategoryImage src={category.image} />
      <CategoryText>{category.name}</CategoryText>
    </StyledCategoryCard>
  );
}

export default CategoryCard;