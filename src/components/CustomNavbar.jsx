import { useState } from "react";
import React, { Component }  from 'react';
import { NavLink as ReactLink } from "react-router-dom";
//import {Draggable} from "react-draggable";
import {  Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    } from "reactstrap";

    /*class DraggableNavbar extends Navbar {
      render() {
        return <Draggable handle=".modal-title"><Navbar {...this.props} ></Navbar></Draggable>
      }
    }*/

const CustomNavBar =()=>{
  const [isOpen,setIsOpen]=useState(false)
    return(
        <div>
      <Navbar 
            color="dark"
            dark
            expand="md"
            fixed=""
        
            >
        <NavbarBrand tag={ReactLink} to ="/">
          <img
              src="/Bank-Logo.png"
              width="150"
              className="d-inline-block align-top"
              alt="Citizens logo"
            />
          </NavbarBrand>
        <NavbarToggler onClick={()=>setIsOpen(!isOpen)}
            
        />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to ="/about"> About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to ="/login">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to ="/signup">Signup</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem tag={ReactLink} to ="/services">
                  Services
                </DropdownItem>
                <DropdownItem tag={ReactLink} to ="/board">
                  Board
                </DropdownItem>
                <DropdownItem  tag={ReactLink} to ="/ekyc">
                  eKYC
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Contact Us
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          
        </Collapse>
      </Navbar>
      <Navbar 
              color="dark"
              dark
              expand="md"
              fixed="bottom"        
              >
          <NavbarBrand tag={ReactLink} to ="/">
          <img
                src="/Citizens-Bank-Logo.png"
                width="150"
                className="d-inline-block align-top"
                alt="Citizens logo"
              />
            </NavbarBrand>
          <NavbarToggler onClick={()=>setIsOpen(!isOpen)}
              
          />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink tag={ReactLink} to ="/personal"> Personal
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to ="/smallbusiness">Small Business</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to ="/corporate">Corporate</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to ="/financialeducation">Financial Education</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={ReactLink} to ="/aboutus">About Us</NavLink>
              </NavItem>
            </Nav>
            
          </Collapse>
        </Navbar>
    </div>

    );
};

export default CustomNavBar;