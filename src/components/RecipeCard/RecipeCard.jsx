import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'


export default function RecipeCard({ user, recipe, isProfile }){
    console.log(recipe, user)
    return (
        <Card key={recipe._id} style={{width: '600px' }}>
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
            <Image src={`${recipe.photoUrl}`} wrapped ui={false} />
            <Card.Content textAlign='center'>
                <Card.Description>
                    {recipe.recipeName}
                </Card.Description>
            </Card.Content>
            
        </Card>
    )
}