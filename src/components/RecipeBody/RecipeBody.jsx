import React from 'react';
import Ingredients from '../../components/Ingredients/Ingredients'
import Instructions from '../../components/Instructions/Instructions'
import {  Divider, Segment, Header, Grid } from 'semantic-ui-react'

export default function RecipeBody({ recipe }){
    return (
        <>
        <Segment padded>
            <Grid columns={2} textAlign='center'>
                <Grid.Column>
                    <Header><em>Cuisine:  {recipe.cuisine}</em></Header>
                </Grid.Column>
                <Grid.Column>
                    <Header><em>Cook Time:  {recipe.cookTime}</em></Header>
                </Grid.Column>
            </Grid>
            <Ingredients recipe={recipe}/>
            <Divider hidden/>
            <Instructions recipe={recipe}/>           
        </Segment>
        </>
    )
}