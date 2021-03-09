import React from 'react';
import {Link} from 'react-router-dom'
import {AppContext} from '../context/AppProvider'

function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
            <a className="navbar-brand" href="#">ShopCart</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/home">
                                Home 
                            </Link>
                        </li>
                        <li className="nav-item">
                            <AppContext.Consumer>
                                {
                                    ({items}) => {
                                       return  <Link className="nav-link" to="/cart">Cart ({items.length}) </Link>
                                    }  
                                }
                            </AppContext.Consumer>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;