import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'

import './style.css';

const Modal = (props) => {
    if (!props.open) return null;

    return ReactDOM.createPortal(
        <div id='modal'>
            <div className='modal'>
                <div className='modal_close' onClick={props.onClose}>&times;</div>
                {props.children}
            </div>
        </div>,
        document.getElementById('modal-container'));
};

Modal.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.object,
};

Modal.defaultProps = {};

export {Modal};


