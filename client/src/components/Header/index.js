import React from 'react';
import PropTypes from 'prop-types'
import './Style/Header.css';

const Header = (props) => {
    const ChangeView = (e) => {
        props.clickForChangeView(e.target.value)
    };
    const OptionMonth = () => {
        let allMonth = Object.keys(props.allMonth);
        return allMonth.map(function (item) {
            return <option key={'key'+item} value={item}>{item}</option>
        })
    };
    const ChangeMonth = (e) => {
        if (e.target.value !== 'none') {
            props.clickForViewMonth(e.target.value)
        }
    };
    const onKeyUp = (e) => {
        if (e.which === 13) {
            props.onClick(e.target.value);
            e.target.value = '';
        }
    };
    const changeYearInStateToOne = (e) => {
        props.changeYearInStateToOne(e.target.value);
    };
    const changeMonthInStateToOne = (e) => {
        props.changeMonthInStateToOne(e.target.value);
    };
    const InputExampleInput = () => <input
        id='inputSerchYear'
        placeholder='Search year'
        type='number'
        min={1000}
        max={9999}
        onKeyUp={onKeyUp}
    />;
    const InputExampleMonth = () =>
        <select id="select_month" onChange={ChangeMonth}>
            <option value='none'>none</option>
            <OptionMonth/>
        </select>;

    return (
        <div className='main_container'>
            <div className='left_container'>
                <button
                    id='next'
                    value='minus'
                    onClick={props.activeWindow === 'Year' ? changeYearInStateToOne : changeMonthInStateToOne}>
                </button>
                <p id='inputYear'>{props.activeWindow === 'Year' ? props.year : `${props.month} ${props.year}`}
                </p>
                <button
                    id='previous'
                    value='plus'
                    onClick={props.activeWindow === 'Year' ? changeYearInStateToOne : changeMonthInStateToOne}>
                </button>
                {props.activeWindow === 'Year' ? <InputExampleInput/> : <InputExampleMonth/>}
            </div>
            <div className='right_container'>
                <form>
                    <select id="select_view" onChange={ChangeView} value={props.activeWindow}>
                        <option value='Month'>Month</option>
                        <option value='Year'>Year</option>
                    </select>
                </form>
            </div>

        </div>
    )
};

Header.propTypes = {
    year: PropTypes.number.isRequired,
    month: PropTypes.string.isRequired,
    activeWindow: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    clickForChangeView: PropTypes.func.isRequired,
    changeYearInStateToOne: PropTypes.func.isRequired,
    allMonth: PropTypes.object,
    clickForViewMonth: PropTypes.func,
    changeMonthInStateToOne: PropTypes.func.isRequired
};

Header.defaultProps = {};


export default Header;