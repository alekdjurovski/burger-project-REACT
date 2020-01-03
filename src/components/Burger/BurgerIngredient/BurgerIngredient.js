import React from "react";
import classes from "./BurgerIngredient.css";

import PropTypes from "prop-types";

const burgerIngredient = props => {
  let ingredient = null;

  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className="BreadBottom">bottom</div>;
      break;
    case "bread-top":
      ingredient = (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className="Meat"></div>;
      break;
    case "cheese":
      ingredient = <div className="Cheese"></div>;
      break;
    case "salad":
      ingredient = <div className="Salad"></div>;
      break;
    case "bacon":
      ingredient = <div className="Bacon"></div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default burgerIngredient;
