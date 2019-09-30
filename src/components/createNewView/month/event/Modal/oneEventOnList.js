import React from 'react';


const OneEventOnList = (props) => {
    let haveRedBackground = false;
    if (props.afterEditEvent) {
        haveRedBackground = props.afterEditEvent._id === props.item._id;
    }

    return (
        <li id={props.item.monthAndDate} className='eventList_li'>
            {props.forWhat === 'day' ?
                <ul className='eventListEvery_ul' id={props.item.monthAndDate}>
                    <li className='eventListEvery_li' id={props.item.monthAndDate}>
                        {`Time:    ${props.item.from} - ${props.item.to}`}
                    </li>
                    <li className='eventListEvery_li' id={props.item.monthAndDate}>
                        {`Event title: ${props.item.title}`}
                    </li>
                </ul>
                : null}

            {props.forWhat === 'modalWindow' ?
                <ul className='eventListEvery_ulModal'
                    id={props.item.monthAndDate}>
                    <input type="time"
                           readOnly
                           className={haveRedBackground ? 'eventListEvery_li redBackground' : 'eventListEvery_li'}
                           value={props.item.from}>
                    </input>
                    < input type="time"
                            readOnly
                            className={haveRedBackground ? 'eventListEvery_li redBackground' : 'eventListEvery_li'}
                            value={props.item.to}>
                    </input>
                    <input readOnly
                           className={haveRedBackground ? 'eventListEvery_li redBackground' : 'eventListEvery_li'}
                           value={props.item.title}>
                    </input>
                    <input readOnly
                           className={haveRedBackground ? 'eventListEvery_li redBackground' : 'eventListEvery_li'}
                           value={props.item.text}>
                    </input>
                    <button className='deleteButton' id={props.item._id} onClick={(e) => {
                        props.editEvent(e.target.id)
                    }}>edit
                    </button>
                </ul>
                : null}
        </li>
    )
};

export {OneEventOnList};