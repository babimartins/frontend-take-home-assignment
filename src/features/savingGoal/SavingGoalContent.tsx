import styled from 'styled-components';
import SavingGoalHeader from './SavingGoalHeader';
import SavingGoalContentFormInputs from './SavingGoalFormInputs';
import SavingGoalMonthlyAmount from './SavingGoalMonthlyAmount';
import React from 'react';
import {
  amountString2Number,
  getMonthsNum,
  ReachDate,
  getInitDate,
  getCurrentInitDate,
} from '../Helpers';

const SavingGoalContent = (): JSX.Element => {
  const currentDate = getCurrentInitDate();
  const initDate = getInitDate(currentDate);
  const [amount, setAmount] = React.useState<string>('0.00');
  const [reachDate, setReachDate] = React.useState<ReachDate>(initDate);

  return (
    <Card>
      <SavingGoalHeader />
      <SavingGoalContentFormInputs
        amount={amount}
        setAmount={setAmount}
        reachDate={reachDate}
        setReachDate={setReachDate}
        isSameDate={
          initDate.month === reachDate.month && initDate.year === reachDate.year
        }
      />
      <SavingGoalMonthlyAmount
        totalAmount={amountString2Number(amount)}
        monthlyAmount={
          amountString2Number(amount) / getMonthsNum(currentDate, reachDate)
        }
        reachDate={reachDate}
        monthsNum={getMonthsNum(currentDate, reachDate)}
      />
      <ConfirmButton
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        Confirm
      </ConfirmButton>
    </Card>
  );
};

const Card = styled.form`
  background: var(--neutral-white);
  box-shadow: 0px 16px 32px rgba(30, 42, 50, 0.08);
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
  height: 65vh;
  width: 40vw;

  @media (max-width: 1000px) {
    padding: 25px;
    width: 50vw;
  }
  @media (max-width: 900px) {
    padding: 25px;
    width: 100vw;
  }
  @media (max-width: 550px) {
    height: 75vh;
  }
`;
const ConfirmButton = styled.button`
  font-family: 'Work Sans', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: var(--neutral-white);
  background: var(--brand-color-primary);
  border: none;
  border-radius: 32px;
  height: 7vh;
  width: 20vw;
  display: block;
  max-widht: 320px;
  margin: 0 auto 0;

  @media (max-width: 900px) {
    font-size: 0.85rem;
    height: 8.5vh;
    width: 85vw;
  }
`;

export default SavingGoalContent;
