import React, { useState, useEffect } from 'react';
import './RecipePage.css';
import PageHeader from '../../components/PageHeader/PageHeader';
import RecipeBody from '../../components/RecipeBody/RecipeBody';
import RecipeHead from '../../components/RecipeHead/RecipeHead';
import RecipeSideBar from '../../components/RecipeSideBar/RecipeSideBar';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import * as recipesApi from '../../utils/recipe-api';
import { useLocation } from 'react-router-dom';
import {  Grid, Loader, Segment } from 'semantic-ui-react'


export default function RecipePage({ user, handleLogout }){
    const [recipe, setRecipe] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    const location = useLocation();

    async function getOneRecipe() {
      try {
        const recipeId = location.pathname.substring(1);
        const data = await recipesApi.getRecipe(recipeId);
        setLoading(() => false);
        setRecipe(() => data.recipe);
      } catch(err){
        setError(err)
      }
    }

    useEffect(() => {
      getOneRecipe();
    }, []);

    return (
        <>
            { loading ?
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >                
                    <Grid.Column style={{ maxWidth: 450}}>                            
                        <Loader size='large' active>Loading</Loader>                         
                    </Grid.Column>                 
                </Grid>
                :
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <PageHeader user={user} handleLogout={handleLogout}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Grid.Column style={{ maxWidth: 620}} className="ten wide" >
                            <RecipeHead recipe={recipe} />              
                            <RecipeBody recipe={recipe} />
                        </Grid.Column>
                        <Grid.Column style={{ maxWidth: 280}} className="six wide notes">
                            <RecipeSideBar recipe={recipe} />
                        </Grid.Column>
                    </Grid.Row>
                    {error ? <ErrorMessage error={error} /> : null}
                </Grid>
            }
        </>
    )
}