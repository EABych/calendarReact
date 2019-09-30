import {CreatOneDay} from "./../day";
import React from "react";
import PropTypes from 'prop-types'
import * as Constants from "../../../../constants";

function MakeDayList(props) {
    return props.numberOfDay.map((item) => {
        return (
            <CreatOneDay
                number={item + props.i}
                newArr={props.newArr}
                month={props.month}
                onClick={props.onClick}
                allEvent={props.allEvent}
                year={props.year}
                todayDate={props.todayDate}
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
                         allEvent={props.allEvent}
                         year={props.year}
                         todayDate={props.todayDate}
            />
        </tr>
    )
};

CreatOneWeek.propTypes = {
    i: PropTypes.number.isRequired,
    newArr: PropTypes.array.isRequired,
    month: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    key: PropTypes.number.isRequired,
    allEvent: PropTypes.object.isRequired,
    year: PropTypes.number.isRequired,
    todayDate: PropTypes.object.isRequired,
};
MakeDayList.propTypes = {
    i: PropTypes.number.isRequired,
    newArr: PropTypes.array.isRequired,
    month: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    numberOfDay: PropTypes.array.isRequired,
    allEvent: PropTypes.object.isRequired,
    year: PropTypes.number.isRequired,
    todayDate: PropTypes.object.isRequired,
};

CreatOneWeek.defaultProps = {};
MakeDayList.defaultProps = {};

export {CreatOneWeek}