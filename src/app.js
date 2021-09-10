import React, { useState, useRef, useEffect } from "react";
import "./app.css";

import Title from "./components/title";
import Footer from "./components/footer";
import { getMeals } from './services/meals';

function App() {
  const [meals, setMeals] = useState(getMeals());

  return (
    <div className="app">
      <div className="app-container">
        <Title />
        <div className="meals">
          {meals.map(meal => {
            return (
              <div className="meal">
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
