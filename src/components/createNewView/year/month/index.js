import {CreatOneWeek} from "./../week";
import React from "react";


function MakeTitleWeek(props) {
    return props.arrNameOfDay.map((item) => {
        return <td className='tdStyle weekDay' key={item}>{item}</td>
    })
}

function MakeWeek(props) {
    return props.arrQuantityOfDay.map((item) => {
        return <CreatOneWeek
            i={item}
            newArr={props.newArr}
            month={props.month}
            onClick={props.onClick}
            key={item}
            allEvent={props.allEvent}
            year={props.year}
            todayDate={props.todayDate}

        />

    })
}


const CreateMonth = (props) => {

    const arrNameOfDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const arrQuantityOfDay = [0, 7, 14, 21, 28, 35];

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
                        <MakeTitleWeek arrNameOfDay={arrNameOfDay}/>
                    </tr>
                    <MakeWeek arrQuantityOfDay={arrQuantityOfDay}
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

}

export {CreateMonth}
