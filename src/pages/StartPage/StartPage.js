import React from 'react';

const StartPage = () => {
  return (
    <div className='start-page'>
      <div className='container'>
        <div className='start-page__wrapper'>
          <h1 className='header'>Contrast Test</h1>
          <div className='descr'>Введите ФИО и номер группы для продолжения</div>
          <form className='start-page__form'>
            <input className='input' required type='text' placeholder='ФИО'/>
            <input className='input' required type='text' placeholder='Номер группы'/>
            <button className='button'>Начать</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartPage;