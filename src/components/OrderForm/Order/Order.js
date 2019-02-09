import React from 'react';


function Order(props) {
    return <div className="Order">
        <p>{props.label}  x{props.info.count}  {props.info.total} KGS </p>
        <button onClick = {() =>props.sub(props.info.name)}>X</button>
    </div>
}


export default Order;
