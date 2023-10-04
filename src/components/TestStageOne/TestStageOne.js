import React from 'react';
import QuestionOne from '../QuestionOne/QuestionOne';
import AnswerOne from '../AnswerOne/AnswerOne';
const TestStageOne = () => {

    return (
        <div className='test-stage-one'>
            <div className='container'>
                <div className='test-stage-one__wrapper'>
                    {/* {<QuestionOne/>} */}
                    {<AnswerOne/>}
                </div>
            </div>
        </div>
    );
};

export default TestStageOne;