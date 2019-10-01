import {CreatOneWeek} from "./week";
import {Modal} from './event/Modal'
import {OutlineListOfEventsForTheSelectedDate} from './event/Modal/outlineListOfEventsForTheSelectedDate'
import React from "react";
import PropTypes from "prop-types";
import * as Constants from './../../../constants'
import './style/Month.css'

function MakeInputForEdit(props) {
    return (
        <input type={props.type}
               className='eventListEvery_li'
               value={props.value}
               id={`afterEditEvent.${props.id}`}
               onChange={props.onChange}
        />
    )
}


function EditOneEvent(props) {
    return (
        <div className='redFrame'>
            <p>Create event</p>
            <div>
                <MakeInputForEdit type='time'
                                  value={props.editFirstInputValue}
                                  id='editFirstInputValue'
                                  onChange={props.newValueInput}/>
                <MakeInputForEdit type='time'
                                  value={props.editSecondInputValue}
                                  id='editSecondInputValue'
                                  onChange={props.newValueInput}/>
                <MakeInputForEdit type='text'
                                  value={props.editTitle}
                                  id='editTitle'
                                  onChange={props.newValueInput}/>
                <MakeInputForEdit type='text'
                                  value={props.editText}
                                  id='editText'
                                  onChange={props.newValueInput}/>
            </div>
            <button className='smallButton'
                    onClick={props.cancelEditEvent}>
                Cancel
            </button>
            <button className='smallButton'
                    id={props.afterEditEvent._id}
                    onClick={props.deleteEvent}>
                Delete event
            </button>
            <button className='smallButton' onClick={props.saveEditEvent}>Save changes</button>
        </div>
    )
}

function MakeTitleWeek(props) {
    return props.arrNameOfDay.map((item) => {
        return <td className='tdStyle weekDayOnMonth' key={'key' + item}>{item}</td>
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
                        cancelEditEvent={props.cancelEditEvent}
                        editFirstInputValue={props.editFirstInputValue}
                        editSecondInputValue={props.editSecondInputValue}
                        editTitle={props.editTitle}
                        editText={props.editText}
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
    clickForViewMonth: PropTypes.func,
    toggleModal: PropTypes.func.isRequired,
    showModal: PropTypes.bool.isRequired,
    allEvent: PropTypes.array.isRequired,
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
    allEvent: PropTypes.array.isRequired,
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
