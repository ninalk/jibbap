import React from 'react';
import UpdateProfileForm from '../../components/UpdateProfileForm/UpdateProfileForm';
import {  Image, Grid } from 'semantic-ui-react';

export default function ProfileBio({ profileUser, editProfile, recipes, user }) {
    return (
        <Grid columns={5} className="centered" >
        <Grid.Row>
            <Grid.Column className="four wide">
            <Image 
                src={`${profileUser.photoUrl ? profileUser.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} `} 
                avatar 
                size='medium' 
                />
            </Grid.Column>
            <Grid.Column textAlign="left" style={{ maxWidth: 280 }} className="eight wide">               
                <h2>{profileUser.username}</h2>
                <p><strong>{recipes.length} recipes</strong></p>
                <p><strong>{profileUser.name}</strong></p>
                <span>{profileUser.bio}</span>                
            </Grid.Column>
            <Grid.Column>
                <UpdateProfileForm editProfile={editProfile} user={user} profileUser={profileUser}/>
            </Grid.Column>
        </Grid.Row>
        </Grid>
  
    );
  }
  
  
