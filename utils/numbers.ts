export const formatNumber = (number: number): string => {
  return new Intl.NumberFormat('ru-Ru', {
    style: 'currency',
    currency: 'RUB',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0
  }).format(number);
};
