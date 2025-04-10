import { useParams } from "react-router-dom";
import Categories from "../../ui/Categories";
import Heading from "../../ui/Heading";
import useSubCategory from "./useSubCategory";
import Spinner from "../../ui/Spinner";


function SubCategory() {
    const { isLoading, categories } = useSubCategory()
    const {collectionSlug} = useParams()

    if (isLoading || !categories) {
        return <Spinner/>
    }

    return (
        <>
            <Categories categories={categories} />
        </>
    )
}

export default SubCategory