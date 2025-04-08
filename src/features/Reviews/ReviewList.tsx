import styled from "styled-components"
import Review from "../../ui/Review"
import useReview from "./useReview"
import { useParams, useSearchParams } from "react-router-dom"
import Spinner from "../../ui/Spinner"

const Container = styled.div`
    padding-top:2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    gap: 1.5rem;
`

function ReviewList() {
    const { productItemId } = useParams();
    const { isLoading, reviews } = useReview({variantId:productItemId})

    if(isLoading){
        return <Spinner/>
    }
    
    return (
        <Container>
            {reviews?.map(review => (
                <Review />
            ))}
        </Container>
    )
}

export default ReviewList