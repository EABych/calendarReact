import React from 'react';
import {OneEventOnList} from './oneEventOnList'


const OutlineListOfEventsForTheSelectedDate = (props) => {

    console.log('@@@@@@',props.forWhat );
    console.log('@@@@@@',props.allEvent);

    if (props.forWhat === 'modalWindow') {
        function searchesForEventsOnSelectedDate(year, activeDate, allEvent) {
            return allEvent.filter(function (date) {
                return date.year === year && date.monthAndDate === activeDate;
            });
        }

        let arrEventsOnSelectedDate = searchesForEventsOnSelectedDate(props.year, props.activeDate, props.allEvent);
        if (arrEventsOnSelectedDate) {
            return arrEventsOnSelectedDate.map((item) => {
                return <OneEventOnList item={item} key={item}/>;
            });
        } else {
            return [];
        }

    } else if (props.forWhat === 'day') {

        console.log('allEvent',props.allEvent);
        function searchesForEventsOnSelectedDate(year, activeDate, allEvent) {
            return allEvent.filter(function (date) {
                return date.year === year && date.monthAndDate === activeDate;
            });
        }

        let arrEventsOnSelectedDate = searchesForEventsOnSelectedDate(props.year, props.day, props.allEvent);
        if (arrEventsOnSelectedDate) {


            if (arrEventsOnSelectedDate.length > 3) {
                arrEventsOnSelectedDate.splice(3);
                console.log('@@@@@@',arrEventsOnSelectedDate);
                var test = arrEventsOnSelectedDate.map((item) => {
                    return <OneEventOnList item={item} key={item}/>;
                });
                test.push(<p>for view more, click this day</p>)
                return test;

            } else {
                return arrEventsOnSelectedDate.map((item) => {
                    return <OneEventOnList item={item} key={item}/>;
                });
            }

        } else {
            return [];
        }
    }
};


export {OutlineListOfEventsForTheSelectedDate};