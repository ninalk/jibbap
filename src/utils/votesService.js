import tokenService from './tokenService';

const BASE_URL = '/api';

export function create(recipeID, vote){
    return fetch(`${BASE_URL}/recipes/recipes/${recipeID}/votes`, {
        method: 'POST',
        body: JSON.stringify(vote),
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken(),
            'Content-Type': 'application/json'
        }
    }).then(res => res.json());
}

// export function removeVote(voteID){
//     return fetch(`${BASE_URL}/votes/${voteID}`, {
//         method: 'DELETE',
//         headers: {
//             'Authorization': 'Bearer ' + tokenService.getToken()
//           }
//     }).then(res => res.json())
// }