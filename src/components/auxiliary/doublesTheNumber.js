import React from 'react';

// ToDo remove this. Unused.
const DoublesTheNumber = (props) => {
    // const formatter = new Intl.NumberFormat('en', {minimumIntegerDigits: 2, useGrouping: false});

    return props.num.toString().length < 2 ? '0' + props.num.toString() : props.num.toString();
}

export {DoublesTheNumber};