import React from 'react';

const ResultPage = () => {
    return (
        <div className='result-page'>
            <div className='container'>
                <div className='result-page__wrapper'>
                    <div className='result-page__info'>
                        <div className='result-page__fullname'>Гайфуллин Дамир Равильевич</div>
                        <div className='result-page__groupnumber'>гр. 4411</div>
                    </div>
                    <div className='result-page__table-container'>
                        <div className='result-page__table_wrapper'>
                            <h1 className='header_table'>Этап 1</h1>
                            <table className='result-page__table'>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'><span>Этап</span></td>
                                    <td className='result-page__table_data'><span>Тест</span></td>
                                    <td className='result-page__table_data'><span>Результат</span></td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>1</td>
                                    <td className='result-page__table_data'>1</td>
                                    <td className='result-page__table_data'>2/4</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>1</td>
                                    <td className='result-page__table_data'>2</td>
                                    <td className='result-page__table_data'>1/4</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>1</td>
                                    <td className='result-page__table_data'>3</td>
                                    <td className='result-page__table_data'>1/4</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>1</td>
                                    <td className='result-page__table_data'>4</td>
                                    <td className='result-page__table_data'>2/4</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>1</td>
                                    <td className='result-page__table_data'>5</td>
                                    <td className='result-page__table_data'>1/4</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>1</td>
                                    <td className='result-page__table_data'>6</td>
                                    <td className='result-page__table_data'>1/4</td>
                                </tr>
                            </table>
                        </div>
                        <div className='result-page__table_wrapper'>
                            <h1 className='header_table'>Этап 2</h1>
                            <table className='result-page__table'>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'><span>Этап</span></td>
                                    <td className='result-page__table_data'><span>Тест</span></td>
                                    <td className='result-page__table_data'><span>Результат</span></td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>2</td>
                                    <td className='result-page__table_data'>1</td>
                                    <td className='result-page__table_data'>2/4</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>2</td>
                                    <td className='result-page__table_data'>2</td>
                                    <td className='result-page__table_data'>1/4</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>2</td>
                                    <td className='result-page__table_data'>3</td>
                                    <td className='result-page__table_data'>1/4</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>2</td>
                                    <td className='result-page__table_data'>4</td>
                                    <td className='result-page__table_data'>2/4</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>2</td>
                                    <td className='result-page__table_data'>5</td>
                                    <td className='result-page__table_data'>1/4</td>
                                </tr>
                                <tr className='result-page__table_row'>
                                    <td className='result-page__table_data'>2</td>
                                    <td className='result-page__table_data'>6</td>
                                    <td className='result-page__table_data'>1/4</td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultPage;