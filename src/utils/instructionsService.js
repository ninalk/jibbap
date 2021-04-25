import tokenService from './tokenService';

const BASE_URL = '/api';

export function create(recipeID){
    return fetch(`${BASE_URL}/recipes/${recipeID}/instructions`, {
        method: 'POST',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
}

export function removeInstruction(instructionID){
    return fetch(`${BASE_URL}/instructions/${instructionID}`, {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json());
}