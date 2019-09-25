import React from 'react';
import './App.css'
import {CreatYear} from './components/createNewView/year'
import {CreateMonth} from "./components/createNewView/month";
import Header from './components/Header'


class Home extends React.Component {
    constructor(props) {
        super(props);
        const now = new Date();
        const year = now.getFullYear();
        const month = now.toLocaleString('default', {month: 'long'});
        const day = now.getDate();



        this.state = {
            todayDate: {
                year: year,
                monthName: month,
                today: day
            } ,
            year: year,
            monthName: month,
            today: day,
            allMonth: {
                January: [],
                February: [],
                March: [],
                April: [],
                May: [],
                June: [],
                July: [],
                August: [],
                September: [],
                October: [],
                November: [],
                December: [],
            },
            allEvent: [{
                from: "01:00",
                monthAndDate: "2 September",
                text: "111",
                title: "111",
                to: "01:15",
                year: 2019
            },
                {
                    from: "01:16",
                    monthAndDate: "2 September",
                    text: "222",
                    title: "222",
                    to: "01:31",
                    year: 2019
                },
                {
                    from: "01:32",
                    monthAndDate: "2 September",
                    text: "222",
                    title: "222",
                    to: "01:47",
                    year: 2019
                },
                {
                    from: "01:00",
                    monthAndDate: "12 November",
                    text: "111",
                    title: "111",
                    to: "01:15",
                    year: 2019
                },{
                    from: "01:00",
                    monthAndDate: "2 November",
                    text: "111",
                    title: "111",
                    to: "01:15",
                    year: 2019
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
        this.doublesTheNumber = this.doublesTheNumber.bind(this);
        this.createArrayAllMonth = this.createArrayAllMonth.bind(this);
        this.changeYearInStateFinal = this.changeYearInStateFinal.bind(this);
        this.clickForChangeView = this.clickForChangeView.bind(this);
        this.changeYearInStateToOne = this.changeYearInStateToOne.bind(this);
        this.changeMonthInStateToOne = this.changeMonthInStateToOne.bind(this);
    }
    // get start state
    UNSAFE_componentWillMount(year) {
        this.createArrayAllMonth(this.state.year);
    }

    whatRenderNowHeader() {
        if (this.state.activeWindow === 'Year') {
            return <Header
                year={this.state.year}
                month={this.state.monthName}
                activeWindow={this.state.activeWindow}
                onClick={this.changeYearInStateFinal}
                clickForChangeView={this.clickForChangeView}
                changeYearInStateToOne={this.changeYearInStateToOne}
            />
        } else {
            return <Header
                year={this.state.year}
                month={this.state.monthName}
                activeWindow={this.state.activeWindow}
                onClick={this.changeYearInStateFinal}
                clickForChangeView={this.clickForChangeView}
                clickForViewMonth={this.clickForViewMonth}
                changeMonthInStateToOne={this.changeMonthInStateToOne}

            />

        }
    }
    whatRenderNowMain() {
        if (this.state.activeWindow === 'Year') {
            return this.createCalendar()
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
            />
        }
    }

    createCalendar() {
        return (
            <>
                <CreatYear newArr={this.state.allMonth}
                           clickForChangeView={this.clickForChangeView}
                           toggleModal={this.toggleModal}
                           allEvent={this.state.allEvent}
                           year={this.state.year}
                           todayDate={this.state.todayDate}

                />
            </>
        )
    }

    toggleModal = (e) => {
        this.setState({showModal: !this.state.showModal, activeDate: e.target.id})
    };
    newValueInput(e) {
        const {id, value} = e.target;
        this.setState({[id]: value});
    }
    addNewEvent() {
        let firstInputValueOk = this.state.firstInputValue;
        let secondInputValueOk = this.state.secondInputValue;

        // helper variables for comparing time
        let firstTime = "01/01/2000 " + firstInputValueOk;
        let firstTimePlusFifteen = new Date(new Date(firstTime).getTime() + (15 * 60 * 1000));
        const hours = this.doublesTheNumber(firstTimePlusFifteen.getHours());
        const minutes = this.doublesTheNumber(firstTimePlusFifteen.getMinutes());

        // helpDate.setMinutes(helpDate.getMinutes() + MIN_EVENT_DURATION);

        firstTimePlusFifteen = hours.toString() + ':' + minutes.toString();

        let eventOverlayCheck = this.searchesForEventsOnSelectedDate().every(function (eventTime) {
            return firstInputValueOk > eventTime.to || secondInputValueOk < eventTime.from
        });

        if (!firstInputValueOk || !secondInputValueOk) {
            alert('error: add time')
        } else if (firstInputValueOk > secondInputValueOk) {
            alert('error: event start time is longer than the end')
        } else if (firstTimePlusFifteen > secondInputValueOk) {
            alert('error: minimum event duration 15 minutes')
        } else if (eventOverlayCheck) {
            let obj = {
                year: this.state.year,
                monthAndDate: this.state.activeDate,
                from: this.state.firstInputValue,
                to: this.state.secondInputValue,
                title: this.state.title,
                text: this.state.text
            };
            let rrr = this.state.allEvent;
            rrr.push(obj);

            this.setState({
                allEvent: rrr,
                firstInputValue: '',
                secondInputValue: '',
                title: '',
                text: '',
                activeDate: '',
                showModal: !this.state.showModal
            })

        } else {
            alert('error: event intersects with an existing one')
        }

        console.log('@@@@@@', this.state.allEvent);

    }

    clickForChangeView(data) {
        this.setState({activeWindow: data})
    }
    clickForViewMonth(month) {
        this.setState({monthName: month});
    }
    clickForChangeYear(e) {
        if (e.which === 13) {
            this.createArrayAllMonth(e.target.value);
            e.target.value = '';
        }
    }

    changeYearInStateToOne(sign) {
        let newYear = this.state.year;
        if (sign === 'plus') {
            newYear += 1;
        } else {
            newYear -= 1;
        }
        this.createArrayAllMonth(newYear);
        this.setState({year: newYear});
    }
    changeMonthInStateToOne(sign) {
        let thisYear = this.state.year;
        let numMonth = new Date('1 ' + this.state.monthName + ' ' + thisYear);
        numMonth = numMonth.getMonth();

        if (sign === 'plus') {
            numMonth += 1;
            if (numMonth === 12) {
                thisYear += 1;
            }
        } else if (sign === 'minus') {
            numMonth -= 1;
            if (numMonth === 0) {
                thisYear -= 1;
            }
        }
        let newMonth = new Date(thisYear, numMonth, 1).toLocaleString('default', {month: 'long'});
        this.setState({monthName: newMonth, year: thisYear})
    }
    changeYearInStateFinal(year) {
        if (this.state.activeWindow === 'Year') {
            this.createArrayAllMonth(year);
            this.setState({year: parseInt(year)});

        } else {
            //todo: change month
        }
        // if (year) {
        // this.setState({year: parseInt(year)});
        // }
    }

    doublesTheNumber = (num) => {
        // const formatter = new Intl.NumberFormat('en', {minimumIntegerDigits: 2, useGrouping: false});
        return num.toString().length < 2 ? '0' + num.toString() : num.toString();
    };
    searchesForEventsOnSelectedDate() {
        let year = this.state.year;
        let activeDate = this.state.activeDate;
        let allEvent = this.state.allEvent;

        return allEvent.filter(function (date) {
            return date.year === year && date.monthAndDate === activeDate;
        });
    }
    getMonthName = (year, month, date) => {
        return new Date(year, month, date).toLocaleString('default', {month: 'long'});
    };
    createArrayAllMonth(dataset) {
        const numberOfDaysInAMonth = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
            .reduce((acc, monthNumber) => {
                const name = this.getMonthName(dataset, monthNumber, 1);
                const firstDayOfMonth = new Date(dataset, monthNumber, 1);
                const lastDayOfMonth = new Date(dataset, monthNumber + 1, 0);
                const numberOfDaysPerMonth = firstDayOfMonth.getDay();

                acc[name] = new Array(numberOfDaysPerMonth).fill(0);
                for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
                    acc[name].push(i)
                }
                return acc;
            }, {});
        this.setState({
            allMonth: numberOfDaysInAMonth,
        });
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


        // return (
        //     <div>{this.createCalendar()}</div>
        // )
    }
}


export default Home;
