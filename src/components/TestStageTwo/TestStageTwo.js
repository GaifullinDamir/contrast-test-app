import React, { useState, useEffect} from 'react';
import QuestionTwo from '../QuestionTwo/QuestionTwo';
import AnswerTwo from '../AnswerTwo/AnswerTwo';

const TestStageTwo = ({testTwoCount, setTestTwoCount, items}) => {
    const [isAnswered, setIsAnswered] = useState(false);
    const [rightAnswer, setRightAnswer] = useState();
    const [countRights, setCountRights] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setIsAnswered(true);
        }, 5000);
    }, []);

    useEffect(() => {
        if (testTwoCount === 6) {
            localStorage.setItem('secondStage', countRights);
        }
        setTimeout(() => {
            setIsAnswered(true);
        }, 5000);
    }, [testTwoCount]);
    

    return (
        <div className='test-stage-one'>
            <div className='container'>
                <div className='test-stage-one__wrapper'>
                    {
                        !isAnswered
                        ?
                        <QuestionTwo testTwoCount={testTwoCount} items={items} rightAnswer={rightAnswer} setRightAnswer={setRightAnswer}/>
                        :
                        <AnswerTwo setIsAnswered={setIsAnswered} setTestTwoCount={setTestTwoCount} items={items} rightAnswer={rightAnswer} setCountRights={setCountRights}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default TestStageTwo;