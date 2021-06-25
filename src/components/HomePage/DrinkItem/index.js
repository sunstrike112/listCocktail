import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { GlobalActions } from '../../../redux/slices/globalSlice'
import styles from '../HomePage.module.css'

function DrinkItem(props) {
  const { listCocktail } = props
  const history = useHistory()
  const dispatch = useDispatch()

  const handleAddToCart = (drink) => {
    dispatch(GlobalActions.addToCart(drink))
  }

  const renderDrinkItem = (drink, index) => {
    return (
        <div key={drink.idDrink} className={styles.DrinkItem}>
          <p>{drink.strDrink}</p>
          <img src={drink.strDrinkThumb} alt={drink.strDrink}/>         
          <button value={drink.idDrink} onClick={handleDetailCocktail}>Detail</button>
          <button onClick={() => handleAddToCart(drink)}>Add to Cart</button>
        </div>
    )
  }

  const handleDetailCocktail = (e) => {
    history.push(`/details/${e.target.value}`)
  }

  return (
    <div className={styles.DrinkContainer}>
        {listCocktail.map(renderDrinkItem)}
    </div>
  );
}

export default DrinkItem;