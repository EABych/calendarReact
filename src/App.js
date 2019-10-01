import React from 'react';
import './App.css';
import {CreatYear} from './components/createNewView/year';
import {CreateMonth} from "./components/createNewView/month";
import Header from './components/Header';
import * as Constants from './constants'
import numberOfDaysInAMonthInYear from './components/auxiliary/numberOfDaydInAMonth'
import validationNewEvent from './components/auxiliary/validationNewEvent'
import findActiveEvent from './components/auxiliary/findActiveEvent'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todayDate: {
                year: Constants.YEAR,
                monthName: Constants.MONTH,
                today: Constants.DAY
            },
            year: Constants.YEAR,
            monthName: Constants.MONTH,
            today: Constants.DAY,
            allMonth: Constants.ALLMONTH,
            allEvent: Constants.ALLEVENTS,

            activeWindow: 'Year',
            activeDate: '',
            activeEvent: Constants.EMPTYOBJECT,
            afterEditEvent: Constants.EMPTYOBJECT,


            firstInputValue: '',
            secondInputValue: '',
            title: '',
            text: '',

            editFirstInputValue: '',
            editSecondInputValue: '',
            editTitle: '',
            editText: '',

            showModal: false,
            showModalEditEvent: false,
        };

        this.editEvent = this.editEvent.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
        this.addNewEvent = this.addNewEvent.bind(this);
        this.newValueInput = this.newValueInput.bind(this);
        this.saveEditEvent = this.saveEditEvent.bind(this);
        this.cancelEditEvent = this.cancelEditEvent.bind(this);
        this.changeYearInState = this.changeYearInState.bind(this);
        this.clickForViewMonth = this.clickForViewMonth.bind(this);
        this.clickForChangeView = this.clickForChangeView.bind(this);
        this.clickForChangeYear = this.clickForChangeYear.bind(this);
        this.changeYearInStateToOne = this.changeYearInStateToOne.bind(this);
        this.changeMonthInStateToOne = this.changeMonthInStateToOne.bind(this);
    }

    whatRenderNowHeader() {
        return <Header year={this.state.year}
                       month={this.state.monthName}
                       allMonth={this.state.allMonth}
                       activeWindow={this.state.activeWindow}
                       onClick={this.changeYearInState}
                       clickForViewMonth={this.clickForViewMonth}
                       clickForChangeView={this.clickForChangeView}
                       changeYearInStateToOne={this.changeYearInStateToOne}
                       changeMonthInStateToOne={this.changeMonthInStateToOne}
        />
    }

    whatRenderNowMain() {
        if (this.state.activeWindow === 'Year') {
            return <CreatYear todayDate={this.state.todayDate}
                              year={this.state.year}
                              newArr={this.state.allMonth}
                              allEvent={this.state.allEvent}
                              clickForChangeView={this.clickForChangeView}
                              toggleModal={this.toggleModal}
            />
        } else {
            return <CreateMonth todayDate={this.state.todayDate}
                                month={this.state.monthName}
                                year={this.state.year}
                                allEvent={this.state.allEvent}
                                activeDate={this.state.activeDate}
                                afterEditEvent={this.state.afterEditEvent}
                                showModalEditEvent={this.state.showModalEditEvent}
                                newArr={this.state.allMonth[this.state.monthName]}
                                editFirstInputValue={this.state.editFirstInputValue}
                                editSecondInputValue={this.state.editSecondInputValue}
                                editTitle={this.state.editTitle}
                                editText={this.state.editText}
c

                                showModal={this.state.showModal}
                                editEvent={this.editEvent}
                                toggleModal={this.toggleModal}
                                addNewEvent={this.addNewEvent}
                                deleteEvent={this.deleteEvent}
                                saveEditEvent={this.saveEditEvent}
                                newValueInput={this.newValueInput}
                                cancelEditEvent={this.cancelEditEvent}
                                clickForViewMonth={this.clickForViewMonth}
            />
        }
    }


    toggleModal = (e) => {
        const newStatus = !this.state.showModal;
        if (newStatus) {
            this.setState({
                showModal: newStatus,
                activeDate: e.target.id,
            })
        } else {
            this.setState({
                showModal: newStatus,
                activeDate: '',
                showModalEditEvent: false,
                afterEditEvent: Constants.EMPTYOBJECT,
                activeEvent: Constants.EMPTYOBJECT,
            })
        }
    }

    newValueInput(e) {
        console.log('@@@@@@', e.target.value);

        const {id, value} = e.target;
        let newId = '';
        if (id.indexOf('.') > -1) {
            // cut 'afterEditEvent.' if this edit event
            newId = id.slice(15)
        } else {
            // if new event
            newId = id
        }
        this.setState({[newId]: value});
    }

    addNewEvent() {
        const newEvent = validationNewEvent(this.state.firstInputValue,
            this.state.secondInputValue,
            this.state.year,
            this.state.activeDate,
            this.state.allEvent,
            this.state.title,
            this.state.text);

        if (Object.keys(newEvent).length) {
            let allEvent = this.state.allEvent;
            allEvent.push(newEvent);

            this.setState({
                allEvent: allEvent,
                showModal: !this.state.showModal,
                showModalEditEvent: false,
                activeEvent: Constants.EMPTYOBJECT,
                afterEditEvent: Constants.EMPTYOBJECT,

                firstInputValue: '',
                secondInputValue: '',
                title: '',
                text: '',
                activeDate: ''
            })
        }
    }

    editEvent(id) {
        const newAllEvent = findActiveEvent(this.state.allEvent, id, true)[0];
        const {from, to, title, text} = newAllEvent;
        this.setState({
            showModalEditEvent: true,
            afterEditEvent: newAllEvent,
            activeEvent: newAllEvent,
            editFirstInputValue: from,
            editSecondInputValue: to,
            editTitle: title,
            editText: text,
        });
    }

    cancelEditEvent() {
        this.setState({
            showModalEditEvent: false,
            activeEvent: Constants.EMPTYOBJECT,
            afterEditEvent: Constants.EMPTYOBJECT,

            editFirstInputValue: '',
            editSecondInputValue: '',
            editTitle: '',
            editText: '',
        })
    }

    saveEditEvent() {
        const afterEditEvent = this.state.afterEditEvent;
        const allEvent = this.state.allEvent;
        let newAllEvent = allEvent.filter((item) => {
                return (item._id !== afterEditEvent._id)
            }
        );
        const newEvent = validationNewEvent(
            this.state.editFirstInputValue,
            this.state.editSecondInputValue,
            afterEditEvent.year,
            this.state.activeDate,
            newAllEvent,
            this.state.editTitle,
            this.state.editText);

        if (Object.keys(newEvent).length) {
            newAllEvent.push(newEvent);

            this.setState({
                allEvent: newAllEvent,
                activeEvent: Constants.EMPTYOBJECT,
                showModalEditEvent: false,
                afterEditEvent: Constants.EMPTYOBJECT,

                editFirstInputValue: '',
                editSecondInputValue: '',
                editTitle: '',
                editText: '',
            })
        }
    }

    deleteEvent(e) {
        const newAllEvent = findActiveEvent(this.state.allEvent, e.target.id, false);
        this.setState({
            allEvent: newAllEvent,
            showModalEditEvent: false,
            afterEditEvent: Constants.EMPTYOBJECT,
            activeEvent: Constants.EMPTYOBJECT,
        });
    }

    clickForChangeView(data, month) {
        if (month) {
            this.setState({activeWindow: data, monthName: month})
        } else {
            this.setState({activeWindow: data})
        }
    }

    clickForViewMonth(month) {
        this.setState({monthName: month});
    }

    clickForChangeYear(e) {
        if (e.which === 13) {
            let yearValue = e.target.value;
            const newAllMonth = numberOfDaysInAMonthInYear(yearValue);
            this.setState({allMonth: newAllMonth, year: yearValue});
        }
    }

    changeYearInStateToOne(sign) {
        let newYear = this.state.year;
        sign === 'plus' ? ++newYear : --newYear;
        let newAllMonth = numberOfDaysInAMonthInYear(newYear);
        this.setState({year: newYear, allMonth: newAllMonth});
    }

    changeMonthInStateToOne(sign) {
        let thisYear = this.state.year;
        let numMonth = new Date('1 ' + this.state.monthName + ' ' + thisYear);
        numMonth = numMonth.getMonth();
        if (sign === 'plus') {
            if (numMonth === 11) {
                ++thisYear;
                numMonth = 0;
            } else {
                ++numMonth;
            }
        } else if (sign === 'minus') {
            if (numMonth === 0) {
                --thisYear;
                numMonth = 11;
            } else {
                --numMonth;
            }
        }
        let newMonth = new Date(thisYear, numMonth, 1).toLocaleString('en-US', {month: 'long'});
        this.setState({monthName: newMonth, year: thisYear})
    }

    changeYearInState(year) {
        if (this.state.activeWindow === 'Year') {
            numberOfDaysInAMonthInYear(year);
            this.setState({year: parseInt(year)});
        }
    }

    render() {
        return (
            <>
                {this.whatRenderNowHeader()}
                {this.whatRenderNowMain()}
                <footer>
                    <a href='https://github.com/EABych/calendarReact'>© calendarReact 2019</a>
                </footer>
            </>
        );
    }
}


export default Home;
