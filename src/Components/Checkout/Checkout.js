import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import axios from 'axios';
const Checkout = () => {

    const{inventoriesId}=useParams()
    const [inventory,setInventory]=useState({})
    const [user] = useAuthState(auth);
    useEffect(()=>{
        const url=`http://localhost:2000/inventories/${inventoriesId}`
        fetch(url)
        .then(response=>response.json())
        .then(data=>setInventory(data))
    },[])
    const handleOrder=e=>{
        e.preventDefault();
        const order={
            email:user.email,
            service:inventory.name,
            serviceId:inventoriesId,
            address:e.target.address.value,
            phone:e.target.phone.value
        }
        axios.post('http://localhost:2000/order',order)
        .then(response=>{
            const{data}=response
            if(data.insertedId){
                toast('Your Order is Booked!!!!')
                e.target.reset()
            }
        })
    }
    return (
        <div className='w-50 mx-auto'>
        <h2 className='pt-5 text-info text-center'>Please Order:{inventory.name}</h2>
        <form onSubmit={handleOrder}>
            <input className='w-100 mb-2' type='text' placeholder='Name'  value={user?.displayName}  required></input> <br></br>
            <input className='w-100 mb-2' type='text' placeholder='Email' value={user?.email} readOnly required></input> <br></br>
            <input className='w-100 mb-2' type='text' placeholder='Address' name='address' required></input> <br></br>
            <input className='w-100 mb-2' type='text' value={inventory.name} placeholder='Service Name'  readOnly></input> <br></br>
            <input className='w-100 mb-2' type='number' placeholder='phone' name='phone' required></input> <br></br>
            <input className='btn btn-info text-light w-25 mx-auto mt-2' type='submit' value='Place Order'></input>

        </form>
    </div>
    );
};

export default Checkout;