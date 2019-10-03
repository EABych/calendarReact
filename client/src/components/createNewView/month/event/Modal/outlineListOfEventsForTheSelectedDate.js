import React from 'react';
import {OneEventOnList} from './oneEventOnList'
import {Modal} from "./index";

function searchesForEventsOnSelectedDate(year, day, allEvent) {
    return allEvent.filter(function (date) {
        return date.year === year && date.monthAndDate === day;
    });
}

const OutlineListOfEventsForTheSelectedDate = (props) => {
    if (props.forWhat === 'modalWindow') {
        let arrEventsOnSelectedDate = searchesForEventsOnSelectedDate(props.year, props.activeDate, props.allEvent);
        arrEventsOnSelectedDate.sort((a, b) => (a.from > b.from) ? 1 : ((b.from > a.from) ? -1 : 0));
        if (arrEventsOnSelectedDate.length) {

            console.log('@@@@@ arrEventsOnSelectedDate', arrEventsOnSelectedDate);
            
            let arr = arrEventsOnSelectedDate.map((item) => {
                return <OneEventOnList item={item}
                                       forWhat={props.forWhat}
                                       newValueInput={props.newValueInput}
                                       arrEventsOnSelectedDate={arrEventsOnSelectedDate}
                                       deleteEvent = {props.deleteEvent}
                                       showModalEditEvent={props.showModalEditEvent}
                                       afterEditEvent={props.afterEditEvent}
                                       editEvent={props.editEvent}
                />;
            });

            

            return (
                <div className='modalInput'>
                    <ul id='event_list'>
                        <div className='modal_Description_event_title'>Events list on {props.activeDate} </div>
                        <div className='modal_Description_event_header'>
                            <div className='modal_Description_time_event'>From</div>
                            <div className='modal_Description_time_event'>To</div>
                            <div className='modal_Description_event'>Title event</div>
                            <div className='modal_Description_event'>Description event</div>
                        </div>
                        {arr}
                    </ul>
                </div>
            );
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