import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SavingGoalContent from '../features/savingGoal/SavingGoalContent';

describe('Reach Date Component', () => {
  beforeEach(() => {
    render(<SavingGoalContent />);
    const mockDate = new Date('2021-12-22');
    jest
      .spyOn(global, 'Date')
      .mockImplementation(() => mockDate as unknown as string);
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  const nextMonthLabel = 'Next month';
  const previousMonthLabel = 'Previous month';
  const monthLabel = 'Month';
  const yearLabel = 'Year';
  const nextDatesTestCases = [
    [1, 'February', '2022'],
    [2, 'March', '2022'],
    [3, 'April', '2022'],
    [12, 'January', '2023'],
  ];
  const previousDatesTestCases = [
    [3, 'August'],
    [4, 'July'],
    [5, 'June'],
  ];

  describe('Test update month and year input', () => {
    it('Check if first date show is January 2022', () => {
      const shownMonthEl = screen.getByLabelText(monthLabel);
      expect(shownMonthEl).toHaveTextContent('January');
      const shownYearEl = screen.getByLabelText(yearLabel);
      expect(shownYearEl).toHaveTextContent('2022');
    });
    it.each(nextDatesTestCases)(
      'Click right arrow and up %d months',
      (times, month, year) => {
        const arrowRight = screen.getByLabelText(nextMonthLabel);
        for (let i = 0; i < times; i++) {
          userEvent.click(arrowRight);
        }
        const shownMonthEl = screen.getByLabelText(monthLabel);
        expect(shownMonthEl).toHaveTextContent(month.toString());
        const shownYearEl = screen.getByLabelText(yearLabel);
        expect(shownYearEl).toHaveTextContent(year.toString());
      }
    );
    it('Check if left button is disabled when the month is the first next to the current one', () => {
      const arrowLeft = screen.getByLabelText(previousMonthLabel);
      expect(arrowLeft).toBeDisabled();
    });
    it.each(previousDatesTestCases)(
      'Click left arrow and down %d months after going up 10 months',
      (times, month) => {
        const arrowRight = screen.getByLabelText(nextMonthLabel);
        for (let i = 0; i < 10; i++) {
          userEvent.click(arrowRight);
        }
        const arrowLeft = screen.getByLabelText(previousMonthLabel);
        for (let i = 0; i < times; i++) {
          userEvent.click(arrowLeft);
        }
        const shownMonthEl = screen.getByLabelText(monthLabel);
        expect(shownMonthEl).toHaveTextContent(month.toString());
      }
    );
    it('Check if left arrow stops at current month', () => {
      const arrowRight = screen.getByLabelText(nextMonthLabel);
      for (let i = 0; i < 10; i++) {
        userEvent.click(arrowRight);
      }
      const arrowLeft = screen.getByLabelText(previousMonthLabel);
      for (let i = 0; i < 11; i++) {
        userEvent.click(arrowLeft);
      }
      const shownMonthEl = screen.getByLabelText(monthLabel);
      expect(shownMonthEl).toHaveTextContent('January');
      const shownYearEl = screen.getByLabelText(yearLabel);
      expect(shownYearEl).toHaveTextContent('2022');
    });
  });
});
