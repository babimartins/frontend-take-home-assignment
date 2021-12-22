import styled from 'styled-components';
import { months, ReachDate } from '../Helpers';

const SavingGoalMonthlyAmount = (props: Props): JSX.Element => {
  const { monthlyAmount, totalAmount, monthsNum, reachDate } = props;

  return (
    <MonthlyAmount>
      <AmountContainer>
        <Title>Monthly Amount</Title>
        <Amount aria-label="Monthly amount">
          {monthlyAmount.toLocaleString('en-US', {
            maximumFractionDigits: 2,
            style: 'currency',
            currency: 'USD',
          })}
        </Amount>
      </AmountContainer>
      <TextContainer>
        <Text>
          {'You’re'} planning{' '}
          <strong role="contentinfo">
            {monthsNum} monthly {monthsNum > 1 ? 'deposits' : 'deposit'}
          </strong>{' '}
          to reach your{' '}
          <strong role="contentinfo">
            {totalAmount.toLocaleString('en-US', {
              maximumFractionDigits: 2,
              style: 'currency',
              currency: 'USD',
            })}
          </strong>{' '}
          goal by{' '}
          <strong role="contentinfo">
            {months[reachDate.month]} {reachDate.year}
          </strong>
          .
        </Text>
      </TextContainer>
    </MonthlyAmount>
  );
};
interface Props {
  totalAmount: number;
  monthlyAmount: number;
  monthsNum: number;
  reachDate: ReachDate;
}

const MonthlyAmount = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  border: 1px solid var(--blue-gray-50);
  box-sizing: border-box;
  border-radius: 8px;
  width: 100%;
`;
const AmountContainer = styled.div`
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;
const Title = styled.p`
  color: var(--blue-gray-900);
  margin: 0;
  font-size: 1.2rem;
  @media (max-width: 1100px) {
    font-size: 1rem;
  }
`;
const Amount = styled.h1`
  font-family: Rubik, sans-serif;
  color: var(--brand-color-secondary);
  font-size: 2rem;
  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`;
const TextContainer = styled.div`
  background: var(--blue-gray-10);
  border-radius: 0 0 8px 8px;
  height: 10vh;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  @media (max-width: 900px) {
    padding: 0 1rem;
  }
`;
const Text = styled.p`
  margin: 0;
  color: var(--blue-gray-900);
  font-weight: 400;
  line-height: 1rem;
  font-size: 0.75rem;
  @media (max-width: 900px) {
    text-align: center;
  }
`;

export default SavingGoalMonthlyAmount;
