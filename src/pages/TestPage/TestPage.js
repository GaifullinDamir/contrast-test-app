import React, { useEffect, useState } from 'react';
import TestStageOne from '../../components/TestStageOne/TestStageOne';


const TestPage = () => {

    
    return (
        <div className='test-page'>
            <div className='container'>
                <div className='test-page__wrapper'>
                    <div className='test-page__header'>
                        <div className='descr_test'>Этап <span>1/2</span>. Тест <span>1 из 6</span></div>
                        <div className='timer'>Время: <span>5 с.</span></div>
                    </div>
                    <div className='delimeter'></div>
                    <div className='test-page__task'>
                        {<TestStageOne/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestPage;