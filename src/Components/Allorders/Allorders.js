import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Allorders = () => {
    const [orders,setOrders]=useState([])
    const[user]=useAuthState(auth)
    useEffect(()=>{
        const email=user?.email
        const url=`http://localhost:2000/order?email=${email}`
        fetch(url)
        .then(response=>response.json())
        .then(data=>setOrders(data))
    },[user])
    return (
        <div>
            <h1>All order is:{orders.length}</h1>
        </div>
    );
};

export default Allorders;