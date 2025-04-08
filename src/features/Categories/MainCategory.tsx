import styled from "styled-components";
import Categories from "../../ui/Categories";
import Spinner from "../../ui/Spinner";
import useMainCategory from "./useMainCategory";


const Container = styled.div`
    padding: 2rem;
`;



function MainCategory() {
    const { isLoading, categories } = useMainCategory()

    if (isLoading || !categories) {
        return <Spinner/>
    }

    return (
        <Container>
            <Categories categories={categories} />
        </Container>
    )
}

export default MainCategory;