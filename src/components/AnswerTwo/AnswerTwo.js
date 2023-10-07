import React, { useState} from 'react';
import AnswersList from '../AnswersList/AnswersList';

const AnswerTwo = ({setIsAnswered, 
        setTestTwoCount, 
        items, 
        rightAnswer, 
        setCountRightsTwo}) => {
            
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
        setTestTwoCount(count => count + 1);

        var rightsCount = 0;
        for (var i = 0; i < items.length; i++) {
            if ( rightAnswer === items[i] && checkedState[i]) {
                rightsCount = 1;
            }
        }
        setCountRightsTwo(count => [...count, rightsCount]);
    };
    return (
        <div className='answer-two'>
            <div className='container'>
                <div className='descr_answer-two'>Выберите 1 символ</div>
                <div className='delimeter'></div>
                <form className='answer-two__form' onSubmit={onSubmit}>
                    <AnswersList items={items}
                            checkedState={checkedState}
                            handleOnChange={handleOnChange}/>
                    <button className='button'>Ответить</button>
                </form>
            </div>
        </div>
    );
};

export default AnswerTwo;