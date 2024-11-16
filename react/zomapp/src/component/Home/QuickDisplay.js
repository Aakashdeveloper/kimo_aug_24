import React from 'react';
import './QuickSearch.css';

const QuickDisplay = (props) => {
    console.log(">>>>",props)

    const listMeal = ({quickData}) => {
        if(quickData){
            return quickData.map((item) => {
                return(
                        <div className="tileContainer" key={item.mealtype_id}>
                            <div className="tileComponent1">
                                <img src={item.meal_image} alt="drinks"/>
                            </div>
                            <div className="tileComponent2">
                                <p className="compHeading">{item.mealtype}</p>
                                <p className="compSubHeading"> Best Deal For {item.mealtype}</p>
                            </div>
                        </div>
                )
            })
        }

    }

    return(
        <div id="tileBox">
               {listMeal(props)}
            </div>
    )
}

export default QuickDisplay;