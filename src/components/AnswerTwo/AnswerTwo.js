import React, { useEffect, useState} from 'react';

const AnswerTwo = ({setIsAnswered, setTestTwoCount, items, rightAnswer, setCountRights}) => {
    const [checkedState, setCheckedState] = useState(
        new Array(items.length).fill(false)
    );

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        setIsAnswered(false);
        setTestTwoCount(count => count + 1);
        var rightsCount = 0
        for (var i = 0; i < items.length; i++) {
            var right = rightAnswer === items[i];

            if (right && checkedState[i]) {
                rightsCount++;
            }
        }
        setCountRights(count => [...count, rightsCount]);
    };
    return (
        <div className='answer-two'>
            <div className='container'>
                <div className='descr_answer-two'>Выберите 1 символ</div>
                <div className='delimeter'></div>
                <form className='answer-two__form' onSubmit={onSubmit}>
                    <div className='answer-two__list'>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="XXV" name="XXV" checked={checkedState[0]}
                                onChange={() => handleOnChange(0)} />
                            <label htmlFor="XXV">{items[0]}</label>
                        </div>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="LVII" name="LVII" checked={checkedState[1]}
                                onChange={() => handleOnChange(1)}/>
                            <label htmlFor="LVII">{items[1]}</label>
                        </div>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="XXI" name="XXI" checked={checkedState[2]}
                                onChange={() => handleOnChange(2)}/>
                            <label htmlFor="XXI">{items[2]}</label>
                        </div>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="LV" name="LV" checked={checkedState[3]}
                                onChange={() => handleOnChange(3)}/>
                            <label htmlFor="LV">{items[3]}</label>
                        </div>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="LXXV" name="LXXV" checked={checkedState[4]}
                                onChange={() => handleOnChange(4)}/>
                            <label htmlFor="LXXV">{items[4]}</label>
                        </div>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="university" name="university" checked={checkedState[5]}
                                onChange={() => handleOnChange(5)}/>
                            <label htmlFor="university">{items[5]}</label>
                        </div>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="map" name="map" checked={checkedState[6]}
                                onChange={() => handleOnChange(6)}/>
                            <label htmlFor="map">{items[6]}</label>
                        </div>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="plane" name="plane" checked={checkedState[7]}
                                onChange={() => handleOnChange(7)}/>
                            <label htmlFor="plane">{items[7]}</label>
                        </div>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="hourglass" name="hourglass" checked={checkedState[8]}
                                onChange={() => handleOnChange(8)}/>
                            <label htmlFor="hourglass">{items[8]}</label>
                        </div>
                        <div className='checkbox'>
                            <input className='checkbox__input' type="checkbox" id="shield" name="shield" checked={checkedState[9]}
                                onChange={() => handleOnChange(9)} />
                            <label htmlFor="shield">{items[9]}</label>
                        </div>
                    </div>
                    <button className='button'>Ответить</button>
                </form>
            </div>
        </div>
    );
};

export default AnswerTwo;