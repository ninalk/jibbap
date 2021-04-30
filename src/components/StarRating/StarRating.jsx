import React, { useState, useEffect } from 'react';
import { Rating, Grid } from 'semantic-ui-react'

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

    let ratings = recipe.votes.map(vote => vote.stars)
    let sum = 0
    for (let x in ratings) {
        sum += ratings[x];
    }

    let avgRating = (sum / ratings.length).toFixed(2);
    
    return (
        <>
        <Grid textAlign='center'>
            <Grid.Row >
                <p>{avgRating === 'NaN' ? '' : avgRating} &nbsp;</p>
                <Rating maxRating={5} defaultRating={avgRating} onRate={handleRate} />
                <p>&nbsp;{recipe.votes.length} Votes</p>
            </Grid.Row>
        </Grid>
        </>
    )
}