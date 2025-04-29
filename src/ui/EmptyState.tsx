import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 2.4rem;
  color: var(--color-dark-gray);
`;

const Description = styled.p`
  font-size: 1.4rem;
  color: var(--color-muted-blue);
  margin-bottom: 20px;
`;

const IconWrapper = styled.div`
  margin-bottom: 1rem;

  svg {
    width: 60px;
    height: 60px;
    color: var(--color-brand-600);
  }
`;

type EmptyStateProps = {
  icon: React.ReactNode;
  title: string;
  message: string;
  buttonText?: string;
  onButtonClick?: () => void;
};

const EmptyState = ({ icon, title, message, buttonText, onButtonClick }: EmptyStateProps) => {
  return (
    <Container>
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Description>{message}</Description>
      {buttonText && onButtonClick &&
      <Button onClick={onButtonClick}>{buttonText}</Button>
      }
    </Container>
  );
};

export default EmptyState;
