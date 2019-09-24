import React from 'react';

const OneEventOnList = (props) => {

        return (
            <li>
                <ul>
                    <li>
                        {`Time:   from: ${props.item.from} to: ${props.item.to}`}
                    </li>
                    <li>
                        {`Event title: ${props.item.title}`}
                    </li>
                    <li>
                        {`Event description: ${props.item.text}`}
                    </li>
                </ul>
            </li>
        )

};

export {OneEventOnList};