import React from 'react';
import PropTypes from "prop-types";

const CreatOneDay = (props) => {
    let isThereAnEvent = 0;
    props.allEvent.map((item) => {
        if ((item.monthAndDate === `${props.newArr[props.number]} ${props.month}`) && props.year === item.year) {
            return isThereAnEvent += 1;
        }
    });
    let isThisDayToday = false;
    if ((props.todayDate.year === props.year) &&
        (props.todayDate.monthName === props.month) &&
        (props.todayDate.today === props.newArr[props.number])) {
        isThisDayToday = true;
    }
    let classNameTd = '';
    if (isThisDayToday === true && isThereAnEvent > 0) {
        classNameTd = 'tdStyleYear red today'
    } else if (isThereAnEvent) {
        classNameTd = 'tdStyleYear red'
    } else if (isThisDayToday) {
        classNameTd = 'tdStyleYear today'
    } else {
        classNameTd = 'tdStyleYear'
    }

    return (
        props.newArr[props.number] ?
            (<td
                id={`${props.newArr[props.number]} ${props.month}`}
                className={classNameTd}
                data-tooltip={isThereAnEvent ? `${isThereAnEvent} events in this day` : null}
            >
                {props.newArr[props.number]}
            </td>) : (<td className="tdStyle invisible" id="0"/>)
    )
};

CreatOneDay.propTypes = {
    number: PropTypes.number.isRequired,
    newArr: PropTypes.array.isRequired,
    month: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    allEvent: PropTypes.object.isRequired,
    year: PropTypes.number.isRequired,
    todayDate: PropTypes.object.isRequired,
};

CreatOneDay.defaultProps = {};



export {CreatOneDay};