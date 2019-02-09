import React from 'react';


function Meal(props) {
    return <div className="Meal">
        <h3>{props.label}</h3>
        <p>Price: {props.price} KGS</p>
    </div>
}


export default Meal;
