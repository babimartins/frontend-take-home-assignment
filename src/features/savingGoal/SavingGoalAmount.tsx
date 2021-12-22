import styled from 'styled-components';
import { DollarSignIcon } from '../../assets/SVGs';
import { moneyMask } from '../Helpers';

const SavingGoalAmount = (props: Props): JSX.Element => {
  const { amount, setAmount } = props;

  return (
    <Container>
      <DollarSignIcon />
      <Input
        type="text"
        id="amount"
        value={amount}
        onChange={(e) => {
          setAmount(moneyMask(e.target.value));
        }}
      />
    </Container>
  );
};

interface Props {
  amount: string;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid var(--blue-gray-50);
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px 8px;
  margin: 5px 0;
  width: 20vw;
  :focus-within {
    border-color: var(--brand-color-secondary);
  }

  @media (max-width: 1000px) {
    width: 28vw;
  }
  @media (max-width: 900px) {
    width: 60vw;
  }
  @media (max-width: 550px) {
    width: 100%;
  }
`;
const Input = styled.input`
  color: var(--blue-gray-600);
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 1.25rem;
  padding: 0;
  margin-left: 8px;
  border: none;
  width: 90%;
  :focus {
    outline: none;
  }
`;

export default SavingGoalAmount;
