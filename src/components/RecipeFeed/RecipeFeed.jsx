import React from 'react';
import { Card } from 'semantic-ui-react';
import RecipeCard from '../RecipeCard/RecipeCard';

export default function RecipeFeed({ user, recipes }){
    
    return (
        <Card.Group stackable>
           
                {recipes.map((recipe) => {
                return ( 
                        <RecipeCard 
                            user={user}
                            recipe={recipe} 
                            key={recipe._id} 
                        />
                    )
                })}
        </Card.Group>
    )
}