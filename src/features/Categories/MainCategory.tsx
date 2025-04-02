import Categories from "../../ui/Categories";
import useMainCategory from "./useMainCategory";



function MainCategory() {
    const { isLoading, categories } = useMainCategory()

    if (isLoading || !categories) {
        return <h1>loading</h1>
    }

    return (
        <>
            <Categories categories={categories} />
        </>
    )
}

export default MainCategory;