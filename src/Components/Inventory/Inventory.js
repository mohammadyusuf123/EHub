import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Inventory = ({inventory}) => {
    const{img,description,name,seller,stock}=inventory
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
    <Button  variant="info text-light ms-3">Booking Now</Button>
  </Card.Body>
  </div>
</Card>
              </div>
        
    );
};

export default Inventory;