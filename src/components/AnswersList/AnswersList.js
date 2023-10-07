import React from 'react';
import AnswerItem from '../AnswerItem/AnswerItem';

const AnswersList = ({items, 
        checkedState, 
        handleOnChange}) => {
    
    const createAnswerList = () => {
        var list = new Array(items.length).fill(0);
        list = list.map((item, index) => {
            return <AnswerItem 
                key={index} 
                checkedState={checkedState[index]} 
                item={items[index]} 
                position={index} 
                handleOnChange={handleOnChange}/>
        });
       return list;
    };

    return (
        <div className='answer__list'>
            {createAnswerList()}
        </div>
    );
};

export default AnswersList;