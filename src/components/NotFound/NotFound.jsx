import React from 'react';
import notfound from '../images/notFound.png'

const NotFound = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <img src={notfound} alt="notfound" />
        </div>
    );
};

export default NotFound;