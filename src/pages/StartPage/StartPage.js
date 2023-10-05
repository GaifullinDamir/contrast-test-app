import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
  const navigate = useNavigate();

  const [fullname, setFullname] = useState();
  const [groupNum, setGroupNum] = useState();

  useEffect(() => {
    localStorage.removeItem('fullname');
    localStorage.removeItem('groupNum');
  }, []);
  
  const onSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('fullname', fullname);
    localStorage.setItem('groupNum', groupNum);
    navigate('/test');
  }

  return (
    <div className='start-page'>
      <div className='container'>
        <div className='start-page__wrapper'>
          <h1 className='header'>Contrast Test</h1>
          <div className='descr'>Введите <span>ФИО</span> и <span>номер группы</span> <br/> для начала работы.</div>
          <form className='start-page__form' onSubmit={onSubmit}>
            <input className='input' required type='text' placeholder='ФИО' onChange={(e) => setFullname(e.currentTarget.value)}/>
            <input className='input' required type='text' placeholder='Номер группы' onChange={(e) => setGroupNum(e.currentTarget.value)}/>
            <button className='button'>Начать</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StartPage;