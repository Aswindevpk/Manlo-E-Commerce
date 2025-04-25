import { FaStar } from "react-icons/fa6";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import useGetReviews from "./useGetReviews";
import { Review } from "../../types";
import Spinner from "../../ui/Spinner";
import EmptyState from "../../ui/EmptyState";
import { useNavigate } from "react-router-dom";
import { BiCommentDetail } from "react-icons/bi";


function getAverageRating(reviews: Review[]) {
  const total = reviews.reduce((acc, r) => acc + r.rating, 0);
  return (total / reviews.length).toFixed(1);
}

function getRatingBreakdown(reviews: Review[]) {
  const breakdown = [0, 0, 0, 0, 0];
  reviews.forEach((r) => breakdown[r.rating - 1]++);
  return breakdown.reverse(); // 5⭐ to 1⭐
}



function ProductReviews() {
  const { isLoading, reviews } = useGetReviews()

  if (isLoading || !reviews) {
    return <Spinner />
  }

  if (reviews.length === 0) {
    return <EmptyState
      icon={<BiCommentDetail />}
      title="No Review Yet"
      message="Buy now and Your Review!"
    />
  }

  const avgRating = getAverageRating(reviews);
  const breakdown = getRatingBreakdown(reviews);

  return (
    <Wrapper>
      <Grid>
        <SummaryCard>
          <Heading as="h2">Average Rating</Heading>
          <BigRating>{avgRating}</BigRating>
          <Stars>
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar key={i} size={20} color={i < Math.round(Number(avgRating)) ? "#fbbf24" : "#ffffff"} fill={i < Math.round(Number(avgRating)) ? "#fbbf24" : "none"} />
            ))}
          </Stars>
          <Total>{reviews.length} reviews</Total>
          <Breakdown>
            {breakdown.map((count, idx) => {
              const star = 5 - idx;
              return (
                <Bar key={star}>
                  <span>{star} star</span>
                  <Progress><ProgressFill style={{ width: `${(count / reviews.length) * 100}%` }} /></Progress>
                  <span>{count}</span>
                </Bar>
              );
            })}
          </Breakdown>
        </SummaryCard>

        <ReviewGrid>
          {reviews.map((review) => (
            <ReviewCard key={review.id}>
              <Name>{review.username}</Name>
              <Stars>
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} size={12} color={i < review.rating ? "#fbbf24" : "#e5e7eb"} fill={i < review.rating ? "#fbbf24" : "none"} />
                ))}
              </Stars>
              <Comment>"{review.comment}"</Comment>
            </ReviewCard>
          ))}
        </ReviewGrid>
      </Grid>
    </Wrapper>
  );
}

export default ProductReviews;


const Wrapper = styled.div`
  padding: 4rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  width: 100%;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SummaryCard = styled.div`
  padding: 2rem;
`;

const BigRating = styled.div`
  font-size: 3rem;
  font-weight: bold;
  font-family: var(--font-secondary);
  margin: 1rem 0;
`;

const Stars = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-bottom: 1rem;
`;

const Total = styled.p`
  color: var(--color-grey-600);
  font-family: var(--font-secondary);
  font-size: 1.6rem;
`;

const Breakdown = styled.div`
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  font-size: 1.4rem;
`;

const Progress = styled.div`
  flex: 1;
  height: 8px;
  background: var(--color-brand-100);
  border-radius: 8px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: var(--color-brand-600);
`;

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2.4rem;
`;

const ReviewCard = styled.div`
  background-color: var(--color-grey-0);
  /* border: 1px solid #e5e7eb; */
  height: fit-content;
  border-radius: 1rem;
  padding: 2.8rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`;

const Name = styled.h4`
 text-transform: capitalize;
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Comment = styled.p`
  font-size: 1.4rem;
  color: var(--color-brand-600);
  line-height: 1.4;
`;
