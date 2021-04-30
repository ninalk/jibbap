import React, { useState } from 'react';
import './LoginPage.css';
import loginpage from '../../images/kimbap.png';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'
import userService from '../../utils/userService';
import { useHistory, Link } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment, Image } from 'semantic-ui-react';


export default function LoginPage(props){
    const history = useHistory();
    // const [invalidForm, setInvalidForm] = useState(false);
    const [error, setError] = useState('');
    const [state, setState] = useState({
        email: '',
        password: ''
    });

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    async function handleSubmit(e){
        e.preventDefault();

        try {
            await userService.login(state);
            props.handleSignUpOrLogin();
            history.push('/');
        } catch(err){
            setError(err.message)
        }
    }

    return (
        <>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Image 
                    style={{ maxWidth: 300 }}
                    src={loginpage} 
                    className="six wide column image signup-image"
                    verticalAlign='middle'
                />
                <Form  autoComplete="off"  onSubmit={handleSubmit} style={{ maxWidth: 400 }} className="six wide column">
                    <Header as='h2' textAlign='center' className="signup-logo">
                    JIBBAP JOURNEY
                    </Header>
                    <Segment stacked>
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
                    <Button
                        color='teal'
                        fluid size='large'
                        type="submit"
                        className="btn"
                        // disabled={invalidForm}
                    >
                        Login
                    </Button>
                    <Message>
                        New to us? <Link to='/signup'>&nbsp;Sign Up</Link>
                    </Message>
                    </Segment>
                </Form>
                {error ? <ErrorMessage error={error} /> : null}
            </Grid>
      </>
    );
}

