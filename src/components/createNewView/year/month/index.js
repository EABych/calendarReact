import {CreatOneWeek} from "./../week";
import React from "react";


function MakeTitleWeek(props) {
    return props.arrNameOfDay.map((item) => {
        return <td className='tdStyle weekDay' key={item}>{item}</td>
    })
}

function MakeWeek(props) {
    return props.arrQuantityOfDay.map((item) => {
        return <CreatOneWeek i={item} newArr={props.newArr} month={props.month} onClick={props.onClick} key={item}/>
    })
}


const CreateMonth = (props) => {

    const arrNameOfDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const arrQuantityOfDay = [0, 7, 14, 21, 28, 35];

    return (
        <div className='oneMonth'>
            <div className='monthName' onClick={props.clickForViewMonth}>
                {props.month}
            </div>
            <div >
                <table>
                    <tbody>
                    <tr>
                        <MakeTitleWeek arrNameOfDay={arrNameOfDay}/>
                    </tr>
                    <MakeWeek arrQuantityOfDay={arrQuantityOfDay} newArr={props.newArr} month={props.month}
                              onClick={props.toggleModal}/>
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export {CreateMonth}
