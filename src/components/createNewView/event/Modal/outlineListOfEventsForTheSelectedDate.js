import React from 'react';
import ReactDOM from 'react-dom';
import {OneEventOnList} from './components/createNewView/event/'



const OutlineListOfEventsForTheSelectedDate = (props) => {
    console.log('@@@@@@',props);
    console.log('@@@@@@',);

    let arrEventsOnSelectedDate = props.searchesForEventsOnSelectedDate();

    if (arrEventsOnSelectedDate) {
        return arrEventsOnSelectedDate.map((item) => {
            return <OneEventOnList item={item}/>;
        });
    }



export {OutlineListOfEventsForTheSelectedDate};