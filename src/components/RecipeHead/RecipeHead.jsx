import React from 'react';
import {  Header, Image, Rating, Grid } from 'semantic-ui-react'

export default function RecipeHead({recipe}) {

    return (
        <>
        <Header as='h1' textAlign='center'>{recipe.recipeName}</Header>            
        <span><Rating maxRating={5} clearable size='large'/></span>
        <Image src={recipe.photoUrl} size='big'/>    
        </>
    )
}