import React from 'react';
import StarRating from '../../components/StarRating/StarRating';
import { Card, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export default function RecipeCard({ user, recipe, isProfile, addVote, deleteVote }){
    console.log(recipe, user)


    return (
        <Card key={recipe._id} >
        {isProfile ? '' 
            :        
            <Card.Content textAlign='left'>
                <Image
                    floated='left'
                    size='large'
                    avatar
                    src={recipe.user.photoUrl ? recipe.user.photoUrl : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
                /> 
                <Card.Header floated="right">{recipe.user.username}</Card.Header>
            </Card.Content>            
        }
            <Link to={`/recipes/${recipe._id}`}>
                <Image src={`${recipe.photoUrl}`} wrapped />
            </Link>
            <Card.Content textAlign='center'>
                <Card.Description>
                    {recipe.recipeName}
                <StarRating
                    user={user}
                    recipe={recipe} 
                    addVote={addVote}
                    deleteVote={deleteVote}
                />
                </Card.Description>
            </Card.Content>
            
        </Card>
    )
}