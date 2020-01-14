import React from 'react';
import Aux from '../../../hoc/Auxilary/Auxilary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const ingreduentSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {props.ingredients[igKey]}
      </li>
    );
  })
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with following ingredients: </p>
      <ul>
        {ingreduentSummary}
      </ul>
      <p><strong>Total Price: </strong>{props.price.toFixed(2)}</p>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled} >CANCEL</Button>
      <Button btnType="Success" clicked={props.purchaseContinued} >CONTINUE</Button>
    </Aux>
  );
}

export default orderSummary;