import React from 'react';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/test');
  }
  return (
    <div className='start-page'>
      <div className='container'>
        <div className='start-page__wrapper'>
          <h1 className='header'>Contrast Test</h1>
          <div className='descr'>Введите <span>ФИО</span> и <span>номер группы</span> <br/> для начала работы.</div>
          <form className='start-page__form' onSubmit={onSubmit}>
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