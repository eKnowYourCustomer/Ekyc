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
    Dropdown,
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

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);
  
  const [fixedState, setFixedState]=useState({x: 0, y: 0, fixed: 'top', direction: 'down'})

  const dragStart = e => {
    handleMouseMove(e);
  }

const dragOver = e => {
    handleMouseMove(e);
    e.stopPropagation();
}

  const handleMouseMove = e => {
    if (fixedState.y < e.clientY) {
      setFixedState({ x: 200000, y: 200000, fixed: "bottom", direction: 'up'});
    } else {
      setFixedState({ x: 0, y: 0, fixed: "top", direction: 'down'});
    }
  }
  
  const [isOpen,setIsOpen]=useState(false)
    return(
        <div>
      <Navbar
            color="dark"
            dark
            expand="md"
            position="sticky"
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
            <Dropdown nav inNavbar isOpen={dropdownOpen} toggle={toggle} direction={fixedState.direction}>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu end>
                <DropdownItem tag={ReactLink} to ="/products">
                  Our Products
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
            </Dropdown>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>

    );
};

export default CustomNavBar;