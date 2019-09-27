import {CreatOneWeek} from "./week";
import React from "react";
import './Month.css'
import {Modal} from './event/Modal'
import {OutlineListOfEventsForTheSelectedDate} from './event/Modal/outlineListOfEventsForTheSelectedDate'


function MakeTitleWeek(props) {
    return props.arrNameOfDay.map((item) => {
        return <td className='tdStyle weekDayOnMonth' key={item}>{item}</td>
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
                             todayDate={props.todayDate}
                             newValueInput={props.newValueInput}
        />
    })
}

function MakeInputForAddTime(props) {
    return (
        <div className='divForPAndInput'>
            <p>{props.name}
            </p>
            <input type="time"
                   name="selected_time"
                   list="time-list"
                   id={props.numberOfInputValue}
                   onChange={props.newValueInput}
            />
        </div>

    )
}

function MakeInputForAddDiscriptionEvent(props) {
    return (
        <div className='divForPAndInput'>
            <p>{props.defaultValue}</p>

            <input type="text"
                                      id={props.id}
                   onChange={props.newValueInput}/>
        </div>
    )
}


const CreateMonth = (props) => {
    const arrNameOfDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const arrQuantityOfDay = [0, 7, 14, 21, 28, 35];

    return (
        <div className='oneMonth'>
            <Modal open={props.showModal} onClose={props.toggleModal}>
                <div className='modalInput'>
                    <ul>
                        <OutlineListOfEventsForTheSelectedDate
                            year={props.year}
                            activeDate={props.activeDate}
                            allEvent={props.allEvent}
                            forWhat='modalWindow'
                            deleteEvent={props.deleteEvent}
                        />
                    </ul>
                    <MakeInputForAddTime name='From:' numberOfInputValue='firstInputValue'
                                         newValueInput={props.newValueInput}/>
                    <MakeInputForAddTime name='To:' numberOfInputValue='secondInputValue'
                                         newValueInput={props.newValueInput}/>
                    <MakeInputForAddDiscriptionEvent defaultValue='New event (title):' id='title'
                                                     newValueInput={props.newValueInput}/>
                    <MakeInputForAddDiscriptionEvent defaultValue='Event description:' id='text'
                                                     newValueInput={props.newValueInput}/>
                    <button onClick={props.addNewEvent} class='buttonAddNewEvent' >Add</button>
                </div>
            </Modal>

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
                              todayDate={props.todayDate}
                              newValueInput={props.newValueInput}
                    />
                    </tbody>
                </table>
            </div>
        </div>
    )

}


export {CreateMonth}
