import React from 'react';
import { Card, Image, Rating, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom';


export default function RecipeCard({ user, recipe, isProfile }){
    let ratings = recipe.votes.map(vote => vote.stars)
    let sum = 0
    for (let x in ratings) {
        sum += ratings[x];
    }

    let avgRating = sum / ratings.length;

    return (
        <Card key={recipe._id} >
        {isProfile ? '' 
            :        
            <Card.Content textAlign='left'>
                <Link to={`/${recipe.user.username}`}>
                    <Image
                        floated='left'
                        size='large'
                        avatar
                        src={recipe.user.photoUrl ? recipe.user.photoUrl : 'https://react.semantic-ui.com/images/wireframe/square-image.png'}
                    /> 
                </Link>
                <Card.Header floated="right">{recipe.user.username}</Card.Header>
            </Card.Content>            
        }
            <Link to={`/recipes/${recipe._id}`}>
                <Image src={`${recipe.photoUrl}`} wrapped style={{ objectFit: 'cover' }} />
            </Link>
            <Card.Content>
                <Grid textAlign='center' verticalAlign='middle'>
                    <Grid.Row columns={2}>
                        <Grid.Column>
                            <strong>{recipe.recipeName}</strong>
                        </Grid.Column>
                        <Grid.Column>
                            <Rating disabled defaultRating={avgRating} maxRating={5} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Card.Content>
            
        </Card>
    )
}