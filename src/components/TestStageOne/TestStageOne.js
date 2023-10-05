import React, { useState, useEffect} from 'react';
import QuestionOne from '../QuestionOne/QuestionOne';
import AnswerOne from '../AnswerOne/AnswerOne';

const TestStageOne = () => {

    const [component, setComponent] = useState();
    const [isAnswered, setIsAnswered] = useState(false);
    const [testCount, setTestCount] = useState(1);

    useEffect(() => {
        setComponent(QuestionOne);
        setTimeout(() => {
            setIsAnswered(true);
        }, 5000);
    }, []);

    useEffect(() => {
        setComponent(QuestionOne);
        setTimeout(() => {
            setIsAnswered(true);
        }, 5000);
    }, [isAnswered]);
    

    return (
        <div className='test-stage-one'>
            <div className='container'>
                <div className='test-stage-one__wrapper'>
                    {
                        !isAnswered
                        ?
                        <QuestionOne/>
                        :
                        <AnswerOne isAnswered={isAnswered} setIsAnswered={setIsAnswered}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default TestStageOne;