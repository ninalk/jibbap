import React, { useState, useEffect } from 'react';
import { Rating } from 'semantic-ui-react'

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
        <Rating maxRating={5} onRate={handleRate} />
    )
}