import {CreateMonth} from "./month";
import React from "react";
import './Year.css'


function MakeMonthList(props) {
    return props.arrNameOfDay.map((item , i ) => {
        return (
            <div className='oneMonthInto' data-value={item}  key={i}>
                <CreateMonth newArr={props.newArr[item]}
                             month={item}
                             clickForViewMonth={props.clickForViewMonth}
                             toggleModal={props.toggleModal}
                             allEvent={props.allEvent}
                             year={props.year}
                             todayDate={props.todayDate}

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
                           allEvent={props.allEvent}
                           year={props.year}
                           todayDate={props.todayDate}

            />
        </div>
    )
}

export {CreatYear}