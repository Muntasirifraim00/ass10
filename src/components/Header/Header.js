import React from "react";
import { Container, Nav, Navbar, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import '../Header/Header.css'
import useAuth from './../../hooks/useAuth';



const Header = () => {

  // const { user, logOut } = useAuth();

  return (
    <div>



      <div className="header">
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Health Website</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mx-auto">
                <Stack direction="horizontal" gap={5}>
                  <NavLink to="/home" > Home </NavLink>
                  <NavLink to="/about"> About us </NavLink>
                  {/* <NavLink to="/workouts" > Workouts  </NavLink> */}
                  <NavLink to="/nothing">Nothing </NavLink>
                  <NavLink to="/Topyogatrainer">Top Yoga Trainer</NavLink>
                  <NavLink to="/login">Login</NavLink>
                  {/* <NavLink to="/register">register</NavLink> */}
                  {/* {user.email && <span style={{ color: 'white' }}>Hello {user.displayName} </span>}
                {
                    user.email ?
                        <button onClick={logOut}>log out</button>
                        :
                        <NavLink to="/login">Login</NavLink>} */}
                </Stack>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* <div className="header">
        <h2 className="h2-design">Full Body Workouts That Leave You Energized</h2>
        <h1 className="">GO BEYOND YOUR LIMITS</h1>
      </div> */}



    </div>
  );
};

export default Header;
