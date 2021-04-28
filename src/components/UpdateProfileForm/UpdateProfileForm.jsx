import React, { useState } from 'react';
import { Button, Form, Segment, Container } from 'semantic-ui-react'


export default function UpdateProfileForm({ editProfile }) {
    const [state, setState] = useState({
        name: '',
        username: '',
        bio: ''
    });
    const [showForm, setShowForm] = useState(false);

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
        setShowForm(false)
    }
    
    function handleEditClick() {
        setShowForm(true);
    }

    function handleCancelClick(){
        setShowForm(false)
    }
    
    return (
        <>
            <Button onClick={handleEditClick} floated='right'>Edit Profile</Button>

            {showForm ?            
                    <Form autoComplete="off" onSubmit={handleSubmit} style={{display: 'contents'}}>
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
                                type="submit"
                                className="btn"
                                onClick={handleCancelClick}
                            >
                                Cancel
                            </Button>
                        </Segment>
                    </Form>
                    :
                    <Form autoComplete="off" onSubmit={handleSubmit} style={{display: 'none'}}>
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
                                type="submit"
                                className="btn"
                                onClick={handleCancelClick}
                            >
                                Cancel
                            </Button>
                        </Segment>
                    </Form>
            }
        </>
    )
}