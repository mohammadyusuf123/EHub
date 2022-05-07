import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Inventory = ({inventory}) => {
    const{_id,img,description,name,seller,stock}=inventory
    const navigate=useNavigate()
    const handleOrder=(id)=>{
        navigate(`/inventories/${id}`)
    }
    return (
              <div className='col-md-4 '>
            
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" className='p-2' src={img} width="286" height="280"/>
  <div className='m-3'>
  <Card.Body className='text-center'>
    <Card.Title className='text-info'>{name}</Card.Title>
    <Card.Text>
     <strong>Description:{description}</strong>
    </Card.Text>
    <Card.Text>
    <strong>Seller:{seller}</strong>
    </Card.Text>
    <Card.Text>
    <strong>Stock:{stock}</strong>
    </Card.Text>
    <Button  onClick={()=>handleOrder(_id)} variant="info text-light ms-3">Order Now</Button>
  </Card.Body>
  </div>
</Card>
              </div>
        
    );
};

export default Inventory;