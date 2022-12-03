import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Reviews = () => {
    const [user , setUser] = useState([]);
    useEffect(()=>{
        fetch('user.json')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    console.log(user.slice(0,3));
    return (
        <div>
            <h1>This is Review section</h1>
        </div>
    );
};

export default Reviews;