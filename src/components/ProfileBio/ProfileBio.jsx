import React from 'react';
import UpdateProfileForm from '../../components/UpdateProfileForm/UpdateProfileForm';
import {  Image, Grid } from 'semantic-ui-react';

export default function ProfileBio({ user, editProfile }) {
    
    return (
        <Grid columns={5} className="centered" >
        <Grid.Row>
            <Grid.Column className="three wide">
            <Image src={`${user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} `} avatar size='medium' />
            </Grid.Column>
            <Grid.Column textAlign="left" style={{ maxWidth: 450 }} className="eight wide">               
                <h2>{user.username}</h2>
                <p>{user.name}</p>
                <span>{user.bio}</span>                
            </Grid.Column>
            <Grid.Column>
                <UpdateProfileForm user={user} editProfile={editProfile} />
            </Grid.Column>
        </Grid.Row>
        </Grid>
  
    );
  }
  
  
