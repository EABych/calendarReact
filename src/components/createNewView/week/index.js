import {CreatOneDay} from "../day";
import React from "react";
import {CreateMonth} from "../month";


function MakeDayList(props) {
    return props.numberOfDay.map((item) => {
        return (
            <CreatOneDay
                number={item + props.i}
                newArr={props.newArr}
                month={props.month}
                onClick={props.onClick}
            />
        )
    })

}


const CreatOneWeek= (props) => {
    let numberOfDay = [0,1,2,3,4,5,6];
    return (
        <tr>
        <MakeDayList i={props.i} newArr={props.newArr} month={props.month} onClick={props.onClick} numberOfDay={numberOfDay} />
        </tr>
    )

}

export {CreatOneWeek}