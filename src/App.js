import React, {Component} from 'react';
import './App.css'; 
import Burger from './components/Burger/Burger';
import OrderForm from './components/OrderForm/OrderForm';
import MealForm from './components/MealForm/MealForm';


// список доступных ингредиентов
const availableIngredients = [
    {name: 'hamburger', type: 'food', price: 5, label: 'Humburger'},
    {name: 'cheeseburger',type: 'food', price: 20, label: 'Cheeseburger'},
    {name: 'fries',type: 'food', price: 50, label: 'Fries'},
    {name: 'coffee',type: 'drink', price: 30, label: 'Coffee'},
    {name: 'tea',type: 'drink', price: 30, label: 'Tea'},
    {name: 'cola',type: 'drink', price: 30, label: 'Cola'}
];


class App extends Component {
    state = {
        ingredients: {
            hamburger: { count: 1, total : 0},
            cheeseburger: {count: 2, total: 0},
            fries: {count: 0, total: 0},
            coffee: {count: 0, total: 0},
            tea: {count: 0, total: 0},
            cola: {count: 0, total: 0}
        },
        total: 0
    };

    addIngredient = (name) => {
        // скопировать ингредиент
        let ingredient = {...this.state.ingredients[name]};

        // поменять свойства в копии ингредиента
        // find - метод массива, который работает аналогично findIndex,
        // но находит не индекс элемента в массиве,
        // а возвращает сам элемент.
        let price = availableIngredients.find(item => item.name === name).price;
        ingredient.count += 1;
        ingredient.total = ingredient.count * price;

        // скопипровать объект "ингредиенты"
        let ingredients = {...this.state.ingredients};

        // поменять ингредиент в копии объекта "ингредиенты"
        ingredients[name] = ingredient;

        // скопировать состояние (state) компонента App.js
        let state = {...this.state};

        // поменять объект "игредиенты" в копии состояния (state)
        state.ingredients = ingredients;
        this.getCost(state);
        // задать новый state с перерисовкой компонентов на странице
        this.setState(state);
    };

    removeIngredient = (name) => {
        // всё то же самое, что и в addIngredient
        // только количество уменьшается на 1, а не увеличивается
        // и есть проверка, что нельзя уменьшить количество ингредиента меньше 0

        let ingredient = {...this.state.ingredients[name]};
        let price = availableIngredients.find(item => item.name === name).price;
        if (ingredient.count > 0) {
            ingredient.count -= 1;
        }
        ingredient.total = ingredient.count * price;

        let ingredients = {...this.state.ingredients};
        ingredients[name] = ingredient;

        let state = {...this.state};
        state.ingredients = ingredients;
        this.setState(state);
    };

    getCost = () => {
        return this.state.ingredients.hamburger.total+
        this.state.ingredients.cheeseburger.total+
        this.state.ingredients.fries.total+
        this.state.ingredients.coffee.total+
        this.state.ingredients.tea.total+
        this.state.ingredients.cola.total;
    }

    render() {
        return (    
            <div className="App">
                <OrderForm ingredients={this.state.ingredients} sub = {this.removeIngredient} info = {availableIngredients}/>
                <p> Current Price : {this.getCost()} KGS</p>
                {/* здесь вывести панель с общей ценой */}
                {/* для подсчёта цены можно добавить метод в App.js */}
                {/* и вызвать его в фигурных скобках в JSX, */}
                {/* чтобы получить и вывести результат. */}
                {/* под ценой вывести форму BurgerForm */}
                {/* в форме вывести IngredientControl для каждого ингредиента */}
            </div>
        );
    }
}

export default App;
