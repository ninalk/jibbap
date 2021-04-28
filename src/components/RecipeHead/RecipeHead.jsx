import React from 'react';
import StarRating from '../../components/StarRating/StarRating';
import {  Header, Image } from 'semantic-ui-react'

export default function RecipeHead({ user, recipe, addVote }) {

    return (
        <>
        <Header as='h1' textAlign='center'>{recipe.recipeName}</Header>            
        <StarRating recipe={recipe} user={user} addVote={addVote} />
        <Image src={recipe.photoUrl} size='big'/>    
        </>
    )
}