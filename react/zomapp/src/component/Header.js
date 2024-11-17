import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

const Header = () => {
    return(
        <>
            <header>
                <div id="brand">
                    Developer Funnel

                    &nbsp; <Link to="/" className='btn btn-success'>Home</Link>
                </div>
                <div id="social">
                    <a href="#">
                        <img src="images/facebook.png" alt="fb" className="socialIcon"/>
                    </a>
                    <a href="#">
                        <img src="images/insta.png" alt="fb" className="socialIcon"/>
                    </a>
                    <a href="#">
                        <img src="images/youtube1.png" alt="fb" className="socialIcon"/>
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header;