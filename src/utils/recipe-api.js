import tokenService from './tokenService';

// This matches up with the app.use('/api/recipes') in the server.js
// Where all our recipe api routes will live
const BASE_URL = '/api/recipes/';

export function create(recipe){
    console.log(recipe, 'in create')
    return fetch(BASE_URL + 'new', {
        method: 'POST',
        body: recipe,
        headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }).then(res => res.json())
}

export function getAll() {
    console.log('hitting getAll')
    return fetch(BASE_URL, {
        headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
        }
    })
    .then(res => res.json());
}

export function getRecipe(recipeId){
    return fetch(BASE_URL + `${recipeId}`, {
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()
      }
    }).then(res => {
      if(res.ok) return res.json();
      throw new Error('Bad Credentials')
    })
  }

  export function editRecipe(recipeId, recipe){
    console.log(recipe, 'in edit')
    return fetch(BASE_URL + `${recipeId}`, {
        method: 'PUT',
        body: JSON.stringify(recipe),
        headers: {
        'Authorization': 'Bearer ' + tokenService.getToken(),
        'Content-Type': 'application/json'
        }
    }).then(res => res.json())
  }