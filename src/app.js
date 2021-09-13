import React, { useState, useRef, useEffect } from "react";
import { chain, includes, pull } from "lodash";
import "./app.css";

import Title from "./components/title";
import Footer from "./components/footer";
import { getMeals } from './services/meals';

function App() {
  const [meals, setMeals] = useState(getMeals());
  const [shoppingList, setShoppingList] = useState([]);
  const [cart, setCart] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (cart.length === 0) {
      setIsComplete(false);
    } else {
      setIsComplete(cart.length === shoppingList.length);
    }
  }, [shoppingList, cart])

  const handleClickMeal = name => {
    const updatedMeals = meals.map(meal => {
      if (name === meal.name) {
        return {
          ...meal,
          selected: !meal.selected
        }
      }

      return meal;
    });

    const shoppingList = chain(updatedMeals)
      .filter(m => m.selected)
      .map(m => m.ingredients)
      .flatten()
      .uniq()
      .value()

    setMeals(updatedMeals);
    setShoppingList(shoppingList);
  }

  const handleClickItem = item => {
    if (includes(cart, item)) {
      setCart(cart.filter(cartItem => cartItem !== item));
    } else {
      setCart([...cart, item])
    }
  }

  return (
    <div className="app">
      <div className="app-container">
        <Title />
        <div className="meals">
          {meals.map(meal => {
            return (
              <div key={meal.name} className={`meal ${meal.selected ? 'selected' : ''}`} onClick={() => handleClickMeal(meal.name)}>
                <div className="meal-name">{meal.name}</div>
                <div className="meal-ingredients">
                  {meal.ingredients.map(ingredient => {
                    return (
                      <div
                        key={ingredient}
                        className="meal-ingredient"
                      >
                        {ingredient}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        {shoppingList.length > 0 && (
          <div className={`shopping-list ${isComplete ? 'is-complete' : ''}`}>
            {shoppingList.map(item => {
              return (
                <div
                  key={item}
                  onClick={() => handleClickItem(item)}
                  className={`shopping-list-item ${includes(cart, item) ? 'in-cart' : 'not-in-cart'}`}
                >
                  {item}
                </div>
              )
            })}
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
