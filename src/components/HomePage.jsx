import React from 'react';
import PropTypes from 'prop-types';
import {AppContext} from '../context/AppProvider'

HomePage.propTypes = {
    products : PropTypes.array
};
HomePage.defaultProps = {
    products : null
}

function HomePage(props) {
    const {products} = props;
    return (
        <div className="container">
                <header className="jumbotron my-4">
                    <h1 className="display-3">A Warm Welcome!</h1>
                    <p className="lead"></p>                   
                </header>
                
                <div className="row text-center">
                    {
                        products.map(item => (
                            <div    key={item.id} className="col-lg-3 col-md-6 mb-4">
                                <div className="card h-100">
                                    <img className="card-img-top" src="http://placehold.it/500x325" alt=""/>
                                    <div className="card-body">
                                    <h4 className="card-title">{item.name}</h4>
                                    <p className="card-text">{item.price} $</p>
                                    </div>
                                    <div className="card-footer">
                                        <AppContext.Consumer>
                                            {(context) => (
                                                <button onClick={() => context.addToCart(item)}   className="btn btn-primary">
                                                    Add To Cart
                                                </button>
                                            )}
                                        </AppContext.Consumer>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
  
                </div>
        </div>          
       
    );
}

export default HomePage;