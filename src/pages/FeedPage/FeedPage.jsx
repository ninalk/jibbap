import React, { useState, useEffect } from 'react';
import './FeedPage.css';
import RecipeFeed from '../../components/RecipeFeed/RecipeFeed';
import PageHeader from '../../components/PageHeader/PageHeader';
import * as recipesApi from '../../utils/recipe-api';
// import userService from '../../utils/userService';
import {  Grid } from 'semantic-ui-react'


export default function FeedPage({ user, handleLogout }){
    const [recipes, setRecipes] = useState([]);
    // const [users, setUsers] = useState([]);

    // async function getAllUsers(username){
    //     try {
    //         const data = await userService.getAllProfiles(username);
    //         setUsers([...data.users])
    //     } catch(err){
    //         console.log(err)
    //     }
    // }

    async function getRecipes(){
        try {
            const data = await recipesApi.getAll();
            data.recipes.reverse()
            setRecipes([...data.recipes]);
        } catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        getRecipes();
        // getAllUsers();
    }, []);

    return (
        <Grid centered >
            <Grid.Row>
                <Grid.Column>
                    <PageHeader user={user} handleLogout={handleLogout}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row>
                <Grid.Column  style={{maxWidth: 620}}>
                    <RecipeFeed 
                      recipes={recipes} 
                      user={user}
                      numPhotosCol={1} 
                      isProfile={false}
                    />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}