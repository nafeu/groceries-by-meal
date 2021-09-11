import React, { useState, useRef, useEffect } from "react";
import { chain } from "lodash";
import "./app.css";

import Title from "./components/title";
import Footer from "./components/footer";
import { getMeals } from './services/meals';

function App() {
  const [meals, setMeals] = useState(getMeals());
  const [shoppingList, setShoppingList] = useState([]);

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

  return (
    <div className="app">
      <div className="app-container">
        <Title />
        <div className="shopping-list">
          {shoppingList.map(item => {
            return (
              <div className="shopping-list-item">{item}</div>
            )
          })}
        </div>
        <div className="meals">
          {meals.map(meal => {
            return (
              <div className={`meal ${meal.selected ? 'selected' : ''}`} onClick={() => handleClickMeal(meal.name)}>
                <div className="meal-name">{meal.name}</div>
                <div className="meal-ingredients">
                  {meal.ingredients.map(ingredient => {
                    return (
                      <div className="meal-ingredient">{ingredient}</div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
