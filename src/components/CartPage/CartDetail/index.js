import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { GlobalActions } from '../../../redux/rootAction'
import styles from '../CartPage.module.css'

function CartDetail(props) {
  const selectedCocktail = useSelector(state => state.GlobalReducer.selectedCocktail)
  const dispatch = useDispatch()
  let cartQuantity = selectedCocktail.reduce((sum, currValue) => {
    return sum += currValue.quantity
  },0)
  cartQuantity = cartQuantity ? cartQuantity : ''

  const handleIncreaseQuantity = (drink) => {
    dispatch(GlobalActions.increaseQuantity(drink))
  }

  const handleDecreaseQuantity = (drinkId) => {
    dispatch(GlobalActions.decreaseQuantity(drinkId))
  }

  const handleRemoveDrink = (drink) => {
    dispatch(GlobalActions.removeFromCart(drink))
  }

  const renderSelectedDrinks = (drink, index) => {
    return (
        <div  key={drink.idDrink} 
              className={styles.SelectedItem}>
          <p>{index + 1}</p>
          <p>{drink.strDrink}</p>
          <img  src={drink.strDrinkThumb} 
                alt={drink.strDrink}>
          </img>
          <div className={styles.Quantity}>
            <button value={drink.idDrink} onClick={() => handleDecreaseQuantity(drink.idDrink)}>-</button>
            <p>{drink.quantity}</p>
            <button value={drink.idDrink} onClick={() => handleIncreaseQuantity(drink.idDrink)}>+</button>
          </div>         
          <button value={drink.idDrink}
                  onClick={() => handleRemoveDrink(drink.idDrink)}>
            Remove
          </button>
        </div>
    )
  }

  return (
    <>
    {selectedCocktail.length > 0 ?
      <>
        <div className={styles.Cart}>Cart {cartQuantity} </div>
        <div className={styles.SelectedContainer}>
          {selectedCocktail.map(renderSelectedDrinks)}
        </div>
      </>
      :
      <div className={styles.EmptyCart}>Cart is Empty</div>
    }
    </>
  );
}

export default CartDetail;