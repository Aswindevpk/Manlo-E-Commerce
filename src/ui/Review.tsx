import styled from "styled-components"

const UserContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const CommentContainer = styled.div`
    display: flex;
    max-width: 600px;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem 3rem;
    box-shadow:var(--shadow-md);
    background-color:white;
`


function Review() {
    return (
        <CommentContainer>
            <UserContainer>
                <h3>aswin</h3>
                <p>Jul 3</p>
            </UserContainer>
            {/* <StarRating size={16} /> */}
            <h3>
                Superb Product. Awsome....
            </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, temporibus minima, cupiditate molestias omnis
            </p>
        </CommentContainer>
    )
}

export default Review