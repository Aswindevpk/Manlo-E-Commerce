
import Categories from "../../ui/Categories";
import useSubCategory from "./useSubCategory";
import Spinner from "../../ui/Spinner";


function SubCategory() {
    const { isLoading, categories } = useSubCategory()

    if (isLoading || !categories) {
        return <Spinner />
    }

    return (
        <>
            <Categories categories={categories} />
        </>
    )
}

export default SubCategory