import {CreatOneWeek} from "./../week";
import React from "react";
import PropTypes from "prop-types";
import * as Constants from './../../../../constants'


function MakeTitleWeek(props) {
    return props.arrNameOfDay.map((item) => {
        return <td className='tdStyle weekDay' key={'key'+ item}>{item}</td>
    })
}

function MakeWeek(props) {
    return props.arrQuantityOfDay.map((item) => {
        return <CreatOneWeek
            i={item}
            newArr={props.newArr}
            month={props.month}
            onClick={props.onClick}
            allEvent={props.allEvent}
            year={props.year}
            todayDate={props.todayDate}
        />
    })
}

const CreateMonth = (props) => {
    return (
        <div className='oneMonthIntoYear'>
            <div className={`monthName ${props.month}`}
                 onClick={(e) => {
                     props.clickForChangeView('Month', e.target.className.substring(10))
                 }}>
            </div>
            <div>
                <table>
                    <tbody>
                    <tr>
                        <MakeTitleWeek arrNameOfDay={Constants.NAMEOFDAY}/>
                    </tr>
                    <MakeWeek arrQuantityOfDay={Constants.NUMBEROFTHEFIRSTDAYOFTHEWEEK}
                              newArr={props.newArr}
                              month={props.month}
                              onClick={props.toggleModal}
                              allEvent={props.allEvent}
                              year={props.year}
                              todayDate={props.todayDate}
                    />
                    </tbody>
                </table>
            </div>
        </div>
    )
};

CreateMonth.propTypes = {
    newArr: PropTypes.array.isRequired,
    month: PropTypes.string.isRequired,
    clickForViewMonth: PropTypes.func,
    toggleModal: PropTypes.func.isRequired,
    allEvent: PropTypes.array.isRequired,
    year: PropTypes.number.isRequired,
    todayDate: PropTypes.object.isRequired,
    clickForChangeView: PropTypes.func.isRequired,
};
MakeWeek.propTypes = {
    arrQuantityOfDay: PropTypes.array.isRequired,
    newArr: PropTypes.array.isRequired,
    month: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    allEvent: PropTypes.array.isRequired,
    year: PropTypes.number.isRequired,
    todayDate: PropTypes.object.isRequired,
};
MakeTitleWeek.propTypes = {
    arrNameOfDay: PropTypes.array.isRequired
};

CreateMonth.defaultProps = {};
MakeWeek.defaultProps = {};
MakeTitleWeek.defaultProps = {};


export {CreateMonth}
