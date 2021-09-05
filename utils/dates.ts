import { randomBetween } from '~/utils/numbers';

export const randomDate = (date1 = '01-01-1970', date2 = new Date().toLocaleDateString()): Date => {
  const time1 = new Date(date1).getTime();
  const time2 = new Date(date2).getTime();

  if (date1 > date2) {
    return new Date(randomBetween(time2, time1));
  } else{
    return new Date(randomBetween(time1, time2));
  }
};
