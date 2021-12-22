export interface ReachDate {
  month: number;
  year: number;
}

export const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const getNewReachDate = (
  previous: ReachDate,
  isLeft: boolean
): ReachDate => {
  if (isLeft) {
    const newReachDate = {
      ...previous,
    };
    if (previous.month === 0) {
      newReachDate.month = 11;
      newReachDate.year -= 1;
    } else {
      newReachDate.month -= 1;
    }
    return newReachDate;
  } else {
    const newReachDate = {
      ...previous,
    };
    if (previous.month === 11) {
      newReachDate.month = 0;
      newReachDate.year += 1;
    } else {
      newReachDate.month += 1;
    }
    return newReachDate;
  }
};

export const moneyMask = (value: string): string => {
  if (value === '') {
    return '0.00';
  }
  value = value.replace('.', '').replace(',', '').replace(/\D/g, '');
  const result = Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
  }).format(parseFloat(value) / 100);
  return result;
};

export const getCurrentInitDate = (): ReachDate => {
  const now = new Date();
  const currentDate = {
    month: now.getMonth(),
    year: now.getFullYear(),
  } as ReachDate;
  return currentDate;
};

export const getInitDate = (currentDate: ReachDate): ReachDate => {
  const newInitDate = { ...currentDate } as ReachDate;
  if (currentDate.month === 11) {
    newInitDate.month = 0;
    newInitDate.year += 1;
  } else {
    newInitDate.month += 1;
  }
  return newInitDate;
};

export const amountString2Number = (value: string): number => {
  if (value === '') {
    return 0.0;
  }
  const newValue = Number(
    value.replace('.', '').replace(',', '').replace(/\D/g, '')
  );
  return newValue / 100;
};

export const getMonthsNum = (
  initDate: ReachDate,
  reachDate: ReachDate
): number => {
  let monthsNum = 12 * (reachDate.year - initDate.year);
  monthsNum -= initDate.month;
  monthsNum += reachDate.month;
  return monthsNum;
};
