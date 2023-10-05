import React, { useEffect, useState } from 'react';
import TestStageOne from '../../components/TestStageOne/TestStageOne';


const TestPage = () => {

    const [testOneCount, setTestOneCount] = useState(0);

    const items = [
        'XXV',
        'LVII',
        'XXI',
        'LV',
        'LXXV',
        <i className="fa fa-university" aria-hidden="true"></i>,
        <i className="fa fa-map" aria-hidden="true"></i>,
        <i className="fa fa-plane" aria-hidden="true"></i>,
        <i className="fa fa-hourglass" aria-hidden="true"></i>,
        <i className="fa fa-shield" aria-hidden="true"></i>
    ];
    

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
                        {<TestStageOne testOneCount={testOneCount} setTestOneCount={setTestOneCount} items={items}/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestPage;