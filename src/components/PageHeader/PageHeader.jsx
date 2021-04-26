import React from 'react';
import {Link} from 'react-router-dom';
import { Header, Segment, Image, Icon, Dropdown, Search } from 'semantic-ui-react';


export default function PageHeader({ user, handleLogout }){
    return (
        <Segment clearing>
            <Header as='h4' floated='right'>
                <Image src={user.photoUrl ? user.photoUrl : "https://react.semantic-ui.com/images/wireframe/square-image.png"} avatar></Image>
                <Dropdown floating>
                    <Dropdown.Menu className="left">
                        <Dropdown.Item>
                            <Link to={`/${user.username}`}><Icon className="user circle outline"></Icon>My Profile</Link>          
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to='/new'><Icon className="utensils"></Icon>Create Recipe</Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to='' onClick={handleLogout}><Icon className="lock"></Icon>Logout</Link>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Header>
            <Header as='h3' floated='left'>
                <Link to="/">JIBBAB JOURNEY</Link>
            </Header>
        </Segment>
    )
}