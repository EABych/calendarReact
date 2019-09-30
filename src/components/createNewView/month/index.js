import {CreatOneWeek} from "./week";
import {Modal} from './event/Modal'
import {OutlineListOfEventsForTheSelectedDate} from './event/Modal/outlineListOfEventsForTheSelectedDate'
import React from "react";
import PropTypes from "prop-types";
import * as Constants from './../../../constants'
import './style/Month.css'


function EditOneEvent(props) {
    const {from, to, title, text} = props.afterEditEvent;
    return (
        <div className='redFrame'>
            <p>Create event</p>
            <div>
                <input type="time"
                       className='eventListEvery_li'
                       defaultValue={from}
                       id='afterEditEvent.from'
                       onChange={props.newValueInput}
                />
                <input type="time"
                       className='eventListEvery_li'
                       defaultValue={to}
                       id='afterEditEvent.to'
                       onChange={props.newValueInput}
                />
                <input className='eventListEvery_li'
                       defaultValue={title}
                       id='afterEditEvent.title'
                       onChange={props.newValueInput}
                />
                <input type='text'
                       className='eventListEvery_li'
                       defaultValue={text}
                       id='afterEditEvent.text'
                       onChange={props.newValueInput}
                />

            </div>
            <button className='deleteButton'
                    id={props.afterEditEvent._id}
                    onClick={props.deleteEvent}>
                Delete event
            </button>
            <button className='deleteButton' onClick={props.saveEditEvent}>Save changes</button>
        </div>
    )
}

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
            <input type="text" id={props.id} onChange={props.newValueInput}/>
        </div>
    )
}

const CreateMonth = (props) => {
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
                            showModalEditEvent={props.showModalEditEvent}
                            afterEditEvent={props.afterEditEvent}
                            editEvent={props.editEvent}
                            newValueInput={props.newValueInput}
                        />
                    </ul>
                    {props.showModalEditEvent ? <EditOneEvent
                        afterEditEvent={props.afterEditEvent}
                        newValueInput={props.newValueInput}
                        saveEditEvent={props.saveEditEvent}
                        allEvent={props.allEvent}
                        deleteEvent={props.deleteEvent}
                        toggleshowModalEditEvent={props.toggleshowModalEditEvent}

                    /> : null}
                    <p className='titleAddNewEvent'> Add new event </p>
                    <MakeInputForAddTime name='From:' numberOfInputValue='firstInputValue'
                                         newValueInput={props.newValueInput}/>
                    <MakeInputForAddTime name='To:' numberOfInputValue='secondInputValue'
                                         newValueInput={props.newValueInput}/>
                    <MakeInputForAddDiscriptionEvent defaultValue='New event (title):' id='title'
                                                     newValueInput={props.newValueInput}/>
                    <MakeInputForAddDiscriptionEvent defaultValue='Event description:' id='text'
                                                     newValueInput={props.newValueInput}/>
                    <button onClick={props.addNewEvent} className='buttonAddNewEvent'>Add</button>
                </div>

            </Modal>

            <div>
                <table>
                    <tbody>
                    <tr>
                        <MakeTitleWeek arrNameOfDay={Constants.FULLNAMEOFDAY}/>
                    </tr>
                    <MakeWeek arrQuantityOfDay={Constants.NUMBEROFTHEFIRSTDAYOFTHEWEEK}
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

};

CreateMonth.propTypes = {
    newArr: PropTypes.array.isRequired,
    month: PropTypes.string.isRequired,
    clickForViewMonth: PropTypes.func.isRequired,
    toggleModal: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    allEvent: PropTypes.object.isRequired,
    year: PropTypes.number.isRequired,
    newValueInput: PropTypes.func.isRequired,
    addNewEvent: PropTypes.func.isRequired,
    activeDate: PropTypes.string.isRequired,
    todayDate: PropTypes.object.isRequired,
    deleteEvent: PropTypes.func.isRequired,
    showModalEditEvent: PropTypes.bool.isRequired

};
MakeInputForAddTime.propTypes = {
    name: PropTypes.string.isRequired,
    numberOfInputValue: PropTypes.string.isRequired,
    newValueInput: PropTypes.func.isRequired,
};
MakeInputForAddDiscriptionEvent.propTypes = {
    defaultValue: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    newValueInput: PropTypes.func.isRequired,
};
MakeTitleWeek.propTypes = {
    arrNameOfDay: PropTypes.array.isRequired,
};
MakeWeek.propTypes = {
    arrQuantityOfDay: PropTypes.array.isRequired,
    newArr: PropTypes.array.isRequired,
    month: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    allEvent: PropTypes.object.isRequired,
    year: PropTypes.number.isRequired,
    newValueInput: PropTypes.func.isRequired,
    activeDate: PropTypes.string.isRequired,
    todayDate: PropTypes.object.isRequired,
};

CreateMonth.defaultProps = {};
MakeInputForAddTime.defaultProps = {};
MakeInputForAddDiscriptionEvent.defaultProps = {};
MakeTitleWeek.defaultProps = {};
MakeWeek.defaultProps = {};


export {CreateMonth}
