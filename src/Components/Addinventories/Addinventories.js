import React from 'react';
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from 'react-router-dom';

const Addinventories = () => {
    const { register, handleSubmit } = useForm();
    const navigate=useNavigate()
    const location=useLocation()
    let from = location.state?.from?.pathname || "/";
    const onSubmit = data => {
        const url='http://localhost:2000/inventories'
        fetch(url,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(response=>response.json())
        .then(result=>{
            if(result){
                navigate(from, { replace: true });
            }
        })
  
    };
     
    return (
        <div className='mx-auto w-50 pt-5'>
            <h3 className='text-center text-info'>Add Inventories</h3>
            <form  className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
      <input className='mb-3' placeholder='Inventories Name' {...register("name", { required: true, maxLength: 20 })} />
      <textarea className='mb-3' placeholder='Description' {...register("description")} />
      <input className='mb-3' placeholder='seller' type="text" {...register("text")} />
      <input className='mb-3' placeholder='stock' type="number" {...register("stock")} />
      <input className='mb-3' placeholder='Photo URL' type="text" {...register("img")} />
      <input className='mb-3 bg-primary text-white'  type="Submit" />
    </form>
        </div>
    );
};

export default Addinventories;