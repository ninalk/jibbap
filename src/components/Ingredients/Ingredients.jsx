import React from 'react';
import { Checkbox, Header, List } from 'semantic-ui-react'

export default function Ingredients({recipe}){

    return (
        <>
        <Header as='h3'>INGREDIENTS</Header>
            
            {recipe.ingredients[0].split(', ').map(ingredient => {
                return (
                    <List>
                        <List.Item>
                            <Checkbox label={ingredient} />
                        </List.Item>
                    </List>
                )
            })}
        </>
    )
}