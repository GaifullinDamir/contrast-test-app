import React from 'react';

const AnswerItem = ({checkedState, item, position, handleOnChange}) => {
    return (
        <div className='checkbox'>
            <input className='checkbox__input' type="checkbox" id={position} name={item} checked={checkedState}
                onChange={() => handleOnChange(position)} />
            <label htmlFor={position}>{item}</label>
        </div>
    );
};

export default AnswerItem;