import styled from "styled-components";
import ProductItem from "../../ui/ProductItem"
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";

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
                <SortBy/>
            </TopBar>
            <Container>
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </Container>
        </StyledProductList>
    )
}

export default ProductList