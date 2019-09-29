import React from 'react';
import './App.css';
import {CreatYear} from './components/createNewView/year';
import {CreateMonth} from "./components/createNewView/month";
import Header from './components/Header';
import * as Constants from './components/constants'
import numberOfDaysInAMonthInYear from './components/auxiliary/numberOfDaydInAMonth'
// import doublesTheNumber from './components/auxiliary/doublesTheNumber';
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
            allEvent: [
                {
                    from: "01:00",
                    monthAndDate: "2 September",
                    text: "111",
                    title: "111",
                    to: "01:15",
                    year: 2019,
                    _id: '2019 2 September 01:00'
                },
                {
                    from: "01:16",
                    monthAndDate: "2 September",
                    text: "222",
                    title: "222",
                    to: "01:31",
                    year: 2019,
                    _id: '2019 2 September 01:16'

                },
                {
                    from: "01:32",
                    monthAndDate: "2 September",
                    text: "222",
                    title: "222",
                    to: "01:47",
                    year: 2019,
                    _id: '2019 2 September 01:32'

                },
                {
                    from: "01:00",
                    monthAndDate: "12 November",
                    text: "111",
                    title: "111",
                    to: "01:15",
                    year: 2019,
                    _id: '2019 12 November 01:00'

                },
                {
                    from: "01:00",
                    monthAndDate: "2 November",
                    text: "111",
                    title: "111",
                    to: "01:15",
                    year: 2019,
                    _id: '2019 2 November 01:00'

                },
            ],
            firstInputValue: '',
            secondInputValue: '',
            title: '',
            text: '',
            activeDate: '',
            activeWindow: 'Year',
            showModal: false
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
    }

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
                                outlineListOfEventsForTheSelectedDate={this.outlineListOfEventsForTheSelectedDate}
                                allEvent={this.state.allEvent}
                                year={this.state.year}
                                newValueInput={this.newValueInput}
                                addNewEvent={this.addNewEvent}
                                activeDate={this.state.activeDate}
                                todayDate={this.state.todayDate}
                                deleteEvent={this.deleteEvent}
            />
        }
    };


    toggleModal = (e) => {
        if (e.target.id) {
            this.setState({showModal: !this.state.showModal, activeDate: e.target.id})
        } else {
            this.setState({showModal: !this.state.showModal, activeDate: e.target.dataId})
        }
    };

    newValueInput(e) {
        const {id, value} = e.target;
        this.setState({[id]: value});
    };

    addNewEvent() {
       let newEvent = validationNewEvent(this.state.firstInputValue,
            this.state.secondInputValue,
            this.state.year, 
            this.state.activeDate, 
            this.state.allEvent,
            this.state.title,
            this.state.text);
            
            if (newEvent.length) {
                let allEvent = this.state.allEvent;
                allEvent.push(newEvent);
                this.setState({
                    allEvent: allEvent,
                    firstInputValue: '',
                    secondInputValue: '',
                    title: '',
                    text: '',
                    activeDate: '',
                    showModal: !this.state.showModal
                })
            }
            
    }


    deleteEvent(id) {
        let year = id.substr(0, 4);
        let from = id.substr(-5);
        let monthAndDate = id.slice(0, -6).slice(5);
        let allEvent = this.state.allEvent;
        let newAllEvent = allEvent.filter((item) => {
            return (!(item.year === +year && item.monthAndDate === monthAndDate && item.from === from))
        });
        this.setState({allEvent: newAllEvent});
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
            } else {numMonth += 1;}
            
        } else if (sign === 'minus') {
            if (numMonth === 0) {
                thisYear -= 1;
                numMonth = 11;
            } else {numMonth -= 1;}
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
    }
}


export default Home;
