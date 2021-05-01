import React from 'react';
import UpdateProfileForm from '../../components/UpdateProfileForm/UpdateProfileForm';
import {  Image, Grid, Header } from 'semantic-ui-react';

export default function ProfileBio({ profileUser, editProfile, recipes, user }) {
    return (
        <Grid columns={6} className="centered" >
            <Grid.Column className="three wide">
                <Image 
                    src={`${profileUser.photoUrl ? profileUser.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} `} 
                    avatar 
                    size='medium' 
                    centered
                    />
            </Grid.Column>
            <Grid.Column textAlign="left" style={{ maxWidth: 300 }} className="eight wide">               
                <Header as='h2'>{profileUser.username}</Header>
                <p><strong>{recipes.length} recipes</strong></p>
                <p className='name-bio'><strong>{profileUser.name}</strong></p>
                <p>{profileUser.bio}</p>                
            </Grid.Column>

            { user._id === profileUser._id ?
                <Grid.Column>
                    <UpdateProfileForm editProfile={editProfile} />
                </Grid.Column>
                : ''
            }
        </Grid>
    );
  }
  
  
