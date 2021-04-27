import React, { useState, useEffect } from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import * as recipesApi from '../../utils/recipe-api';
import { useLocation } from 'react-router-dom';
import {  Grid } from 'semantic-ui-react'


export default function RecipePage({ user, handleLogout }){
    const [recipe, setRecipe] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    const location = useLocation();
    console.log(location, 'location')


    async function getOneRecipe(){
      try {
        const recipeId = location.pathname.substring(1);
        const data = await recipesApi.getRecipe(recipeId);
        setLoading(() => false);
        setRecipe(() => [...data.recipe]);
      } catch(err){
        console.log(err)
        setError(err)
      }
    }

    useEffect(() => {
      getOneRecipe();
    }, []);
    console.log(recipe)

    return (
        <h2>RECIPE PAGE!</h2>
    )
}