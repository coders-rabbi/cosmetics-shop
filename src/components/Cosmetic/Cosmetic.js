import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    // console.log(props.cosmetics);
    const {name, balance, id} = props.cosmetics;
    // const addtocart = (name,id) =>{
    //     console.log( id);
    // }
    const addtocart = (id) =>{
        addToDb(id);//this function call for add to database
    }

    // const rabbi = () => addtocart(id);


    const removeFromCart = id =>{
        removeFromDb(id);
    }    
    return (
        <div className='products'>
            <h2>Name: {name}</h2>
            <h3>Balance: {balance}</h3>
            <p><small>id: {id}</small></p>
            {/* <button onClick={rabbi}>purches</button> */}
            <button onClick={() => addtocart(id,name)}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;