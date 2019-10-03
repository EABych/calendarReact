import numberOfDaysInAMonthInYear from './components/auxiliary/numberOfDaydInAMonth'


export const DATETODAY = new Date();
export const DAY = DATETODAY.getDate();
export const MONTH = DATETODAY.toLocaleString('en-US', {month: 'long'});
export const YEAR = DATETODAY.getFullYear();
export const ALLMONTH = numberOfDaysInAMonthInYear(YEAR);
export const MINIMUMEVENTTIMELENGTH = 15;
export const KEYSMAP =  {
    event_from: 'from',
    event_monthAndDate: 'monthAndDate',
    event_text: 'text',
    event_title: 'title',
    event_to: 'to',
    event_year: 'year',
    event_id: '_id'
};
export const REVERSEKEYSMAP =  {
    from: 'event_from',
    monthAndDate: 'event_monthAndDate',
    text: 'event_text',
    title: 'event_title',
    to: 'event_to',
    year: 'event_year',
    _id: 'event_id'
};
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


