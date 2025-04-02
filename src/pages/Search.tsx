import { useSearchParams } from "react-router-dom";
import ProductList from "../features/Products/ProductList"
import useSearchProducts from "../features/Products/useSearchProducts";

function Search() {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("q") || "";
    const { isLoading, products} = useSearchProducts({query:searchQuery});
    
    if(isLoading || !products){
        return <h1>loading</h1>
    }

    return (
        <>
            <ProductList products={products}/>
        </>
    )
}

export default Search