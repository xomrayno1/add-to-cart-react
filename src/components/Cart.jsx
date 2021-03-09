import React from 'react';
import PropTypes from 'prop-types';
import {AppContext} from '../context/AppProvider'

Cart.propTypes = {
    
};

function Cart(props) {
    return (
        <div className="container">
            <h1>Giỏ hàng</h1>
            <table className="table">
                <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Giá tiền</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                </tr>
                <AppContext.Consumer>
                    {
                        ({items}) => (
                            items.map((item,index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.product.name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.totalPrice}</td>
                                </tr>
                            ))
                        )
                    }
                </AppContext.Consumer>
            </table>
        </div>
    );
}

export default Cart;