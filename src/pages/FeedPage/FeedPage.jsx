import React, { useState, useEffect } from 'react';
import RecipeFeed from '../../components/RecipeFeed/RecipeFeed';
import PageHeader from '../../components/PageHeader/PageHeader';
import * as recipesApi from '../../utils/recipe-api';
import {  Grid } from 'semantic-ui-react'


export default function FeedPage({ user }){
    // console.log(recipes, ' recippess')

    // const [recipes, setRecipes] = useState([]);


    return (
        <Grid centered >
            <Grid.Row>
                <Grid.Column>
                    <PageHeader />
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column style={{maxWidth: 450}}>
                    <RecipeFeed  />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}