import Categories from "../../ui/Categories";
import Spinner from "../../ui/Spinner";
import useMainCategory from "./useMainCategory";



function MainCategory() {
    const { isLoading, categories } = useMainCategory()

    if (isLoading || !categories) {
        return <Spinner/>
    }

    return (
        <>
            <Categories categories={categories} />
        </>
    )
}

export default MainCategory;