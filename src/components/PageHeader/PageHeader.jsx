import React from 'react';
import {Link} from 'react-router-dom';
import { Header, Segment, Image, Icon, Dropdown } from 'semantic-ui-react';


export default function PageHeader({ user, handleLogout }){
    return (
        <Segment clearing className="nav-bar">
            <Header as='h3' floated='right' className='dropdown-menu'>
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
            <Header as='h3' textAlign='left' className='logo' >
                <Link to="/">JIBBAB JOURNEY</Link>
            </Header>
            <Header as='h3' floated='left' className='logo'>
            </Header>
        </Segment>
    )
}