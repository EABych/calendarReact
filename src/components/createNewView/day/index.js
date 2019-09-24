import React from 'react';

const CreatOneDay = (props) => {
    return (
        props.newArr[props.number] ?
            (
                <td
                    onClick={props.onClick}
                    className="tdStyle"
                    id={`${props.newArr[props.number]} ${props.month}`}
                >
                    {props.newArr[props.number]}
                </td>
            ) : (
                <td className="tdStyle invisible" id="0"/>
            )
    )
};

export {CreatOneDay};