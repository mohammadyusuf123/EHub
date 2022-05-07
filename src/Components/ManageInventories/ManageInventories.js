
import React from 'react';
import useInventories from '../../hooks/useInventories';
import'./ManageInventories.css'

const ManageInventories = () => {
    const [inventories,setInventories]=useInventories()
    const handleDelete=id=>{
        const proceed=window.confirm('Are sure want to delete')
        if(proceed){
           const url=`http://localhost:2000/inventories/${id}`
           fetch(url,{
               method:'DELETE'
           })
           .then(response=>response.json())
           .then(data=>{
               console.log(data)
               const remaining=inventories.filter(inventory=>inventory._id !==id)
               setInventories(remaining)
           })
        }
    }
    return (
       <div className="mx-auto w-50">
           <h2>Manage Your Inventories</h2>
           {
               inventories.map(inventory=><div key={inventory._id}>
                   <h3>{inventory.name}<button onClick={()=>handleDelete(inventory._id)}>Delete</button></h3>
               </div>)
           }
       </div>
    );
};

export default ManageInventories;