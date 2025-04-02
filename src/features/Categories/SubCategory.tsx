import { useParams } from "react-router-dom";
import Categories from "../../ui/Categories";
import Heading from "../../ui/Heading";
import useSubCategory from "./useSubCategory";


function SubCategory() {
    const { isLoading, categories } = useSubCategory()
    const {collectionSlug} = useParams()

    if (isLoading || !categories) {
        return <h1>loading</h1>
    }

    return (
        <>
            <Heading as="h1" style={{ textAlign: "center" }}>{collectionSlug}</Heading>
            <Categories categories={categories} />
        </>
    )
}

export default SubCategory