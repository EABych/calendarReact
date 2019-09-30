import React from 'react';
import './App.css';
import {CreatYear} from './components/createNewView/year';
import {CreateMonth} from "./components/createNewView/month";
import Header from './components/Header';
import * as Constants from './constants'
import numberOfDaysInAMonthInYear from './components/auxiliary/numberOfDaydInAMonth'
import validationNewEvent from './components/auxiliary/validationNewEvent'

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
            firstInputValue: '',
            secondInputValue: '',
            title: '',
            text: '',
            activeDate: '',
            activeWindow: 'Year',
            showModal: false,
            showModalEditEvent: false,
            afterEditEvent: {
                monthAndDate: '',
                text: '',
                title: '',
                to: '',
                year: '',
                _id: ''
            },
            activeEvent: {
                monthAndDate: '',
                text: '',
                title: '',
                to: '',
                year: '',
                _id: ''
            },
            editFirstInputValue: '',
            editSecondInputValue: '',
            editTitle: '',
            editText: '',
        };

        this.clickForViewMonth = this.clickForViewMonth.bind(this);
        this.clickForChangeYear = this.clickForChangeYear.bind(this);
        this.newValueInput = this.newValueInput.bind(this);
        this.addNewEvent = this.addNewEvent.bind(this);
        this.changeYearInState = this.changeYearInState.bind(this);
        this.clickForChangeView = this.clickForChangeView.bind(this);
        this.changeYearInStateToOne = this.changeYearInStateToOne.bind(this);
        this.changeMonthInStateToOne = this.changeMonthInStateToOne.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
        this.toggleshowModalEditEvent = this.toggleshowModalEditEvent.bind(this);
        this.editEvent = this.editEvent.bind(this);
        this.saveEditEvent = this.saveEditEvent.bind(this);
    }

    whatRenderNowHeader() {
        if (this.state.activeWindow === 'Year') {
            return <Header
                year={this.state.year}
                month={this.state.monthName}
                activeWindow={this.state.activeWindow}
                onClick={this.changeYearInState}
                clickForChangeView={this.clickForChangeView}
                changeYearInStateToOne={this.changeYearInStateToOne}
            />
        } else {
            return <Header
                allMonth={this.state.allMonth}
                year={this.state.year}
                month={this.state.monthName}
                activeWindow={this.state.activeWindow}
                onClick={this.changeYearInState}
                clickForChangeView={this.clickForChangeView}
                clickForViewMonth={this.clickForViewMonth}
                changeMonthInStateToOne={this.changeMonthInStateToOne}
            />
        }
    };

    whatRenderNowMain() {
        if (this.state.activeWindow === 'Year') {
            return <CreatYear newArr={this.state.allMonth}
                              clickForChangeView={this.clickForChangeView}
                              toggleModal={this.toggleModal}
                              allEvent={this.state.allEvent}
                              year={this.state.year}
                              todayDate={this.state.todayDate}
            />
        } else {
            return <CreateMonth newArr={this.state.allMonth[this.state.monthName]}
                                month={this.state.monthName}
                                clickForViewMonth={this.clickForViewMonth}
                                toggleModal={this.toggleModal}
                                showModal={this.state.showModal}
                                allEvent={this.state.allEvent}
                                year={this.state.year}
                                newValueInput={this.newValueInput}
                                addNewEvent={this.addNewEvent}
                                activeDate={this.state.activeDate}
                                todayDate={this.state.todayDate}
                                deleteEvent={this.deleteEvent}
                                showModalEditEvent={this.state.showModalEditEvent}
                                afterEditEvent={this.state.afterEditEvent}
                                editEvent={this.editEvent}
                                saveEditEvent={this.saveEditEvent}
                                toggleshowModalEditEvent={this.toggleshowModalEditEvent}
            />
        }
    };


    toggleModal = (e) => {
        let newStatus = !this.state.showModal;
        if (newStatus) {
            if (e.target.id) {
                this.setState({
                    showModal: newStatus, activeDate: e.target.id,
                })
            } else {
                this.setState({showModal: newStatus, activeDate: e.target.dataId})
            }
        } else {
            if (e.target.id) {
                this.setState({
                    showModal: newStatus,
                    activeDate: '',
                    showModalEditEvent: false,
                    afterEditEvent: {
                        monthAndDate: '',
                        text: '',
                        title: '',
                        to: '',
                        year: '',
                        _id: ''
                    },
                    activeEvent: {
                        monthAndDate: '',
                        text: '',
                        title: '',
                        to: '',
                        year: '',
                        _id: ''
                    },
                    editFirstInputValue: '',
                    editSecondInputValue: '',
                    editTitle: '',
                    editText: '',
                })
            } else {
                this.setState({
                    showModal: newStatus,
                    activeDate: '',
                    showModalEditEvent: false,
                    afterEditEvent: {
                        monthAndDate: '',
                        text: '',
                        title: '',
                        to: '',
                        year: '',
                        _id: ''
                    },
                    activeEvent: {
                        monthAndDate: '',
                        text: '',
                        title: '',
                        to: '',
                        year: '',
                        _id: ''
                    },
                    editFirstInputValue: '',
                    editSecondInputValue: '',
                    editTitle: '',
                    editText: '',
                })
            }
        }

    };

    toggleshowModalEditEvent = () => {
        if (this.state.afterEditEvent.from === '') {
            this.setState({showModalEditEvent: false})
        } else {
            this.setState({showModalEditEvent: true})
        }
    };


    newValueInput(e) {
        let afterEditEvent = this.state.afterEditEvent;
        const {id, value} = e.target;

        if (id.indexOf('.') > -1) {
            let newId = id.slice(15)
            if (newId === 'from') {
                this.setState({editFirstInputValue: value});
            } else if (newId === 'to') {
                this.setState({editSecondInputValue: value});
            } else if (newId === 'title') {
                this.setState({editTitle: value});
            } else {
                this.setState({editText: value});
            }
        } else {
            this.setState({[id]: value});
        }
    };

    addNewEvent() {
        let newEvent = validationNewEvent(this.state.firstInputValue,
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
                firstInputValue: '',
                secondInputValue: '',
                title: '',
                text: '',
                activeDate: '',
                showModal: !this.state.showModal,
                showModalEditEvent: false,
                activeEvent: {
                    monthAndDate: '',
                    text: '',
                    title: '',
                    to: '',
                    year: '',
                    _id: ''
                },
                afterEditEvent: {
                    monthAndDate: '',
                    text: '',
                    title: '',
                    to: '',
                    year: '',
                    _id: ''
                },
            })
        }
    };

    editEvent(id) {
        this.toggleshowModalEditEvent();
        let year = id.substr(0, 4);
        let from = id.substr(-5);
        let monthAndDate = id.slice(0, -6).slice(5);
        let allEvent = this.state.allEvent;
        let newAllEvent = allEvent.filter((item) => {
            return (item.year === +year && item.monthAndDate === monthAndDate && item.from === from)
        });
        this.setState({
            afterEditEvent: newAllEvent[0],
            activeEvent: newAllEvent[0],
            editFirstInputValue: newAllEvent[0].from,
            editSecondInputValue: newAllEvent[0].to,
            editTitle: newAllEvent[0].title,
            editText: newAllEvent[0].text,
        })
    }

    saveEditEvent() {
        let afterEditEvent = this.state.afterEditEvent;
        let allEvent = this.state.allEvent;
        let newAllEvent = allEvent.filter((item) => {
                return (item._id !== afterEditEvent._id)
            }
        );

        let newEvent = validationNewEvent(
            this.state.editFirstInputValue,
            this.state.editSecondInputValue,
            afterEditEvent.year,
            this.state.activeDate,
            newAllEvent,
            this.state.editTitle,
            this.state.editText);


        if (Object.keys(newEvent).length) {


            newAllEvent.push(newEvent);

            console.log('newAllEvent', newAllEvent);


            this.setState({
                allEvent: newAllEvent,
                activeEvent: {
                    monthAndDate: '',
                    text: '',
                    title: '',
                    to: '',
                    year: '',
                    _id: ''
                },
                showModalEditEvent: false,
                afterEditEvent: {
                    monthAndDate: '',
                    text: '',
                    title: '',
                    to: '',
                    year: '',
                    _id: ''
                },
                editFirstInputValue: '',
                editSecondInputValue: '',
                editTitle: '',
                editText: '',
            })
        }
    }

    deleteEvent(e) {
        console.log('@@@@@@', e.target.id);
        let id = e.target.id;
        let year = id.substr(0, 4);
        let from = id.substr(-5);
        let monthAndDate = id.slice(0, -6).slice(5);
        let allEvent = this.state.allEvent;
        let newAllEvent = allEvent.filter((item) => {
            return (!(item.year === +year && item.monthAndDate === monthAndDate && item.from === from))
        });
        this.setState({
            allEvent: newAllEvent,
            showModalEditEvent: false,
            afterEditEvent: {
                monthAndDate: '',
                text: '',
                title: '',
                to: '',
                year: '',
                _id: ''
            },
            activeEvent: {
                monthAndDate: '',
                text: '',
                title: '',
                to: '',
                year: '',
                _id: ''
            },
        });
        console.log('now');
    };

    clickForChangeView(data, month) {
        if (month) {
            this.setState({activeWindow: data, monthName: month})
        } else {
            this.setState({activeWindow: data})
        }
    };

    clickForViewMonth(month) {
        this.setState({monthName: month});
    };

    clickForChangeYear(e) {
        if (e.which === 13) {
            let newAllMonth = numberOfDaysInAMonthInYear(e.target.value);
            this.setState({allMonth: newAllMonth, year: e.target.value});
            e.target.value = '';
        }
    };

    changeYearInStateToOne(sign) {
        let newYear = this.state.year;
        if (sign === 'plus') {
            newYear += 1;
        } else {
            newYear -= 1;
        }
        let newAllMonth = numberOfDaysInAMonthInYear(newYear);
        this.setState({year: newYear, allMonth: newAllMonth});
    };

    changeMonthInStateToOne(sign) {
        let thisYear = this.state.year;
        let numMonth = new Date('1 ' + this.state.monthName + ' ' + thisYear);
        numMonth = numMonth.getMonth();
        if (sign === 'plus') {
            if (numMonth === 11) {
                thisYear += 1;
                numMonth = 0;
            } else {
                numMonth += 1;
            }

        } else if (sign === 'minus') {
            if (numMonth === 0) {
                thisYear -= 1;
                numMonth = 11;
            } else {
                numMonth -= 1;
            }
        }

        let newMonth = new Date(thisYear, numMonth, 1).toLocaleString('en-US', {month: 'long'});
        this.setState({monthName: newMonth, year: thisYear})
    };

    changeYearInState(year) {
        if (this.state.activeWindow === 'Year') {
            numberOfDaysInAMonthInYear(year);
            this.setState({year: parseInt(year)});

        }
    };


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
    };
}


export default Home;
