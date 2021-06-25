import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import styles from '../HomePage.module.css'
import { GlobalActions } from '../../../redux/rootAction'

function HomeHeader(props) {
  const history = useHistory()
  const dispatch = useDispatch()
  let selectedCocktailQuantity = useSelector(state => state.GlobalReducer.selectedCocktail)
  selectedCocktailQuantity = selectedCocktailQuantity.reduce((sum, currValue) => {
    return sum += currValue.quantity
  },0)
  selectedCocktailQuantity = selectedCocktailQuantity ? selectedCocktailQuantity : ''

  const handleLogOut = () => {
    localStorage.clear()
    dispatch(GlobalActions.logOut())
    history.push('/login')
  }

  const handleToCart = () => {
    history.push('/cart');
  }

  return (
    <div className={styles.HomePageTitle}>
      <button onClick={handleLogOut}>Log out</button>
      <h2>List of Cocktail</h2>
      <button onClick={handleToCart}>Cart  {selectedCocktailQuantity}</button>
  </div>
  );
}

export default HomeHeader;