import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.4,
  cheese: 1.3,
  meat: 0.7
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    },
    totalPrice: 4
  };

  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totakPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice
    });
  }
  render() {
    // const disabledInfo = {
    //   ...this.state.ingredients
    // };
    // for (let key in disabledInfo) {
    //   disabledInfo[key] = disabledInfo[key] <= 0;
    // }
    // // {salad: true, meat: false, ...}

    return (
      <div>
        <React.Fragment>
          <Burger ingredients={this.state.ingredients}></Burger>
          <BuildControls ingredientAdded={this.addIngredientHandler} />
        </React.Fragment>
      </div>
    );
  }
}

export default BurgerBuilder;
