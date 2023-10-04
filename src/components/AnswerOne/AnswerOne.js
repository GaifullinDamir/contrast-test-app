import React from 'react';

const AnswerOne = () => {
    return (
        <div className='answer-one'>
            <div className='container'>
                <div className='descr_answer-one'>Выберите 4 символа</div>
                <div className='delimeter'></div>
                <form className='answer-one__form'>
                    <div className='answer-one__list'>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="XXV" name="XXV" />
                            <label for="XXV">XXV</label>
                        </div>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="LVII" name="LVII" />
                            <label for="LVII">LVII</label>
                        </div>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="XXI" name="XXI" />
                            <label for="XXI">XXI</label>
                        </div>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="LV" name="LV" />
                            <label for="LV">LV</label>
                        </div>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="LXXV" name="LXXV" />
                            <label for="LXXV">LXXV</label>
                        </div>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="university" name="university" />
                            <label for="university"><i className="fa fa-university" aria-hidden="true"></i></label>
                        </div>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="map" name="map" />
                            <label for="map"><i className="fa fa-map" aria-hidden="true"></i></label>
                        </div>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="plane" name="plane" />
                            <label for="plane"><i className="fa fa-plane" aria-hidden="true"></i></label>
                        </div>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="hourglass" name="hourglass" />
                            <label for="hourglass"><i className="fa fa-hourglass" aria-hidden="true"></i></label>
                        </div>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="shield" name="shield" />
                            <label for="shield"><i className="fa fa-shield" aria-hidden="true"></i></label>
                        </div>
                    </div>
                    <button className='button'>Ответить</button>
                </form>
            </div>
        </div>
    );
};

export default AnswerOne;