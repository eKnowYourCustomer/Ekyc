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

const CustomNavBar =(props)=>{
  
  const [fixedState, setFixedState]=useState({fixed: 'top', x: 0, y: 0})

  const dragStart = e => {
    console.log("I am in dragStart");
    const target = e.target
    handleMouseMove(e);
  }

const dragOver = e => {
    console.log("I am in dragOver");
    handleMouseMove(e);
    e.stopPropagation();
}

  const handleMouseMove = e => {
    console.log("i am in handleMouseMove");
    console.log("B4 -> x: " + fixedState.x + " e.clientX: " + e.clientX);
    console.log("B4 -> y: " + fixedState.y + " e.clienty: " + e.clientY);
    if (fixedState.y < e.clientY) {
      setFixedState({ x: 200000, y: 200000, fixed: "bottom"});
      console.log("changed to bottom " + fixedState.fixed);
    } else {
      setFixedState({ x: 0, y: 0, fixed: "top"});
      console.log("changed to top " + fixedState.fixed);
    }
    console.log("after -> x: " + fixedState.x + " e.clientX: " + e.clientX);
    console.log("after -> y: " + fixedState.y + " e.clienty: " + e.clientY);

    //e.stopPropagation();
  }
  
  const [isOpen,setIsOpen]=useState(false)
    return(
        <div>
      <Navbar
            color="dark"
            dark
            expand="md"
            fixed={fixedState.fixed}
            onDragStart={dragStart}
            onDragOver={dragOver}
            draggable='true'
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
              <NavLink tag={ReactLink} to ="/onboarding"> Account On-Boarding
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
                {/*<DropdownItem tag={ReactLink} to ="/board">Board</DropdownItem>*/}
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
    </div>

    );
};

export default CustomNavBar;