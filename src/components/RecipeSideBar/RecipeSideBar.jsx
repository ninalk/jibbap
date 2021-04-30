import React from 'react';
import EditRecipeButton from '../../components/EditRecipeButton/EditRecipeButton';
import RemoveRecipeButton from '../../components/RemoveRecipeButton/RemoveRecipeButton';
import { Segment } from 'semantic-ui-react';

export default function RecipeSideBar({user, recipe, updateRecipe, removeRecipe}) {   
    
    return (
        <>
        <Segment>
            <p><em>Date created: {recipe.date}</em></p>
            <p><em>Special notes: {recipe.description}</em></p>
        </Segment>

        { recipe.user === user._id ?
          <>
          <EditRecipeButton updateRecipe={updateRecipe} recipe={recipe} />
          <RemoveRecipeButton removeRecipe={removeRecipe} recipe={recipe}/>
            </>
            : ''
        }
        </>
    )
}