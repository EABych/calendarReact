import {CreatOneDay} from "../day";
import React from "react";


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
            />
        )
    })

}


const CreatOneWeek= (props) => {
    let numberOfDay = [0,1,2,3,4,5,6];
    return (
        <tr>
        <MakeDayList i={props.i}
                     newArr={props.newArr}
                     month={props.month}
                     onClick={props.onClick}
                     numberOfDay={numberOfDay}
                     year={props.year}
                     activeDate={props.activeDate}
                     allEvent={props.allEvent}
                     todayDate={props.todayDate}
        />
        </tr>
    )

}

export {CreatOneWeek}