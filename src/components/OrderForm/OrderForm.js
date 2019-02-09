import React from 'react';
import Order from './Order/Order';


function OrderForm(props) {
    // распаковка ключей props.ingredients в 4 переменных: salad, meat, cheese, bacon
    // props.ingredients приходит из state.ingredients компонента App.js
    const {hamburger, cheeseburger, fries, coffee, tea, cola} = props.ingredients;

    // используя количество, указанное в свойстве count каждого ингредиента.
    // Вариант с одним массивом для всех ингредиентов.
    let ingredients = [];
    if (hamburger.count>0) ingredients.push(<Order label = "Hamburger" info = {hamburger} sub = {props.sub}/>);
    if (cheeseburger.count>0) ingredients.push(<Order label = "Cheeseburger" info = {cheeseburger} sub = {props.sub}/>);
    if (fries.count>0) ingredients.push(<Order label = "Fries" info = {fries} sub = {props.sub}/>);
    if (coffee.count>0) ingredients.push(<Order label = "Coffee" info = {coffee} sub = {props.sub}/>);
    if (tea.count>0) ingredients.push(<Order label = "Tea" info = {tea} sub = {props.sub}/>);
    if (cola.count>0) ingredients.push(<Order label = "Cola" info = {cola} sub = {props.sub}/>);
    if (ingredients.length === 0) ingredients.push(
        <p>Order is empty!<br />Please add some items!</p>
    ) 
    return <div className="OrderForm">
        {ingredients}
        
    </div>
}


export default OrderForm