import React, { useEffect, useState } from 'react';
import TestStageOne from '../../components/TestStageOne/TestStageOne';
import { useNavigate } from 'react-router-dom';


const TestPage = () => {

    const [testOneCount, setTestOneCount] = useState(0);
    const [testTwoCount, setTestTwoCount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        if (testOneCount === 6) {
            navigate('/result');
        }
    }, [testOneCount]);

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
                        <div className='descr_test'>Этап <span>{testOneCount <= 6 ? 1 : 2}/2</span>. Тест <span>{testOneCount <= 6 ? testOneCount + 1 : testTwoCount} из 6</span></div>
                        <div className='timer'>На запоминание <span>5 с.</span></div>
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