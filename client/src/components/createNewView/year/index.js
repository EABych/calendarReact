import {CreateMonth} from "./month";
import React from "react";
import PropTypes from 'prop-types'
import './style/Year.css';
import * as Constants from './../../../constants';

function MakeMonthList(props) {
    return props.arrNameOfDay.map((item, i) => {
        return (
            <div className='oneMonthInto' data-value={item} key={'key'+ item + i} >
                <CreateMonth newArr={props.newArr[item]}
                             month={item}
                             clickForViewMonth={props.clickForViewMonth}
                             toggleModal={props.toggleModal}
                             allEvent={props.allEvent}
                             year={props.year}
                             todayDate={props.todayDate}
                             clickForChangeView={props.clickForChangeView}/>
            </div>
        )
    })
}

const CreatYear = (props) => {
    return (
        <div className='bigCalendar mainStyle'>
            <MakeMonthList newArr={props.newArr}
                           clickForViewMonth={props.clickForViewMonth}
                           toggleModal={props.toggleModal}
                           arrNameOfDay={Constants.NAMEOFALLMONTH}
                           allEvent={props.allEvent}
                           year={props.year}
                           todayDate={props.todayDate}
                           clickForChangeView={props.clickForChangeView}/>
        </div>
    )
};

CreatYear.propTypes = {
    year: PropTypes.number.isRequired,
    allEvent: PropTypes.array.isRequired,
    todayDate: PropTypes.object.isRequired,
    clickForChangeView: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    allMonth: PropTypes.object,
};

MakeMonthList.propTypes = {
    newArr: PropTypes.object.isRequired,
    clickForViewMonth: PropTypes.func,
    toggleModal: PropTypes.func.isRequired,
    arrNameOfDay: PropTypes.array.isRequired,
    allEvent: PropTypes.array.isRequired,
    year: PropTypes.number.isRequired,
    todayDate: PropTypes.object.isRequired,
    clickForChangeView: PropTypes.func.isRequired,
};

CreatYear.defaultProps = {};
MakeMonthList.defaultProps = {};

export {CreatYear}