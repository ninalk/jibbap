import React from 'react';
import {  Segment, Button } from 'semantic-ui-react'

export default function RecipeSideBar({recipe, updateRecipe}) {   
    return (
        <>
        <Button >Edit Recipe</Button>
        <Segment>
            <p><em>Date Created:</em> </p>
            <p><em>Special Notes:</em> {recipe.description}</p>
        </Segment>
        </>
    )
}