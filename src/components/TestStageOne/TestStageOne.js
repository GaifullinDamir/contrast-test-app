import React from 'react';
import QuestionOne from '../QuestionOne/QuestionOne';
const TestStageOne = () => {

    return (
        <div className='test-stage-one'>
            <div className='container'>
                <div className='test-stage-one__wrapper'>
                    {<QuestionOne/>}
                </div>
            </div>
        </div>
    );
};

export default TestStageOne;