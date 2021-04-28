import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'


export default function UpdateProfileForm({ user, editProfile }) {
    const [state, setState] = useState({
        name: '',
        username: '',
        bio: ''
    });

    function handleChange(e){
        setState({
          ...state,
          [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log('is handlesUbmit being called?')
        const formData = new FormData();

        for (let key in state){
            formData.append(key, state[key])
        }
        editProfile(state)
    }

        

    return (
        <Form autoComplete="off" onSubmit={handleSubmit}>
            <Segment textAlign='center'>
                <Form.Input     
                    name="name"
                    type="name"
                    placeholder="name"
                    value={state.name}
                    onChange={handleChange}
                    required
                />
                <Form.Input     
                    name="username"
                    type="username"
                    placeholder="username"
                    value={state.username}
                    onChange={handleChange}
                    required
                />
                <Form.Input     
                    name="bio"
                    type="bio"
                    placeholder="bio"
                    value={state.bio}
                    onChange={handleChange}
                    required
                />
                <Button
                    type="submit"
                    className="btn"
                >
                    Edit Profile
                </Button>
            </Segment>
        </Form>
    )
}