import React from 'react';
import { Header, List } from 'semantic-ui-react'

export default function Instructions({recipe}){
    return (
        <>
        <Header as='h3'>INSTRUCTIONS</Header>
            
            {recipe.instructions[0].split('. ').map((instruction, index) => {
                return (
                    <List as='ul' key={index}>
                        <List.Item as='li' key={instruction.id}>
                            {instruction}
                        </List.Item>
                    </List>
                ) 
            })}
        </>
    )
}