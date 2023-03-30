import React, { useEffect, useState } from 'react';
import { getTotalPrice } from '../../utilities/calculate';
import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([])

    useEffect( () =>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setCosmetics(data))
    },[])
    const total = getTotalPrice(cosmetics);
    return (
        <div>
            <h1>Hello Rabbi</h1>
            <p>Total Price Needed: {total}</p>
            {
                cosmetics.map(cosmetics => <Cosmetic
                    key={cosmetics.id}
                    cosmetics={cosmetics}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;