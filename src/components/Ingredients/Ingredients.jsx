import React from 'react';
import { Checkbox, Header, List } from 'semantic-ui-react'

export default function Ingredients({recipe}){

    return (
        <>
        <Header as='h3'>INGREDIENTS</Header>
            
            {recipe.ingredients[0].split(', ').map((ingredient, index) => {
                return (
                    <List key={index}>
                        <List.Item key={ingredient.id}>
                            <Checkbox label={ingredient} />
                        </List.Item>
                    </List>
                )
            })}
        </>
    )
}