import React from 'react';
import axios from 'axios';

const url = "http://3.17.216.66:4000/filter"
//http://localhost:9110/filter/1?cuisineId=1

const CuisineFilter = (props) => {

    const handleFilter = (event) => {
        let cuisineId = event.target.value;
        let mealId = props.mealId;
        let cuisineUrl = ""
        console.log(mealId)
        console.log(cuisineId)
        if(cuisineId === ""){
            cuisineUrl = `${url}/${mealId}`
        }else{
            cuisineUrl = `${url}/${mealId}?cuisine=${cuisineId}`
        }
        axios.get(cuisineUrl)
        .then((res) => {props.restPerCuisine(res.data)} )


    }

    return(
        <>
            <center><h3>Cuisine Filter</h3></center>
            <div style={{marginLeft:'15%'}} onChange={handleFilter}>
                <label className="radio">
                    <input type="radio" name="cuisine" value=""/>All
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="1"/>North Indain
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="2"/>South Indian
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="3"/>Chinese
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="4"/>Fast Food
                </label>
                <label className="radio">
                    <input type="radio" name="cuisine" value="5"/>Street Food
                </label>
            </div>
        </>
    )
}

export default CuisineFilter