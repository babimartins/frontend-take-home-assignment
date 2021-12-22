import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SavingGoalContent from '../features/savingGoal/SavingGoalContent';

describe('Monthly Amount Component', () => {
  beforeEach(() => {
    render(<SavingGoalContent />);
  });

  const inputAmountLabel = /Total Amount/i;
  const nextMonthLabel = 'Next month';
  const monthlyAmountLabel = 'Monthly amount';
  const monthlyAmountResultTestCases = [
    [5, '12345600', '$20,576.00'],
    [4, '789000', '$1,578.00'],
    [10, '1100000000', '$1,000,000.00'],
  ];

  describe('Test monthly amount value', () => {
    it.each(monthlyAmountResultTestCases)(
      'Goes up %d months, receives %s on amount input and exhibit monthly amount correctly',
      (times, amount, monthlyAmount) => {
        const input = screen.getByLabelText(inputAmountLabel);
        const result = screen.getByLabelText(monthlyAmountLabel);
        const arrowRight = screen.getByLabelText(nextMonthLabel);
        for (let i = 0; i < times; i++) {
          userEvent.click(arrowRight);
        }
        userEvent.type(input, amount.toString());
        expect(result).toHaveTextContent(monthlyAmount.toString());
      }
    );
  });
});
