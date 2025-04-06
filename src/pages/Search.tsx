import { useSearchParams } from "react-router-dom";
import ProductList from "../features/Products/ProductList"
import useSearchProducts from "../features/Products/useSearchProducts";
import Spinner from "../ui/Spinner";

function Search() {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("q") || "";
    const { isLoading, products} = useSearchProducts({query:searchQuery});
    
    if(isLoading || !products){
        return <Spinner/>
    }

    return (
        <>
            <ProductList products={products}/>
        </>
    )
}

export default Search