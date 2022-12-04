import React from 'react';
import spinner from '../images/spinner.gif'
const Loading = (props) => {
    return (
        <div className='w-10'>
            <img src={spinner} alt="spinner" />
        </div>
    );
};

export default Loading;