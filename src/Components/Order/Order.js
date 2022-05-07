import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Order = () => {
    const{inventoriesId}=useParams()
    const [inventory,setInventory]=useState({})
    const navigate=useNavigate()
    useEffect(()=>{
        const url=`http://localhost:2000/inventories/${inventoriesId}`
        fetch(url)
        .then(response=>response.json())
        .then(data=>setInventory(data))
    },[])
    const handleProceed=()=>{
        navigate('/checkout')
    }
    return (
        <div className='d-flex pt-5 justify-content-center align-items-md-center'>
          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className='p-2' src={inventory.img} width="286" height="280"/>
  <div className='m-3'>
  <Card.Body className='text-center'>
    <Card.Title className='text-info'>{inventory.name}</Card.Title>
    <Card.Text>
     <strong>Description:{inventory.description}</strong>
    </Card.Text>
    <Card.Text>
    <strong>Seller:{inventory.seller}</strong>
    </Card.Text>
    <Card.Text>
    <strong>Stock:{inventory.stock}</strong>
    </Card.Text>
    <Button onClick={ handleProceed}   variant="info text-light ms-3">Delivered</Button>
    <div class="mt-3">
          <input name='number' type='number' class="form-control pt-3" id="exampleInputPassword1"/>
          <button type="submit" class="btn btn-primary w-100 mt-3">Restock</button>
        </div>
  </Card.Body>
  </div>
</Card>
        </div>
    );
};

export default Order;