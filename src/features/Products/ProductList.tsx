import styled from "styled-components";
import ProductItem from "../../ui/ProductItem"
import Filter from "../Filter/Filter";
import SortBy from "../../ui/SortBy";
import Spinner from "../../ui/Spinner";
import useSearchProducts from "./useSearchProducts";

const StyledProductList = styled.div`
    display: grid;
    grid-template-columns:1fr 4fr;
    grid-template-rows:2rem auto;
    gap: 4rem;
`;

const SideBar = styled.div`
    grid-row:span 2;
`;

const TopBar = styled.div`
    align-self:flex-start;
    justify-self:end;
`;

const Container = styled.div`
    display: grid;
    grid-template-columns:1fr 1fr 1fr;
    grid-auto-rows:1fr;
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

    if (isLoading || !products) {
        return <Spinner />
    }
    return (
        <Container>
            {products.map(prod => (<ProductItem key={prod.product_id} size="sm" product={prod} />))}
        </Container>
    )
}


export default ProductList