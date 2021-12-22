import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SavingGoalContent from '../features/savingGoal/SavingGoalContent';

describe('Total Amount Component', () => {
  beforeEach(() => {
    render(<SavingGoalContent />);
  });

  const inputAmountLabel = /Total Amount/i;
  const moneyMaskTestCases = [['123456'], ['1@2b3#4,56'], ['0a1.23*456']];

  describe('Test money mask application', () => {
    it.each(moneyMaskTestCases)('Receives %s and format correctly', (value) => {
      const input = screen.getByLabelText(inputAmountLabel);
      userEvent.type(input, value);
      expect(input).toHaveValue('1,234.56');
    });
  });
});
