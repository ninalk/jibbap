import React, { useState, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import FeedPage from '../FeedPage/FeedPage';
import FormPage from '../FormPage/FormPage';
import userService from '../../utils/userService';
import * as recipesApi from '../../utils/recipe-api';

function App() {

  const [user, setUser] = useState(userService.getUser()) // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like 
  // this  const token = createJWT(user); // where user was the document we created from mongo
  const [recipes, setRecipes] = useState([]);

  function handleSignUpOrLogin(){
    setUser(userService.getUser()) // getting the user from localstorage decoding the jwt
  }

  function handleLogout(){
    userService.logout();
    setUser({user: null})
  }

  // async function handleRecipeForm(recipe){
  //   console.log('handle recipe form')
  //   try {
  //     const data = await recipesApi.create(recipe)
  //     console.log(data, ' response from the create route')
  //     setRecipes(recipes => [data.recipe, ...recipes])
  //   } catch(err){
  //     console.log(err)
  //   }
  // }

  return (
    <div className="App">
      <Switch>
          <Route exact path="/login">
             <LoginPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/signup">
             <SignupPage handleSignUpOrLogin={handleSignUpOrLogin}/>
          </Route>
          <Route exact path="/new">
             <FormPage />
          </Route>
          {userService.getUser() ? 
            <> 
             <Switch>
                <Route exact path="/">
                    <FeedPage user={user} />
                </Route>
            </Switch>
            </>
            :
            <Redirect to='/login'/>
          }
  
      </Switch>
    </div>
  );
}

export default App;
