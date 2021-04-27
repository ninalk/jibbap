import React from 'react';
// import StarRating from '../../components/StarRating/StarRating';
import { Card, Image, Rating } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export default function RecipeCard({ user, recipe, isProfile }){
    console.log(recipe, user)
    let ratings = recipe.votes.map(vote => vote.stars)
    let sum = 0
    for (let x in ratings) {
        sum += ratings[x];
    }

    let avgRating = sum / ratings.length;
    console.log(avgRating)

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
                    <Rating disabled defaultRating={avgRating} maxRating={5}/>
                </Card.Description>
            </Card.Content>
            
        </Card>
    )
}