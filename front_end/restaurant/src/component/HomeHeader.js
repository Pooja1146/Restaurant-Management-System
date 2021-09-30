import React from "react";
// import Image from "./med2.jpg";
import {Link} from 'react-router-dom';
import mystore from "../stores/mystore";
import '../App.css';
//import { useSelector } from "react-redux";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import HomeComponent from "./user/HomeComponent";

export default class HomeHeader extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state={
            isadminloggedin: false,
            iswtrloggedin : false,
            isctrloggedin: false
        };
    }

    RenderNavbar = () =>
    {
        //const ismgrlogged = useSelector(state => state.ismgrlogged);
        mystore.subscribe(() =>{this.setState({isadminloggedin: mystore.getState().adminloggedin})});
        mystore.subscribe(() =>{this.setState({iswtrloggedin: mystore.getState().wtrloggedin})});
        mystore.subscribe(() =>{this.setState({isctrloggedin: mystore.getState().ctrloggedin})});

        //console.log(this.state.ismgrloggedin);
        if(this.state.iswtrloggedin)
        {
            return(
                <div >
                <Navbar bg="dark" variant="dark" sticky="top" expand="sm" >
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <nav class="navbar bg-dark justify-content-center navbar-collapse">
                            <Nav>
                                <ol class="navbar-nav" style={{ fontSize: "15px"}}>
                                    <li class="nav-item" style={{ marginLeft: "100px" }}>
                                    <Nav.Link ><Link to="/getAllMenus" class="text-decoration-none text-white">menu</Link></Nav.Link>
                                    </li>
                                    {/* <li class="nav-item" style={{ marginLeft: "100px" }}>
                                        <Nav.Link href="/getAllUsers">Users</Nav.Link>
                                    </li> */}
                                    <li class="nav-item" style={{ marginLeft: "100px" }}>
                                    <Nav.Link ><Link to="/getAllOrders" class="text-decoration-none text-white">orders</Link></Nav.Link>
                                    </li>
                                    <li class="nav-item" style={{ marginLeft: "100px" }}>
                                    <Nav.Link href="/logout" class="text-decoration-none text-white">Logout</Nav.Link>
                                    </li>
                                </ol>
                            </Nav>
                        </nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
    
            )
        }
        else if(this.state.isadminloggedin)
        {
            return(
                <div >
                <Navbar bg="dark" variant="dark" sticky="top" expand="sm" >
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <nav class="navbar bg-dark justify-content-center navbar-collapse">
                            <Nav>
                                <ol class="navbar-nav" style={{ fontSize: "15px"}}>
                                    <li class="nav-item" style={{ marginLeft: "100px" }}>
                                    <Nav.Link ><Link to="/getAllMenus" class="text-decoration-none text-white">menu</Link></Nav.Link>
                                    </li>
                                    <li class="nav-item" style={{ marginLeft: "100px" }}>
                                    <Nav.Link ><Link to="/getAllUsers" class="text-decoration-none text-white">users</Link></Nav.Link>
                                    </li>
                                    <li class="nav-item" style={{ marginLeft: "100px" }}>
                                    <Nav.Link ><Link to="/getAllOrders" class="text-decoration-none text-white">orders</Link></Nav.Link>
                                    </li>
                                    <li class="nav-item" style={{ marginLeft: "100px" }}>
                                    <Nav.Link ><Link to="#"  class="text-decoration-none text-white">Bill</Link></Nav.Link>
                                    </li>
                                    <li class="nav-item" style={{ marginLeft: "100px" }}>
                                    <Nav.Link ><Link to="/getAllTaxes"  class="text-decoration-none text-white">Tax </Link></Nav.Link>
                                    </li>
                                    <li class="nav-item" style={{ marginLeft: "100px" }}>
                                        <NavDropdown title="Revenue">
                                            <NavDropdown.Item href="#"  class="text-decoration-none text-white">Todays Revenue</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="#"  class="text-decoration-none text-white">Total Revenue</NavDropdown.Item>
                                        </NavDropdown>
                                    </li>
                                    {/* <li class="nav-item" style={{ marginLeft: "100px" }}>
                                        <Nav.Link href="#">revenue</Nav.Link>
                                    </li> */}
                                    <li class="nav-item" style={{ marginLeft: "100px" }}>
                                        <Nav.Link href="/logout" class="text-decoration-none text-white">Logout</Nav.Link>
                                    </li>
                                </ol>
                            </Nav>
                        </nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
    
            )
        }
        else if(this.state.isctrloggedin)
        {
            return(
                <div >
                <Navbar bg="dark" variant="dark" sticky="top" expand="sm" >
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <nav class="navbar bg-dark justify-content-center navbar-collapse">
                            <Nav>
                                <ol class="navbar-nav" style={{ fontSize: "15px"}}>
                                    <li class="nav-item" style={{ marginLeft: "100px" }}>
                                    <Nav.Link ><Link to="/getAllMenus" class="text-decoration-none text-white">menu</Link></Nav.Link>
                                    </li>
                                    <li class="nav-item" style={{ marginLeft: "100px" }}>
                                    <Nav.Link ><Link to="/supplierinfo" class="text-decoration-none text-white">Bill</Link></Nav.Link>
                                    </li>
                                    <li class="nav-item" style={{ marginLeft: "100px" }}>
                                    <Nav.Link ><Link to="/getAllTaxes" class="text-decoration-none text-white">Tax</Link></Nav.Link>
                                    </li>
                                    <li class="nav-item" style={{ marginLeft: "100px" }}>
                                    <Nav.Link ><Link to="#" class="text-decoration-none text-white">revenue</Link></Nav.Link>
                                    </li>
                                    <li class="nav-item" style={{ marginLeft: "100px" }}>
                                        <Nav.Link href="/logout">Logout</Nav.Link>
                                    </li>
                                </ol>
                            </Nav>
                        </nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
    
            )
        }
        else
        {
            return(
                <HomeComponent />
            )
        }
       
    }
    
    render()
    {
        const mystyle = {
            color: "yellow",
            backgroundColor: "orange",
            padding: "10px",
            fontFamily: "Georgia",
            textShadow:"5px 2px 2px black",
            fontSize:"60px"
          };
        return(
            <div >
                <center>
                    <h1 style={mystyle}>The Indian Plate</h1>
                </center>
                <this.RenderNavbar/>
            </div>
        )
    }
}

const style = {
    color: 'Yellow',
    margin: '50px',
    Border: "1"
}