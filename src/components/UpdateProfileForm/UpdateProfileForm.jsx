import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'


export default function UpdateProfileForm({ editProfile }) {
    const [state, setState] = useState({
        name: '',
        username: '',
        bio: ''
    });
    const [showForm, setShowForm] = useState('none');

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
        setShowForm('none')
        editProfile(state)
    }
    
    function handleEditClick() {
        setShowForm('contents');
    }

    function handleCancelClick(){
        setShowForm('none')
    }
    
    return (
        <>
            <Button onClick={handleEditClick} floated='right'>Edit Profile</Button>
            <Form autoComplete="off" onSubmit={handleSubmit} style={{display: showForm}}>
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
                    <Form.TextArea     
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
                        Submit
                    </Button>
                    <Button
                        type="button"
                        className="btn"
                        onClick={handleCancelClick}
                    >
                        Cancel
                    </Button>
                </Segment>
            </Form>
        </>
    )
}