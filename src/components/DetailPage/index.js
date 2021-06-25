import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';

import styles from './DetailPage.module.css'
import { GlobalActions } from '../../redux/slices/globalSlice';

import axios from 'axios'

function DetailPage(props) {
  let { idDrink } = useParams()
  const history = useHistory()
  const dispatch = useDispatch()
  const [detailCocktail, setDetailCocktail] = useState('');
  const detailCocktailAPI = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

  useEffect(() => {
    dispatch(GlobalActions.toggleLoading())
    axios.get(`${detailCocktailAPI}${idDrink}`)
      .then(reponse => {
        setDetailCocktail(reponse.data.drinks)
        setTimeout(() => {
          dispatch(GlobalActions.toggleLoading())
        },2000)
      })
      .catch(() => {
        alert(`Request to API failed, Please try again !!!`)
        dispatch(GlobalActions.toggleLoading())
      })
  },[idDrink])

  const handleBackHome = () => {
    history.push('/')
  }

  const handleLogOut = () => {
    localStorage.clear()
    dispatch(GlobalActions.logOut())
    history.push('/login')
  }
  
  return (
    <div>
      {
      detailCocktail &&
        <div className={styles.DetailPage}>
          <div className={styles.DetailPageTitle}>
            <button onClick={handleLogOut}>Log out</button>
            <h2>Detail Cocktail</h2>
            <button onClick={handleBackHome}>Back</button>
          </div>
          <div className={styles.DetailDrink}>
            <div>
              <p> {detailCocktail[0].strDrink}</p>
              <p> ID : {idDrink}<br/>
                  Category : {detailCocktail[0].strCategory}<br/>
                  Glass : {detailCocktail[0].strGlass}<br/>
                  Alcoholic : {detailCocktail[0].strAlcoholic}<br/>
                  Description : {detailCocktail[0].strInstructions}                  
              </p>
            </div>
            <img  src={detailCocktail[0].strDrinkThumb}
                  alt={detailCocktail[0].strDrink}></img>
          </div>
        </div>
      }
    </div>
  );
}

export default DetailPage;