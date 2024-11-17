import React, {useState, useEffect } from 'react';
import './details.css';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

const url = "http://3.17.216.66:4000";

const DetailsDisplay = () => {

    let [searchParams] = useSearchParams();
    let restId = searchParams.getAll('restId');
    let [restDetails ,setrestDetails] = useState([])

    useEffect(() => {

        const rDetails = async() => {
            const rData = await axios.get(`${url}/details/${restId}`)
            setrestDetails(rData)
        }

        rDetails()

    },[])

    return(
        <div className='main'>
            Detilas
        </div>
    )
}

export default DetailsDisplay