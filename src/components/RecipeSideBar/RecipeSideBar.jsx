import React from 'react';
import {  Segment, Button } from 'semantic-ui-react'

export default function RecipeSideBar({recipe, updateRecipe}) {   
    
    return (
        <>
        <Button >Edit Recipe</Button>
        <Segment>
            <p><em>Date Created: {recipe.date}</em></p>
            <p><em>Special Notes: {recipe.description}</em></p>
        </Segment>
        </>
    )
}