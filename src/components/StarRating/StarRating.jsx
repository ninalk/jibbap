import React, { useState, useEffect } from 'react';
import { Rating, Header, Grid } from 'semantic-ui-react'

export default function StarRating({ user, recipe, addVote }) {
    const [state, setState] = useState({
        stars: 0
    })

    function handleRate(e, {rating}) {
        setState({
            stars: rating
        });
    }


    useEffect(() => {
        addVote(state)
    }, [state])

    return (
        <>
        <Grid textAlign='center'>
            <Grid.Row >
                <Rating maxRating={5}  onRate={handleRate} />
                <p>&nbsp;{recipe.votes.length} Votes</p>
            </Grid.Row>
        </Grid>
        </>
    )
}