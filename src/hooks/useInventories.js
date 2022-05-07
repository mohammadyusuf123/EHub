import { useEffect, useState } from 'react';

const useInventories = () => {
    const [inventories,setInventories]=useState([])
    useEffect(()=>{
        fetch('http://localhost:2000/inventories')
        .then(response=>response.json())
        .then(data=>setInventories(data))
    },[])



    return [inventories,setInventories]
};

export default useInventories;