import React from 'react';
import Meal from './Meal/Meal';


function MealForm(props) {
    // распаковка ключей props.ingredients в 4 переменных: salad, meat, cheese, bacon
    // props.ingredients приходит из state.ingredients компонента App.js
    const {hamburger, cheeseburger, fries, coffee, tea, cola} = props.ingredients;

    // создаём массивы из компонентов Salad, Meat, Cheese и Bacon,
    // используя количество, указанное в свойстве count каждого ингредиента.
    // Вариант с одним массивом для всех ингредиентов.
    let ingredients = [];
    for (let i = 0; i < hamburger.count; i++) ingredients.push(<Meal info = {hamburger} />);
    for (let i = 0; i < cheeseburger.count; i++) ingredients.push(<Meal info = {cheeseburger}/>);
    for (let i = 0; i < fries.count; i++) ingredients.push(<Meal info = {fries}/>);
    for (let i = 0; i < coffee.count; i++) ingredients.push(<Meal info = {coffee}/>);
    for (let i = 0; i < tea.count; i++) ingredients.push(<Meal info = {tea}/>);
    for (let i = 0; i < cola.count; i++) ingredients.push(<Meal info = {cola}/>);

    return <div className="Burger">
        <div className="BreadTop">
            <div className="Seeds1"/>
            <div className="Seeds2"/>
        </div>
        {ingredients}
        <div className="BreadBottom"/>
    </div>
}


export default MealForm