import React from 'react';
import './App.css'
import {Modal} from "./components/createNewView/event/Modal";
import {OneEventOnList} from './components/createNewView/event/Modal/oneEventOnList'
import {CreatYear} from './components/createNewView/year'
import {CreateMonth} from "./components/createNewView/month";
import Header from './components/Header'




class Home extends React.Component {
    constructor(props) {
        super(props);
        const year = new Date().getFullYear();
        const month = new Date().toLocaleString('default', {month: 'long'});
        const day = new Date().getDate();

        this.state = {
            year: year,
            monthName: month,
            today: day,
            month: [],
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
            allEvent: [],
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
        this.changeYearInState = this.changeYearInState.bind(this);
        this.newValueInput = this.newValueInput.bind(this);
        this.addNewEvent = this.addNewEvent.bind(this);
        this.searchesForEventsOnSelectedDate = this.searchesForEventsOnSelectedDate.bind(this);
        this.doublesTheNumber = this.doublesTheNumber.bind(this);
        this.createArrayAllMonth = this.createArrayAllMonth.bind(this);
        this.changeYearInStateFinal = this.changeYearInStateFinal.bind(this);
        this.clickForChangeView =this.clickForChangeView.bind(this);
    }

    UNSAFE_componentWillMount(year) {
        this.createArrayAllMonth(this.state.year);
    }

    createCalendar() {
        return (
            <>
                <Modal open={this.state.showModal} onClose={this.toggleModal}>
                    <div className=''>
                        <ul>
                            {this.outlineListOfEventsForTheSelectedDate()}
                        </ul>
                        {this.makeInputForAddTime('from', 'firstInputValue')}
                        {this.makeInputForAddTime('to', 'secondInputValue')}
                        {this.makeInputForAddDiscriptionEvent("New event", 'title')}
                        {this.makeInputForAddDiscriptionEvent("Event description", 'text')}
                    </div>
                </Modal>

                {/*<div className='changeYear'>*/}
                {/*    <p>Add year</p>*/}
                {/*    <input type="text"*/}
                {/*           data-value={this.state.year}*/}
                {/*           onKeyDown={this.clickForChangeYear}*/}
                {/*           onChange={this.changeYearInState}/>*/}

                {/*</div>*/}

                <CreatYear newArr={this.state.allMonth}
                           clickForViewMonth={this.clickForViewMonth}
                           toggleModal={this.toggleModal}
                />
            </>
        )
    }




    toggleModal = (e) => {
        this.setState({showModal: !this.state.showModal, activeDate: e.target.id})
    }


    doublesTheNumber = (num) => {
        console.log('@@@@@@', num);
        // const formatter = new Intl.NumberFormat('en', {minimumIntegerDigits: 2, useGrouping: false});
        return num.toString().length < 2 ? '0' + num.toString() : num.toString();
    }

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
    getMonthName = (year, month, date) => {
        return new Date(year, month, date).toLocaleString('default', {month: 'long'});
    };


    clickForViewMonth(evt) {
        const {dataset} = evt.target;
        this.setState({monthName: dataset.value});
    }

    clickForChangeYear(e) {
        if (e.which === 13) {
            this.createArrayAllMonth(e.target.value);
            e.target.value='';
        }
    }

    clickForChangeView(data) {
        console.log('@@@@@@',data);
        this.setState({activeWindow: data})
    }

    changeYearInState(e) {
        if(e) {
            this.changeYearInStateFinal(e.target.value);
        }
    }

    changeYearInStateFinal(year) {
        console.log('year', year);
        this.setState({year: year});
    }



    makeInputForAddTime(name, numberOfInputValue) {
        return (
            <p>{name}
                <input type="time"
                       name="selected_time"
                       list="time-list"
                       id={numberOfInputValue}
                       onChange={this.newValueInput}
                />
            </p>
        )
    }
    makeInputForAddDiscriptionEvent(defaultValue, id) {
        return (
            <input type="text"
                   defaultValue={defaultValue}
                   id={id}
                   onChange={this.newValueInput}/>)
    }

    searchesForEventsOnSelectedDate() {
        let year = this.state.year;
        let activeDate = this.state.activeDate;

        return this.state.allEvent.filter(function (date) {
            return date.year === year && date.monthAndDate === activeDate;
        });
    }

    outlineListOfEventsForTheSelectedDate() {
        let arrEventsOnSelectedDate = this.searchesForEventsOnSelectedDate();
        if (arrEventsOnSelectedDate) {
            return arrEventsOnSelectedDate.map((item) => {
                return <OneEventOnList item={item} key={item}/>;
            });
        } else {
            return [];
        }
    }





    newValueInput(e) {
        const {id, value} = e.target;
        this.setState({[id]: value});
        // if (e.target.id === 'firstInputValue') {
        //     this.setState({firstInputValue: e.target.value})
        // } else if (e.target.id === 'secondInputValue') {
        //     this.setState({secondInputValue: e.target.value})
        // } else if (e.target.id === 'title') {
        //     this.setState({title: e.target.value})
        // } else if (e.target.id === 'text') {
        //     this.setState({text: e.target.value})
        // }
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

        console.log('secondInputValueOk', firstTimePlusFifteen, secondInputValueOk);


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

    }


    render() {

        return (
            <>

                <Header data={this.state.activeWindow} onClick={this.changeYearInStateFinal} clickForChangeView={this.clickForChangeView}/>
                {this.state.activeWindow==='Year' ? <div>{this.createCalendar()}</div> : <div><CreateMonth newArr={this.state.allMonth[this.state.monthName]}
                                                                                                           month={this.state.monthName}
                                                                                                           clickForViewMonth={this.clickForViewMonth}
                                                                                                           toggleModal={this.toggleModal}/></div>}

                {/*<CalenderContent /> // different view (year, month) (8h) - more features (16h)*/}
                {/*<Footer /> // Something. (1h)*/}
            </>
        );


        // return (
        //     <div>{this.createCalendar()}</div>
        // )
    }
}


export default Home;
