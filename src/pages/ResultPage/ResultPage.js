import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ResultPage = () => {
    const navigate = useNavigate();
    var itemsOneStr = localStorage.getItem('firstStage');
    var resultStageOne = itemsOneStr.split(',');
    var itemsTwoStr = localStorage.getItem('secondStage');
    var resultStageTwo = itemsTwoStr.split(',');
    
    
    const onClick = (e) => {
        e.preventDefault();
        navigate('/');
    }

    return (
        <div className='result-page'>
            <div className='container'>
                <div className='result-page__wrapper'>
                    <div className='result-page__info'>
                        <div className='result-page__fullname'>{localStorage.getItem('fullname')}</div>
                        <div className='result-page__groupnumber'>гр. {localStorage.getItem('groupNum')}</div>
                    </div>
                    <div className='result-page__table-container'>
                        <div className='result-page__table_wrapper'>
                            <h1 className='header_table'>Этап 1</h1>
                            <table className='result-page__table'>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'><span>Тест</span></td>
                                    <td className='result-page__table_data'><span>Результат</span></td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>1</td>
                                    <td className='result-page__table_data'>{resultStageOne[0]}/4</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>2</td>
                                    <td className='result-page__table_data'>{resultStageOne[1]}/4</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>3</td>
                                    <td className='result-page__table_data'>{resultStageOne[2]}/4</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>4</td>
                                    <td className='result-page__table_data'>{resultStageOne[3]}/4</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>5</td>
                                    <td className='result-page__table_data'>{resultStageOne[4]}/4</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>6</td>
                                    <td className='result-page__table_data'>{resultStageOne[5]}/4</td>
                                </tr>
                            </table>
                        </div>
                        <div className='result-page__table_wrapper'>
                            <h1 className='header_table'>Этап 2</h1>
                            <table className='result-page__table'>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'><span>Тест</span></td>
                                    <td className='result-page__table_data'><span>Результат</span></td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>1</td>
                                    <td className='result-page__table_data'>{resultStageTwo[0]}/1</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>2</td>
                                    <td className='result-page__table_data'>{resultStageTwo[1]}/1</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>3</td>
                                    <td className='result-page__table_data'>{resultStageTwo[2]}/1</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>4</td>
                                    <td className='result-page__table_data'>{resultStageTwo[3]}/1</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>5</td>
                                    <td className='result-page__table_data'>{resultStageTwo[4]}/1</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>6</td>
                                    <td className='result-page__table_data'>{resultStageTwo[5]}/1</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                    <button className='button' onClick={onClick}>На главную</button>
                </div>
            </div>
        </div>
    );
};

export default ResultPage;