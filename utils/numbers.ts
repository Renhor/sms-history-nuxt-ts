export const formatCurrency = (number: number): string => {
  return new Intl.NumberFormat('ru-Ru', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  }).format(number);
};

export const randomBetween = (min: number, max: number): number => {
  return Math.random() * (max - min) + min;
};
