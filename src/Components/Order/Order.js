import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import {  Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Order = () => {
    const{inventoriesId}=useParams()
    const [inventory,setInventory]=useState({})
    useEffect(()=>{
        const url=`http://localhost:2000/inventories/${inventoriesId}`
        fetch(url)
        .then(response=>response.json())
        .then(data=>setInventory(data))
    },[])
    const handleDelivered=()=>{
      const stock=inventory?.stock-1
      setInventory({...inventory,stock:stock})
      const url=`http://localhost:2000/inventories/${inventoriesId}`
      fetch(url,{
          method:'PUT',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify({stock})
      })
      .then(response=>response.json())
      .then(data=>{
          console.log(data)
      })
    }
    const handleSubmit=(event)=>{
      event.preventDefault()
      const num=parseInt(event.target.number.value)
      const stock=(inventory?.stock+num)
      setInventory({...inventory,stock:stock})
      const url=`http://localhost:2000/inventories/${inventoriesId}`
      fetch(url,{
          method:'PUT',
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify({stock})
      })
      .then(response=>response.json())
      .then(data=>{
           toast('Restock Successfully!!!!')
          console.log("Data get",data)
          event.target.reset()
      })
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
    <Link to={`/checkout/${inventoriesId}`}>
   <Button  onClick={handleDelivered} variant="info text-light ms-3">Delivered</Button>
   </Link>
    <form onSubmit={handleSubmit} class="mt-3">
          <input name='number' type='number' placeholder='Stock Amount' class="form-control mt-3"required id="exampleInputPassword1"/>
          <input className='btn btn-primary w-100 mt-3' type="submit" value="Restoke" />
        </form>
  </Card.Body>
  </div>
  
</Card>
  
        </div>
    );
};

export default Order;