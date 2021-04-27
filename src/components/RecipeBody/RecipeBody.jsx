import React from 'react';
import Ingredients from '../../components/Ingredients/Ingredients'
import Instructions from '../../components/Instructions/Instructions'
import {  Divider, Segment } from 'semantic-ui-react'

export default function RecipeBody({ recipe }){

    return (
        <>
        <Segment padded>
            <Ingredients recipe={recipe}/>
            <Divider hidden/>
            <Instructions recipe={recipe}/>           
        </Segment>
        </>
    )
}