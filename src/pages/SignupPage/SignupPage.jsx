import React, { useState } from 'react';
import './SignupPage.css';
import japchae from '../../images/japchae.jpeg';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Button, Grid, Form, Segment, Header, Image } from 'semantic-ui-react';
import userService from '../../utils/userService';
import { useHistory } from 'react-router-dom';


export default function SignUpPage(props){
    const history = useHistory();
    // const [invalidForm, setValidForm] = useState(false)
    const [error, setError] = useState('')
    const [state, setState] = useState({
        name: '',
        username: '',
        email: '',
        password: '',
        passwordConf: '',
        bio: ''
    });
    const [selectedFile, setSelectedFile] = useState('');

    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e){
        e.preventDefault();

        const formData = new FormData();
        formData.append('photo', selectedFile);

        for (let fieldName in state){
            formData.append(fieldName, state[fieldName]);
        }

        try {
            await userService.signup(formData);
            props.handleSignUpOrLogin();
            history.push('/');
        } catch(err){
            setError(err.message);
        }
    }

    function handleFileInput(e){
        setSelectedFile(e.target.files[0])
    }
    
    return (     
        <>
        <Segment>

            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Image 
                    style={{ maxWidth: 400 }}
                    src={japchae} 
                    className="six wide column image signup-image"
                    verticalAlign='middle'
                />
                <Form 
                    style={{ maxWidth: 400 }}                    
                    autoComplete="off"
                    className="six wide column"  
                    onSubmit={handleSubmit}>
                <Header 
                    as='h1'
                    className="signup-logo" 
                    >                                     
                    JIBBAB JOURNEY
                </Header>
                <div 
                    size='small'
                    className="signup" 
                    >                                     
                    Share recipes with your friends!
                </div>
                <Segment>               
                    <Form.Input                    
                        name="name"
                        placeholder="name"
                        value={state.name}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input                    
                        name="username"
                        placeholder="username"
                        value={state.username}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input
                        type="email"                  
                        name="email"
                        placeholder="email"
                        value={ state.email}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input             
                        name="password"
                        type="password"
                        placeholder="password"
                        value={ state.password}
                        onChange={handleChange}
                        required
                    />
                    <Form.Input     
                        name="passwordConf"
                        type="password"
                        placeholder="Confirm Password"
                        value={ state.passwordConf}
                        onChange={handleChange}
                        required
                    />
                    <Form.TextArea 
                        label='bio' 
                        placeholder='Tell us your story...' 
                        name='bio'
                        onChange={handleChange}
                    />
                    <Form.Field> 
                        <Form.Input
                            type="file"
                            name="photo"
                            placeholder="upload image"
                            onChange={handleFileInput}
                        />      
                    </Form.Field>
                    <Button
                        color="teal"
                        type="submit"
                        className="btn"
                    //   disabled={invalidForm}
                    >
                    Signup
                    </Button>
                    </Segment>
                    {error ? <ErrorMessage error={error} /> : null}
                </Form>               
            </Grid>
        </Segment>
        </>       
      );   
    
}
