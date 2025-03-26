import { Link } from "react-router-dom";
import styled from "styled-components";

const CategoryList = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;
`;

const Category = styled.li`
  position: relative;
  width: 275px; /* Fixed width */
  height: 275px; /* Fixed height */
  overflow: hidden;
  cursor: pointer;
  border-radius: var(--border-radius-lg);
`;

const CategoryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, opacity 0.3s ease-in-out;

  ${Category}:hover & {
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

  ${Category}:hover & {
    background: rgba(0, 0, 0, 0.4);
  }
`;

function Categories() {
  const categories = [
    { name: "Top wear", image: "/hero-img1.jpg" },
    { name: "Bottom wear", image: "/hero-img2.jpg" },
    { name: "Accessories", image: "/hero-img1.jpg" },
    { name: "New Arrivals", image: "/hero-img3.jpg" },
  ];

  return (
    <CategoryList>
      {categories.map((cat, index) => (
        <Link to={"/category/" + cat.name}>
          <Category key={index}>
            <CategoryImage src={cat.image} alt={cat.name} />
            <CategoryText>{cat.name}</CategoryText>
          </Category>
        </Link>
      ))}
    </CategoryList>
  );
}

export default Categories