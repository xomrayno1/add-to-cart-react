import React, { useState } from 'react';
import  _ from 'lodash';
import {CartItem} from '../model/CartItem'

export const AppContext = React.createContext();

export function AppProvider(props) {
    const [items,setItems] = useState([]);
    const addToCart = (product) => {
        let cartItem = new CartItem(product,product['price'],1,product['price'] * 1);
        if(items.length > 0){
            for(let item of items){
                if(item.product.id === product.id){
                    setItems([...item]);
                }
            }
        }else{
            setItems([...items.concat(cartItem)])
        }
    }
    return (
        <AppContext.Provider value={{
                    items : items,
                    addToCart: addToCart
                }}>
            {
                props.children
            }
        </AppContext.Provider>
    )
}
 