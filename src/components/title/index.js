import React from "react";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

const Title = () => {
  return (
    <div className="page-title">
      <FontAwesomeIcon icon={faShoppingBasket} /> Groceries by{" "}
      <span className="page-title-bold">Meal</span>
    </div>
  );
};

export default Title;
