import React, { useState, useEffect } from 'react';
import './FeedPage.css';
import RecipeFeed from '../../components/RecipeFeed/RecipeFeed';
import PageHeader from '../../components/PageHeader/PageHeader';
import * as recipesApi from '../../utils/recipe-api';
import {  Grid } from 'semantic-ui-react'


export default function FeedPage({ user, handleLogout }){
    const [recipes, setRecipes] = useState([]);

    async function getRecipes(){
        try {
            const data = await recipesApi.getAll();
            setRecipes([...data.recipes]);
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getRecipes();
    }, []);

    return (
        <Grid centered >
            <Grid.Row>
                <Grid.Column>
                    <PageHeader user={user} handleLogout={handleLogout}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column  style={{maxWidth: 640}}>
                    <RecipeFeed 
                      recipes={recipes} 
                      user={user}
                      numPhotosCol={1} 
                      isProfile={false}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}