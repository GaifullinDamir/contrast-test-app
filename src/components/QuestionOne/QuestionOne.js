import React, { useState, useEffect } from 'react';

const QuestionOne = ({testOneCount, items, rightAnswers, setRightAnswers}) => {

    const itemClass = `question-one__item${testOneCount < 3 ? '_pale' : ''}`;

    function getRandom(min, max) {
        return Math.floor(Math.random () * (max - min + 1)) + min;
    };

    function getRandomArray() {
        const rightAnswersArray = [];

        while (rightAnswersArray.length !== 4) {
            var symbol = '';
            if (rightAnswersArray.length <= 1) {
                symbol = items[getRandom(0, 4)];
            } else {
                symbol = items[getRandom(5, 9)];
            }
            if(rightAnswersArray.indexOf(symbol) === -1) {
                rightAnswersArray.push(symbol);
            }
        }

        return rightAnswersArray;
    };

    useEffect(() => {
        setRightAnswers(getRandomArray());
    }, []);

    useEffect(() => {
        setRightAnswers(getRandomArray());
    }, [testOneCount]);

    return (
        <div className='question-one'>
            <div className='descr_question-one'>Запомните символы</div>
            <div className='delimeter'></div>
            <div className='question-one__list'>
                <div className={itemClass}>{rightAnswers[0]}</div>
                <div className={itemClass}>{rightAnswers[1]}</div>
                <div className={itemClass}>{rightAnswers[2]}</div>
                <div className={itemClass}>{rightAnswers[3]}</div>
            </div>
        </div>
    );
};

export default QuestionOne;