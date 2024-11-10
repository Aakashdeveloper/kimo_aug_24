import React from 'react';
import './QuickSearch.css';

const QuickSearch = () => {
    return(
        <div id="quickSearch">
            <span class="quickHeading">Quick Search</span>
            <span class="quickSubHeading">Find Restaurants By MealType</span>
            <div id="tileBox">
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="images/dinner.png" alt="drinks"/>
                    </div>
                    <div class="tileComponent2">
                        <p class="compHeading"> BreakFast</p>
                        <p class="compSubHeading"> Best Deal For BreakFast</p>

                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="images/snacks.png" alt="drinks"/>
                    </div>
                    <div class="tileComponent2">
                        <p class="compHeading"> BreakFast</p>
                        <p class="compSubHeading"> Best Deal For BreakFast</p>

                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="images/dinner.png" alt="drinks"/>
                    </div>
                    <div class="tileComponent2">
                        <p class="compHeading"> BreakFast</p>
                        <p class="compSubHeading"> Best Deal For BreakFast</p>

                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="images/nightlife.png" alt="drinks"/>
                    </div>
                    <div class="tileComponent2">
                        <p class="compHeading"> BreakFast</p>
                        <p class="compSubHeading"> Best Deal For BreakFast</p>

                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="images/lunch.png" alt="drinks"/>
                    </div>
                    <div class="tileComponent2">
                        <p class="compHeading"> BreakFast</p>
                        <p class="compSubHeading"> Best Deal For BreakFast</p>

                    </div> 
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="images/drinks.png" alt="drinks"/>
                    </div>
                    <div class="tileComponent2">
                        <p class="compHeading"> BreakFast</p>
                        <p class="compSubHeading"> Best Deal For BreakFast</p>

                    </div>
                </div>
                
              
            </div>
        </div>
    )
}

export default QuickSearch;