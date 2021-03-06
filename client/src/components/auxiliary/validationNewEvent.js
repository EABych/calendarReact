import * as Constants from '../../constants'
import doublesTheNumber from './doublesTheNumber';
import searchesForEventsOnSelectedDate from './searchesForEventsOnSelectedDate';

function plusDoubleZero(time) {
    if (time.length < 6) {
        const newTime = time +':00';
        return newTime;
    } else {
        return time;
    }
}


export default function validationNewEvent(firstInputValue,
    secondInputValue, 
    year, 
    activeDate, 
    allEvent,
    title,
    text) {

    firstInputValue = plusDoubleZero(firstInputValue);
    secondInputValue = plusDoubleZero(secondInputValue);

    // helper variables for comparing time
    let firstTime = "01/01/2000 " + firstInputValue;
    let firstTimePlusFifteen = new Date(new Date(firstTime).getTime() + (Constants.MINIMUMEVENTTIMELENGTH * 60 * 1000));
    const hours = doublesTheNumber(firstTimePlusFifteen.getHours());
    const minutes = doublesTheNumber(firstTimePlusFifteen.getMinutes());
    firstTimePlusFifteen = hours.toString() + ':' + minutes.toString();
    firstTimePlusFifteen =plusDoubleZero(firstTimePlusFifteen);

    let eventOverlayCheck = searchesForEventsOnSelectedDate(year, activeDate, allEvent).every(function (eventTime) {
        return firstInputValue > eventTime.to || secondInputValue < eventTime.from
    });
    let objResponse = {};
    if (!firstInputValue || !secondInputValue) {
        alert('error: add time');
        return objResponse; 
    } else if (firstInputValue > secondInputValue) {
        alert('error: event start time is longer than the end');
        return objResponse; 
    } else if (firstTimePlusFifteen > secondInputValue) {
        alert('error: minimum event duration 15 minutes');
        return objResponse; 
    } else if (eventOverlayCheck) {
        return {
            year: year,
            monthAndDate: activeDate,
            from: firstInputValue,
            to: secondInputValue,
            title: title,
            text: text,
            _id: `${year} ${activeDate} ${firstInputValue}`
        };
    } else {
        alert('error: event intersects with an existing one');
        return objResponse; 
    }
};