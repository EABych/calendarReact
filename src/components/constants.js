import numberOfDaysInAMonthInYear from './auxiliary/numberOfDaydInAMonth'

export const DATETODAY = new Date();
export const DAY = DATETODAY.getDate();
export const MONTH = DATETODAY.toLocaleString('en-US', {month: 'long'});
export const YEAR = DATETODAY.getFullYear();
export const ALLMONTH = numberOfDaysInAMonthInYear(YEAR)
export const MINIMUMEVENTTIMELENGTH = 15;




