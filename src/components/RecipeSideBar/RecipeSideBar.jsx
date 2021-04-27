import React from 'react';
import {  Segment } from 'semantic-ui-react'

export default function RecipeSideBar({recipe}) {

    return (
        <Segment>
            <p><em>Date Created:</em> </p>
            <p><em>Special Notes:</em> {recipe.description}</p>
        </Segment>
    )
}