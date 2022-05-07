import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useInventories from '../../hooks/useInventories';
import Inventory from '../Inventory/Inventory';

const Inventories = () => {
    const navigate=useNavigate()
    const [inventories,setInventories]=useInventories()
    return (
        <div>
             < div className='row m-5 g-3'>
            <h3 className='text-center text-info'>Inventories</h3>
        
         {
           window.location.pathname=== '/inventories'?inventories.map((inventory,index)=><Inventory key={index} inventory={inventory}></Inventory>):inventories.slice(0,6).map((inventory,index)=><Inventory key={index} inventory={inventory}></Inventory>)
               
           }
           {
                window.location.pathname!== '/inventories' && <Button onClick={()=>{navigate('/inventories')
            }} className='btn btn-info text-light w-25 mx-auto mt-4 '>See All Inventories</Button>
           }
        </div>
        </div>
    );
};

export default Inventories;