import React from 'react';
import styled from 'styled-components';
import { ChevronLeftIcon, ChevronRightIcon } from '../../assets/SVGs';
import { ReachDate, getNewReachDate, months } from '../Helpers';

const SavingGoalDate = (props: Props): JSX.Element => {
  const { isSameDate, reachDate, setReachDate } = props;

  const handleOnChangeMonth = (isLeft: boolean) => {
    setReachDate((previous) => {
      return getNewReachDate(previous, isLeft);
    });
  };

  return (
    <Container
      id="reachDate"
      aria-labelledby="Reach goal by"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') {
          handleOnChangeMonth(false);
        } else if (e.key === 'ArrowLeft' && !isSameDate) {
          handleOnChangeMonth(true);
        }
      }}
    >
      <Button
        aria-label="Previous month"
        onClick={(e) => {
          e.preventDefault();
          handleOnChangeMonth(true);
        }}
        disabled={isSameDate}
      >
        <ChevronLeftIcon />
      </Button>
      <DateContainer>
        <Month aria-label="Month">{months[reachDate.month]}</Month>
        <Year aria-label="Year">{reachDate.year}</Year>
      </DateContainer>
      <Button
        aria-label="Next month"
        onClick={(e) => {
          e.preventDefault();
          handleOnChangeMonth(false);
        }}
      >
        <ChevronRightIcon />
      </Button>
    </Container>
  );
};

interface Props {
  reachDate: ReachDate;
  setReachDate: React.Dispatch<React.SetStateAction<ReachDate>>;
  isSameDate: boolean;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid var(--blue-gray-50);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 5px 15px;
  min-height: 46px;
  width: 12vw;
  margin: 5px 0;
  outline: 0;
  :focus-within {
    border-color: var(--brand-color-secondary);
  }

  @media (max-width: 1000px) {
    width: 15vw;
  }
  @media (max-width: 900px) {
    width: 30vw;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`;
const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;
const Month = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 0.85rem;
`;
const Year = styled.p`
  margin: 0;
  font-size: 0.75rem;
`;
const Button = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  outline: 0;
  :focus {
    & path {
      fill: var(--brand-color-secondary);
    }
  }
`;

export default SavingGoalDate;
