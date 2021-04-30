import React from 'react';
import UpdateProfileForm from '../../components/UpdateProfileForm/UpdateProfileForm';
import {  Image, Grid, Header } from 'semantic-ui-react';

export default function ProfileBio({ profileUser, editProfile, recipes }) {
    return (
        <Grid columns={6} className="centered" >
        <Grid.Row>
            <Grid.Column className="three wide">
            <Image 
                src={`${profileUser.photoUrl ? profileUser.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} `} 
                avatar 
                size='medium' 
                style={{ maxWidth: 180}}
                centered
                />
            </Grid.Column>
            <Grid.Column textAlign="left" style={{ maxWidth: 280 }} className="eight wide">               
                <Header as='h2'>{profileUser.username}</Header>
                <p><strong>{recipes.length} recipes</strong></p>
                <p className='name-bio'><strong>{profileUser.name}</strong></p>
                <p>{profileUser.bio}</p>                
            </Grid.Column>
            <Grid.Column>
                <UpdateProfileForm editProfile={editProfile} />
            </Grid.Column>
        </Grid.Row>
        </Grid>
  
    );
  }
  
  
