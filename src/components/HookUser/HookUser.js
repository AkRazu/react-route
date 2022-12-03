import { useEffect } from "react";
import { useState } from "react"

const HookUser = ()=>{
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        fetch('user.json')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[])
    return [users, setUsers];
}

export default HookUser;