import React from 'react';


const OneEventOnList = (props) => {

        return (
            <li className='eventList_li'>
                <ul className='eventListEvery_ul'>
                    <li className='eventListEvery_li'>
                        {`Time:   from: ${props.item.from} to: ${props.item.to}`}
                    </li>
                    <li className='eventListEvery_li'>
                        {`Event title: ${props.item.title}`}
                    </li>
                    <li className='eventListEvery_li'>
                        {`Event description: ${props.item.text}`}
                    </li>
                </ul>
            </li>
        )

};

export {OneEventOnList};