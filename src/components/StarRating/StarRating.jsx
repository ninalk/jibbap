import React from 'react';
import { Rating } from 'semantic-ui-react'

export default function StarRating({ user, recipe, addVote, deleteVote }) {
    // as a user, I want to rate a recipe by number of stars and it should turn black
    // find out if user rated a card

    // const votedIndexNumber = recipe.votes.findIndex(vote => vote.username === user.username);

    // const clickHandler = votedIndexNumber > -1 ? () => deleteVote(recipe.votes[votedIndexNumber]._id) : () => addVote(recipe._id);

    return (
        <Rating maxRating={5} />
    )
}