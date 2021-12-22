import styled from 'styled-components';

const SavingGoalInput = (props: Props): JSX.Element => {
  const { title, input, label } = props;

  return (
    <Container>
      <Label htmlFor={label}>
        {title}
        {input}
      </Label>
    </Container>
  );
};

interface Props {
  title: string;
  input: JSX.Element;
  label: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 10vh;
`;

const Label = styled.label`
  font-size: 0.875rem;
  color: var(--blue-gray-900);

  @media (max-width: 900px) {
    font-size: 0.75rem;
  }
`;

export default SavingGoalInput;
