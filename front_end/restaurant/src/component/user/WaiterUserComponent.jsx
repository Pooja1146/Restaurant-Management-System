import React from 'react';
import {Link} from 'react-router-dom';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
//import 'bootstrap/dist/css/bootstrap.css';

export default class WaiterUserComponent extends React.Component
{
    render(){
        return(
            <div >
            <Navbar bg="dark" variant="dark" sticky="top" expand="sm" >
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <nav class="navbar bg-dark justify-content-center navbar-collapse">
                        <Nav>
                            <ol class="navbar-nav" style={{ fontSize: "15px"}}>
                                <li class="nav-item" style={{ marginLeft: "100px" }}>
                                    <Nav.Link href="#">Menu</Nav.Link>
                                </li>
                                {/* <li class="nav-item" style={{ marginLeft: "100px" }}>
                                    <Nav.Link href="/getAllUsers">Users</Nav.Link>
                                </li> */}
                                <li class="nav-item" style={{ marginLeft: "100px" }}>
                                    <Nav.Link href="#">Orders</Nav.Link>
                                </li>
                                {/* <li class="nav-item" style={{ marginLeft: "100px" }}>
                                <Nav.Link ><Link to="/supplierinfo">Bill</Link></Nav.Link>
                                </li> */}
                                {/* <li class="nav-item" style={{ marginLeft: "100px" }}>
                                <Nav.Link ><Link to="/supplierinfo">Tax & offers</Link></Nav.Link>
                                </li> */}
                                {/* <li class="nav-item" style={{ marginLeft: "100px" }}>
                                    <NavDropdown title="Sale">
                                        <NavDropdown.Item href="#">Employee Sale Report</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item href="#">Total Sale Report</NavDropdown.Item>
                                    </NavDropdown>
                                </li> */}
                                {/* <li class="nav-item" style={{ marginLeft: "100px" }}>
                                    <Nav.Link href="#">revenue</Nav.Link>
                                </li> */}
                                <li class="nav-item" style={{ marginLeft: "100px" }}>
                                    <Nav.Link href="/">Logout</Nav.Link>
                                </li>
                            </ol>
                        </Nav>
                    </nav>
                </Navbar.Collapse>
            </Navbar>
        </div>

        )
    }
}
