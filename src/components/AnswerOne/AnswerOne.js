import React, { useState, useEffect } from 'react';
import AnswersList from '../AnswersList/AnswersList';

const AnswerOne = ({setIsAnswered, 
        setTestOneCount, 
        items, 
        rightAnswers, 
        setCountRightsOne
    }) => {
        
    const [checkedState, setCheckedState] = useState(
        new Array(items.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setIsAnswered(false);
        setTestOneCount(count => count + 1);
        var rightsCount = 0
        for (var i = 0; i < items.length; i++) {
            var right = rightAnswers.indexOf(items[i]);

            if (right !== -1 && checkedState[i]) {
                rightsCount++;
            }
        }
        setCountRightsOne(count => [...count, rightsCount]);
    };

    return (
        <div className='answer-one'>
            <div className='container'>
                <div className='descr_answer-one'>Выберите 4 символа</div>
                <div className='delimeter'></div>
                <form className='answer-one__form' onSubmit={onSubmit}>
                    <AnswersList items={items}
                        checkedState={checkedState}
                        handleOnChange={handleOnChange}/>
                    <button className='button'>Ответить</button>
                </form>
            </div>
        </div>
    );
};

export default AnswerOne;