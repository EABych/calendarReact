import React from 'react';
import {OutlineListOfEventsForTheSelectedDate} from './../event/Modal/outlineListOfEventsForTheSelectedDate'
import PropTypes from "prop-types";

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

CreatOneDay.propTypes = {
    number: PropTypes.array.isRequired,
    newArr: PropTypes.array.isRequired,
    month: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    allEvent: PropTypes.object.isRequired,
    year: PropTypes.number.isRequired,
    newValueInput: PropTypes.func.isRequired,
    activeDate: PropTypes.string.isRequired,
    todayDate: PropTypes.object.isRequired,
};

CreatOneDay.defaultProps = {};


export {CreatOneDay};