import React from 'react';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import { GlobalActions } from '../../../redux/rootAction'
import styles from '../CartPage.module.css'

function CartHeader(props) {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleLogOut = () => {
    localStorage.clear()
    dispatch(GlobalActions.logOut())
    history.push('/login')
  }

  const handleBackToList = () => {
    history.push('/')
  }

  return (
    <div className={styles.CartPageTitle}>
      <button onClick={handleLogOut}>Log out</button>
      <h2>Selected Cocktail</h2>
      <button onClick={handleBackToList}>Back</button>
    </div>
  );
}

export default CartHeader;