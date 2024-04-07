import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { GlobalActions } from '../../redux/slices/globalSlice';
import styles from './HomePage.module.css'
import HomeHeader from './HomeHeader';
import SearchBar from './SearchBar';
import DrinkItem from './DrinkItem';


import axios from 'axios'
import _ from 'lodash';

function HomePage(props) {
  const listCocktailAPI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
  const [listCocktail, setListCocktail] = useState([])
  const searchInput =  useSelector(state => state.GlobalReducer.searchInput)
  const dispatch = useDispatch()

  useEffect(() => {
    getListCocktail(searchInput)
  }, [])
  
  const handleSearchInput = useCallback(_.debounce((input) => {
    getListCocktail(input)
    dispatch(GlobalActions.saveSearchInput(input))
  },500), [])

  const getListCocktail = (input) => {
    dispatch(GlobalActions.toggleLoading())
    axios.get(`${listCocktailAPI}${input}`)
      .then(reponse => {
        setListCocktail(reponse.data.drinks)
        dispatch(GlobalActions.toggleLoading())
      })
      .catch(() => {
        alert(`Request to API failed, Please try again !!!`)
        dispatch(GlobalActions.toggleLoading())
      })
  }

  return (
    <div className={styles.HomePage}>
      <HomeHeader/>
      <SearchBar searchInput={searchInput} onSearch={handleSearchInput}/>
      {listCocktail ?
      <DrinkItem listCocktail={listCocktail}/>
      :
      <div className={styles.Warning}>No results found</div>
      }
    </div>
  );
}

export default HomePage;