import styled from "styled-components"
import StarRating from "./StarRating"

const Container = styled.div`
    display: flex;
    gap: 2rem;
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    width: 150px;
    gap: 2rem;
`

const CommentContainer = styled.div`
    display: flex;
    max-width: 600px;
    gap: 1rem;
`

const UserAvatar = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius:50%;
`

function Review() {
    return (
        <Container>
            <UserContainer>
                <UserAvatar src="https://i.pravatar.cc/200" />
                <div>
                    <h4>aswin</h4>
                    <p>hi sfsdfd</p>
                    <StarRating size={14}/>
                </div>
            </UserContainer>
            <CommentContainer>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, temporibus minima, cupiditate molestias omnis perferendis corrupti est autem architecto ducimus, esse atque natus consectetur magnam eligendi ex placeat nesciunt alias.
            </CommentContainer>
        </Container>
    )
}

export default Review