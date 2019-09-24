import {CreateMonth} from "../month";
import React from "react";
import {CreatOneWeek} from "../week";


function MakeMonthList(props) {
    return props.arrNameOfDay.map((item , i ) => {
        return (
            <div className='oneMonth' data-value={item}  key={i}>
                <CreateMonth newArr={props.newArr[item]}
                             month={item}
                             clickForViewMonth={props.clickForViewMonth}
                             toggleModal={props.toggleModal}
                />
            </div>
        )
    })
}

const CreatYear = (props) => {
    const arrNameOfDay = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    return (
        <div className='bigCalendar mainStyle' >
            <MakeMonthList newArr={props.newArr}
                           clickForViewMonth={props.clickForViewMonth}
                           toggleModal={props.toggleModal}
                           arrNameOfDay={arrNameOfDay}
            />
        </div>
    )
}

export {CreatYear}