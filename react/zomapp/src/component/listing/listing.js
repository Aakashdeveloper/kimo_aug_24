import React,{useState,useEffect} from 'react';
import './listing.css';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import ListingDisplay from './listingDisplay';

const url= "http://3.17.216.66:4000"


const Listing = () => {

    let params = useParams();
    let mealId = params.mealId;

    const [restList, setRestList] = useState();

    useEffect(() => {
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${url}/restaurant?mealtype_id=${mealId}`)
        .then((res) => {
            setRestList(res.data) 
        })
    },[mealId])


    return(
       <div className='row'>
        <div id="mainListing">
            <div id="filter">

            </div>
        </div>
        <ListingDisplay listData={restList}/>
       </div>
    )
}

export default Listing