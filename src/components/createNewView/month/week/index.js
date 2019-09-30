import {CreatOneDay} from "../day";
import React from "react";
import PropTypes from "prop-types";
import * as Constants from "../../../../constants";

function MakeDayList(props) {
    return props.numberOfDay.map((item) => {
        return (
            <CreatOneDay
                number={item + props.i}
                newArr={props.newArr}
                month={props.month}
                onClick={props.onClick}
                year={props.year}
                activeDate={props.activeDate}
                allEvent={props.allEvent}
                todayDate={props.todayDate}
                newValueInput={props.newValueInput}
            />
        )
    })
}

const CreatOneWeek = (props) => {
    return (
        <tr>
            <MakeDayList i={props.i}
                         newArr={props.newArr}
                         month={props.month}
                         onClick={props.onClick}
                         numberOfDay={Constants.NUMBEROFDAY}
                         year={props.year}
                         activeDate={props.activeDate}
                         allEvent={props.allEvent}
                         todayDate={props.todayDate}
                         newValueInput={props.newValueInput}
            />
        </tr>
    )
};

CreatOneWeek.propTypes = {
    i: PropTypes.array.isRequired,
    newArr: PropTypes.array.isRequired,
    month: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    allEvent: PropTypes.object.isRequired,
    year: PropTypes.number.isRequired,
    newValueInput: PropTypes.func.isRequired,
    activeDate: PropTypes.string.isRequired,
    todayDate: PropTypes.object.isRequired,
};
MakeDayList.propTypes = {
    numberOfDay: PropTypes.array.isRequired,
    i: PropTypes.array.isRequired,
    newArr: PropTypes.array.isRequired,
    month: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    allEvent: PropTypes.object.isRequired,
    year: PropTypes.number.isRequired,
    newValueInput: PropTypes.func.isRequired,
    activeDate: PropTypes.string.isRequired,
    todayDate: PropTypes.object.isRequired,
};

CreatOneWeek.defaultProps = {};
MakeDayList.defaultProps = {};


export {CreatOneWeek}