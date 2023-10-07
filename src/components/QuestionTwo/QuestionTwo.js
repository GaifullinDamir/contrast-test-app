import React, { useEffect, useState} from 'react';

const QuestionTwo = ({testTwoCount, items, rightAnswer, setRightAnswer}) => {
    const [answers, setAnswers] = useState([]);
    const [rightIndex, setRightIndex] = useState();

    function getRandom(min, max) {
        return Math.floor(Math.random () * (max - min + 1)) + min;
    };

    function getRandomArray() {
        const answersArray = [];

        while (answersArray.length !== 4) {
            var symbol = '';
            if (answersArray.length <= 1) {
                symbol = items[getRandom(0, 4)];
            } else {
                symbol = items[getRandom(5, 9)];
            }
            if(answersArray.indexOf(symbol) === -1) {
                answersArray.push(symbol);
            }
        }

        return answersArray;
    };

    useEffect(() => {
        var answersTemp = getRandomArray();
        setAnswers(answersTemp);
        var index = getRandom(0, 3);
        setRightIndex(index);
        setRightAnswer(answersTemp[index]);
    }, []);

    useEffect(() => {
        var answersTemp = getRandomArray();
        setAnswers(answersTemp);
        var index = getRandom(0, 3);
        setRightIndex(index);
        setRightAnswer(answersTemp[index]);
    }, [testTwoCount]);

    return (
        <div className='question-two'>
            <div className='descr_question-two'>Запомните выделенный символ</div>
            <div className='delimeter'></div>
            <div className='question-two__list'>
                <div className={`question-two__item${testTwoCount < 3 ? '_pale' : ''}${rightIndex === 0 ? '_right' : ''}`}>{answers[0]}</div>
                <div className={`question-two__item${testTwoCount < 3 ? '_pale' : ''}${rightIndex === 1 ? '_right' : ''}`}>{answers[1]}</div>
                <div className={`question-two__item${testTwoCount < 3 ? '_pale' : ''}${rightIndex === 2 ? '_right' : ''}`}>{answers[2]}</div>
                <div className={`question-two__item${testTwoCount < 3 ? '_pale' : ''}${rightIndex === 3 ? '_right' : ''}`}>{answers[3]}</div>
            </div>
        </div>
    );
};

export default QuestionTwo;