import tokenService from './tokenService';

// This matches up with the app.use('/api/recipes') in the server.js
// Where all our recipe api routes will live
const BASE_URL = '/api/recipes';

export function create(recipe){
  console.log(recipe, 'in create')
  return fetch(BASE_URL, {
    method: 'POST',
    body: recipe,
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  }).then(res => res.json())
}

export function getAll() {
  return fetch(BASE_URL, {
    headers: {
      'Authorization': 'Bearer ' + tokenService.getToken()
    }
  })
  .then(res => res.json());
}