import React from 'react';
import {OneEventOnList} from './oneEventOnList'

function searchesForEventsOnSelectedDate(year, day, allEvent) {
    return allEvent.filter(function (date) {
        return date.year === year && date.monthAndDate === day;
    });
}





const OutlineListOfEventsForTheSelectedDate = (props) => {
    if (props.forWhat === 'modalWindow') {
        console.log('@@@@@@',props);
    }

    if (props.forWhat === 'modalWindow') {
        let arrEventsOnSelectedDate = searchesForEventsOnSelectedDate(props.year, props.activeDate, props.allEvent);
        arrEventsOnSelectedDate.sort((a, b) => (a.from > b.from) ? 1 : ((b.from > a.from) ? -1 : 0));

        if (arrEventsOnSelectedDate) {
            console.log('arrEventsOnSelectedDate',arrEventsOnSelectedDate);
            let arr = arrEventsOnSelectedDate.map((item) => {
                return <OneEventOnList item={item} forWhat={props.forWhat}  newValueInput={props.newValueInput} arrEventsOnSelectedDate={arrEventsOnSelectedDate} deleteEvent = {props.deleteEvent}
                />;
            });
            arr.push(<p className='titleAddNewEvent'> Add new event </p>);
            return arr;
        } else {
            return [];
        }
    } else if (props.forWhat === 'day') {
        let arrEventsOnSelectedDate = searchesForEventsOnSelectedDate(props.year, props.day, props.allEvent);
        arrEventsOnSelectedDate.sort((a, b) => (a.from > b.from) ? 1 : ((b.from > a.from) ? -1 : 0));

        if (arrEventsOnSelectedDate) {
            if (arrEventsOnSelectedDate.length > 3) {
                arrEventsOnSelectedDate.splice(3);
                let test = arrEventsOnSelectedDate.map((item) => {
                    return <OneEventOnList item={item} forWhat={props.forWhat}/>;
                });
                test.push(<p id={props.day}>for view more, click this day</p>)
                return test;
            } else {
                return arrEventsOnSelectedDate.map((item) => {
                    return <OneEventOnList item={item} forWhat={props.forWhat}/>;
                });
            }
        } else {
            return [];
        }
    }
};


export {OutlineListOfEventsForTheSelectedDate};