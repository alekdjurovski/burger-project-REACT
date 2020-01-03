import React from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";

const state = {
  ingredients: {
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  }
};

const BurgerBuilder = props => (
  <React.Fragment>
    <Burger ingredients={state.ingredients}></Burger>
    
    <BuildControls />
  </React.Fragment>
);

export default BurgerBuilder;
