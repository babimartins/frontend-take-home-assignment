import styled from 'styled-components';
import { BuyAHouseLogo } from '../../assets/SVGs';

const SavingGoalHeader = (): JSX.Element => {
  return (
    <Header>
      <BuyAHouseLogo />
      <TextsContainer>
        <Title>Buy a house</Title>
        <SubTitle>Saving goal</SubTitle>
      </TextsContainer>
    </Header>
  );
};

const Header = styled.div`
  display: flex;
  height: 8vh;
  flex-direction: row;
  align-items: center;
`;
const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: space-around;
  margin-left: 16px;
  height: 100%;
`;
const Title = styled.h1`
  color: var(--blue-gray-900);
  font-family: Rubik, sans-serif;
  font-size: 1.5rem;
  margin: 0;
`;
const SubTitle = styled.p`
  color: var(--blue-gray-400);
  font-size: 1rem;
  margin: 0;
`;

export default SavingGoalHeader;
