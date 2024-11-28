import React, { useState,useEffect } from 'react';
import axios from 'axios';
import DisplayOrder from './displayOrder';

const order = "http://localhost:6120/orders"

const ViewOrder = () => {

    const [orders,setOrders] = useState()
    
    useEffect(() => {
        axios.get(order).then((res) => {setOrders(res.data)})
    })
    return(
        <DisplayOrder orderData={orders}/>
    )
}

export default ViewOrder