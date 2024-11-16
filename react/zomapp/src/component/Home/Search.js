import React,{useState,useEffect} from 'react';
import './Search.css';

const url = "http://3.17.216.66:4000"

const Search = () => {

    const [location,setLoaction] = useState([]);
    const [restaurant,setRestaurant] = useState([]);
  

    useEffect(() => {
        fetch(`${url}/location`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
           // console.log(data)
            setLoaction(data)
        })
    },[])

    const renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item._id} value={item.state_id}>
                        {item.state}
                    </option>
                )
            })
        }
    }

    const handleChange = (e) => {
        //console.log(e.target.value)
        fetch(`${url}/restaurant?stateId=${e.target.value}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setRestaurant(data)
        })
    }

    const renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }

    return(
        <div id="search">
            {/*jjj*/}
            <div className="logo">
                <span>D!</span>
            </div>
            <div id="heading">
                Find Best Place Near You
            </div>
            <div className="dropdown">
                <select onChange={handleChange}>
                    <option>-----SELECT YOUR CITY-----</option>
                    {renderCity(location)}
                </select>
                <select id="restSelect">
                    <option>-----SELECT YOUR RESTAURANT-----</option>
                    {renderRest(restaurant)}
                </select>
            </div>
        </div>
    )
}

export default Search;