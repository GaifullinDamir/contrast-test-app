import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const onClick = (e) => {
        e.preventDefault();

        navigate('/');
    }
    return (
        <div className='not-found'>
            <div className='not-found__wrapper'>
                <i class="fa fa-chain-broken" aria-hidden="true"></i>
                <h1 className='header_not-found'>404</h1>
                <button className='button' onClick={onClick}>На главную</button>
            </div>
        </div>
    );
};

export default NotFound;