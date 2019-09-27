import React from 'react';
import {OutlineListOfEventsForTheSelectedDate} from './../event/Modal/outlineListOfEventsForTheSelectedDate'

const CreatOneDay = (props) => {
    let isThisDayToday = false;
    if ((props.todayDate.year === props.year) && (props.todayDate.monthName === props.month) && (props.todayDate.today === props.newArr[props.number])) {
        isThisDayToday = true;
    }
    return (
        props.newArr[props.number] ?
            (<td onClick={props.onClick}
                 className={isThisDayToday ? 'today tdStyleMonth' : 'tdStyleMonth'}
                 id={`${props.newArr[props.number]} ${props.month}`}>
                    {props.newArr[props.number]}
                    <ul className='eventList_ul'>
                        <OutlineListOfEventsForTheSelectedDate
                            year={props.year}
                            activeDate={props.activeDate}
                            allEvent={props.allEvent}
                            forWhat='day'
                            day={`${props.newArr[props.number]} ${props.month}`}
                            newValueInput={props.newValueInput}
                        />
                    </ul>
                </td>
            ) : (<td className="tdStyle invisible" id="0"/>)
    )
};

export {CreatOneDay};