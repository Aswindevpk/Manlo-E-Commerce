import styled from "styled-components";
import ProductItem from "../../ui/ProductItem"
import Filter from "../Filter/Filter";
import SortBy from "../../ui/SortBy";
import Spinner from "../../ui/Spinner";
import useSearchProducts from "./useSearchProducts";
import EmptyState from "../../ui/EmptyState";
import { HiOutlineSearchCircle } from "react-icons/hi";
import { useNavigate, useSearchParams } from "react-router-dom";

const StyledProductList = styled.div`
    display: grid;
    grid-template-columns:1fr 4fr;
    grid-template-rows:2rem auto;
    gap: 4rem;

    @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SideBar = styled.div`
    grid-row:span 2;
`;

const TopBar = styled.div`
    align-self:flex-start;
    justify-self:end;
`;

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 4rem;
`;



function ProductList() {
    return (
        <StyledProductList>
            <SideBar>
                <Filter />
            </SideBar> 
            <TopBar>
                <SortBy />
            </TopBar>
            <ProductContainer />
        </StyledProductList>
    )
}


function ProductContainer() {
    const { isLoading, products } = useSearchProducts();
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();


    if (isLoading || !products) {
        return <Spinner />
    }

    if (products.length === 0) {
        const query = searchParams.get("q") || "";
        const message = `We couldn’t find anything for "${query}". Try different keywords or browse all products.`;
        return (
            <EmptyState
                icon={<HiOutlineSearchCircle />}
                title="No results found"
                message={message}
                buttonText="Browse Products"
                onButtonClick={() => navigate("/shop")}
            />
        );
    }

return (
    <Container>
        {products.map(prod => (<ProductItem key={prod.product_id} size="sm" product={prod} />))}
    </Container>
)}


export default ProductList