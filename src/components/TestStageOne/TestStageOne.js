import React, { useState, useEffect} from 'react';
import QuestionOne from '../QuestionOne/QuestionOne';
import AnswerOne from '../AnswerOne/AnswerOne';

const TestStageOne = ({testOneCount, setTestOneCount, items}) => {

    const [isAnswered, setIsAnswered] = useState(false);
    const [rightAnswers, setRightAnswers] = useState([]);
    const [countRights, setCountRights] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setIsAnswered(true);
        }, 5000);
    }, []);

    useEffect(() => {
        if (testOneCount === 6) {
            localStorage.setItem('firstStage', countRights);
        }
        setTimeout(() => {
            setIsAnswered(true);
        }, 5000);
    }, [testOneCount]);
    

    return (
        <div className='test-stage-one'>
            <div className='container'>
                <div className='test-stage-one__wrapper'>
                    {
                        !isAnswered
                        ?
                        <QuestionOne testOneCount={testOneCount} items={items} rightAnswers={rightAnswers} setRightAnswers={setRightAnswers}/>
                        :
                        <AnswerOne setIsAnswered={setIsAnswered} setTestOneCount={setTestOneCount} items={items} rightAnswers={rightAnswers} setCountRights={setCountRights}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default TestStageOne;