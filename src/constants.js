import numberOfDaysInAMonthInYear from './components/auxiliary/numberOfDaydInAMonth'

export const DATETODAY = new Date();
export const DAY = DATETODAY.getDate();
export const MONTH = DATETODAY.toLocaleString('en-US', {month: 'long'});
export const YEAR = DATETODAY.getFullYear();
export const ALLMONTH = numberOfDaysInAMonthInYear(YEAR);
export const MINIMUMEVENTTIMELENGTH = 15;
export const EMPTYOBJECT = {
    monthAndDate: '',
    text: '',
    title: '',
    to: '',
    year: '',
    _id: ''
};
export const NAMEOFALLMONTH = [
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
    'December'
];
export const NAMEOFDAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
export const FULLNAMEOFDAY = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
export const NUMBEROFTHEFIRSTDAYOFTHEWEEK = [0, 7, 14, 21, 28, 35];
export const NUMBEROFDAY = [0, 1, 2, 3, 4, 5, 6];
export const ALLEVENTS = [
    {
        from: "01:00",
        monthAndDate: "2 September",
        text: "111rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr",
        title: "111",
        to: "01:15",
        year: 2019,
        _id: '2019 2 September 01:00'
    },
    {
        from: "01:16",
        monthAndDate: "2 September",
        text: "222",
        title: "222",
        to: "01:31",
        year: 2019,
        _id: '2019 2 September 01:16'

    },
    {
        from: "01:32",
        monthAndDate: "2 September",
        text: "222",
        title: "222",
        to: "01:47",
        year: 2019,
        _id: '2019 2 September 01:32'

    },
    {
        from: "01:00",
        monthAndDate: "12 November",
        text: "111",
        title: "111",
        to: "01:15",
        year: 2019,
        _id: '2019 12 November 01:00'

    },
    {
        from: "01:00",
        monthAndDate: "2 November",
        text: "111",
        title: "111",
        to: "01:15",
        year: 2019,
        _id: '2019 2 November 01:00'

    },
];


