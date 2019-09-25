import {CreatOneWeek} from "./week";
import React from "react";
import './Month.css'
import {Modal} from './event/Modal'
import {OutlineListOfEventsForTheSelectedDate} from './event/Modal/outlineListOfEventsForTheSelectedDate'


function MakeTitleWeek(props) {
    return props.arrNameOfDay.map((item) => {
        return <td className='tdStyle weekDay' key={item}>{item}</td>
    })
}

function MakeWeek(props) {
    return props.arrQuantityOfDay.map((item) => {
        return <CreatOneWeek i={item}
                             newArr={props.newArr}
                             month={props.month}
                             onClick={props.onClick}
                             key={item}
                             year={props.year}
                             activeDate={props.activeDate}
                             allEvent={props.allEvent}
        />
    })
}

function MakeInputForAddTime(props) {
    return (
        <p>{props.name}
            <input type="time"
                   name="selected_time"
                   list="time-list"
                   id={props.numberOfInputValue}
                   onChange={props.newValueInput}
            />
        </p>
    )
}

function MakeInputForAddDiscriptionEvent(props) {
    return (
        <input type="text"
               defaultValue={props.defaultValue}
               id={props.id}
               onChange={props.newValueInput}/>)
}


const CreateMonth = (props) => {
    const arrNameOfDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const arrQuantityOfDay = [0, 7, 14, 21, 28, 35];

    return (
        <div className='oneMonth'>
            <Modal open={props.showModal} onClose={props.toggleModal}>
                <div className=''>
                    <ul>
                        <OutlineListOfEventsForTheSelectedDate
                            year={props.year}
                            activeDate={props.activeDate}
                            allEvent={props.allEvent}

                            forWhat='modalWindow'
                        />
                    </ul>
                    <MakeInputForAddTime name='from' numberOfInputValue='firstInputValue'
                                         newValueInput={props.newValueInput}/>
                    <MakeInputForAddTime name='to' numberOfInputValue='secondInputValue'
                                         newValueInput={props.newValueInput}/>
                    <MakeInputForAddDiscriptionEvent defaultValue='New event' id='title'
                                                     newValueInput={props.newValueInput}/>
                    <MakeInputForAddDiscriptionEvent defaultValue='Event description' id='text'
                                                     newValueInput={props.newValueInput}/>
                                                     <button onClick={props.addNewEvent}></button>
                </div>
            </Modal>
            <div className='monthName'>
                {props.month}
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
                              year={props.year}
                              activeDate={props.activeDate}
                              allEvent={props.allEvent}
                    />
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export {CreateMonth}
