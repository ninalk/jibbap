import React from 'react';
import { Card } from 'semantic-ui-react';
import RecipeCard from '../RecipeCard/RecipeCard';

export default function RecipeFeed({ user, recipes, numPhotosCol, isProfile, addVote, deleteVote }){
    
    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable >
           
                {recipes.map((recipe) => {
                return ( 
                        <RecipeCard 
                            user={user}
                            recipe={recipe} 
                            key={recipe._id}
                            isProfile={isProfile} 
                            addVote={addVote}
                            deleteVote={deleteVote}
                        />
                    )
                })}
        </Card.Group>
    )
}