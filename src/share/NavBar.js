import { useAuth0 } from '@auth0/auth0-react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const { loginWithRedirect, isAuthenticated,user } = useAuth0();
    const { logout } = useAuth0();

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Link to="/">React-Bootstrap</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/">Home</Link>
                        <Link to="/user">Link</Link>
                        <Link to="/count">User</Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">

                            </NavDropdown.Item>
                        </NavDropdown>

                    </Nav>
                    {
                        isAuthenticated && <p>
                            {user.name}
                        </p>
                    }
                    {isAuthenticated ? (
                        <Button onClick={() => logout({ returnTo: window.location.origin })}>
                            Log Out
                        </Button>
                    ) :
                        <Button variant="primary" onClick={() => loginWithRedirect()}>Login</Button>
                    }


                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
};

export default NavBar;