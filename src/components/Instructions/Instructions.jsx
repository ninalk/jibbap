import React from 'react';
import { Checkbox, Header, List } from 'semantic-ui-react'

export default function Instructions({recipe}){

    return (
        <>
        <Header as='h3'>INSTRUCTIONS</Header>
            
            {recipe.instructions[0].split('. ').map(instruction => {
                return (
                    <List as='ul'>
                        <List.Item as='li'>
                            {instruction}
                        </List.Item>
                    </List>
                ) 
            })}
        </>
    )
}