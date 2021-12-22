import React from 'react';
import styled from 'styled-components';
import { ReachDate } from '../Helpers';
import SavingGoalAmount from './SavingGoalAmount';
import SavingGoalDate from './SavingGoalDate';
import SavingGoalInput from './SavingGoalInput';

const SavingGoalContentFormInputs = (props: Props): JSX.Element => {
  const { amount, setAmount, reachDate, setReachDate, isSameDate } = props;

  return (
    <Container key="saving-goal-form">
      <SavingGoalInput
        title="Total Amount"
        input={<SavingGoalAmount amount={amount} setAmount={setAmount} />}
        label="amount"
      />
      <SavingGoalInput
        title="Reach goal by"
        input={
          <SavingGoalDate
            reachDate={reachDate}
            setReachDate={setReachDate}
            isSameDate={isSameDate}
          />
        }
        label="reachDate"
      />
    </Container>
  );
};

interface Props {
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  reachDate: ReachDate;
  setReachDate: React.Dispatch<React.SetStateAction<ReachDate>>;
  isSameDate: boolean;
}

const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 10vh;
  @media (max-width: 550px) {
    height: 25vh;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export default SavingGoalContentFormInputs;
