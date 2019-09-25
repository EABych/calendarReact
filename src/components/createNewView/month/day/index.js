import React from 'react';
import {OutlineListOfEventsForTheSelectedDate} from './../event/Modal/outlineListOfEventsForTheSelectedDate'
import './day.css'


const CreatOneDay = (props) => {
    return (
        props.newArr[props.number] ?
            (
                <td
                    onClick={props.onClick}
                    className="tdStyleMonth"
                    id={`${props.newArr[props.number]} ${props.month}`}
                >
                    {props.newArr[props.number]}
                    <ul className='eventList_ul'>
                        <OutlineListOfEventsForTheSelectedDate
                            year={props.year}
                            activeDate={props.activeDate}
                            allEvent={props.allEvent}
                            forWhat='day'
                            day={`${props.newArr[props.number]} ${props.month}`}
                        />

                    </ul>


                </td>
            ) : (
                <td className="tdStyle invisible" id="0"/>
            )
    )
};

export {CreatOneDay};