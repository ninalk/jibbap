import tokenService from './tokenService';

const BASE_URL = '/api';

export function create(recipeID){
    return fetch(`${BASE_URL}/recipes/${recipeID}/ingredients`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
}

export function removeIngredient(ingredientID){
    return fetch(`${BASE_URL}/ingredients/${ingredientID}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
}

