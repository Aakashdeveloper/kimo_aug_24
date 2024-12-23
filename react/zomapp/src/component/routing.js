import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Footer from './Footer';
import Home from './Home/Home';
import Listing from './listing/listing';
import Details from './details/detailsLogic';
import PlaceOrder from './orders/placeOrder';
import Main from './main';
import ViewOrder from './orders/ViewOrder';

const Routing = () => {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Main/>}>
                      <Route index element={<Home/>}  />
                      <Route path="listing/:mealId" element={<Listing/>}/>
                      <Route path="details" element={<Details/>}/>
                      <Route path="placeOrder/:restName" element={<PlaceOrder/>}/>
                      <Route path="viewOrder/" element={<ViewOrder/>}/>
                    </Route>
                </Routes>
            </Router>
            <Footer/>
        </>
    )

}

export default Routing;