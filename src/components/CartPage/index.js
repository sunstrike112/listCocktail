import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { GlobalActions } from '../../redux/slices/globalSlice';
import CartDetail from './CartDetail'
import CartHeader from './CartHeader';
import styles from './CartPage.module.css'

function CartPage(props) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GlobalActions.toggleLoading())
    setTimeout(() => {
      dispatch(GlobalActions.toggleLoading())
    },2000)
  }, [])

  return (
    <>
      <div className={styles.CartPage}>
        <CartHeader/>
        <CartDetail/>
      </div>
    </>
  );
}

export default CartPage;