import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import { Grid, Loader, Divider } from 'semantic-ui-react'
import userService from '../../utils/userService';
import ProfileBio from '../../components/ProfileBio/ProfileBio';
import RecipeFeed from '../../components/RecipeFeed/RecipeFeed';
import PageHeader from '../../components/PageHeader/PageHeader';
import { useLocation } from 'react-router-dom';

export default function ProfilePage({ user, handleLogout }) {
    const [recipes, setRecipes] = useState([]);
    const [profileUser, setProfileUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const location = useLocation();

    async function getProfile(){
        try {
            const username = location.pathname.substring(1);
            const data = await userService.getProfile(username);
            setLoading(() => false);
            setRecipes(() => [...data.recipes]);
            setProfileUser(() => data.user);
        } catch(err) {
            setError(err)
        }
    }

    async function editProfile(state){
        try {
            const data = await userService.updateProfile(state);
        } catch(err){
            setError(err)
        }
    }

    useEffect(() => {
        getProfile();
    }, [])

    return (
        <>
            { loading ?
                <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle' >                
                    <Grid.Column style={{ maxWidth: 450}}>                            
                        <Loader size='large' active>Loading</Loader>                         
                    </Grid.Column>                 
                </Grid>
                :
                <Grid>
                    <Grid.Row>
                        <Grid.Column>
                            <PageHeader user={user} handleLogout={handleLogout}/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <ProfileBio 
                                user={profileUser} 
                                editProfile={editProfile} 
                                recipes={recipes}
                            />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Grid.Column  className="twelve wide">
                            <Divider></Divider>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row centered>
                        <Grid.Column style={{maxWidth: 900}}>
                            <RecipeFeed 
                                isProfile={true} 
                                recipes={recipes} 
                                numPhotosCol={3} 
                                user={user}                        
                            />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            }
        </>
    )


}