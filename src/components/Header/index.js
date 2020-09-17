import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from 'react';

import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <header>
        <Navbar expand="md">
          <NavbarBrand to="/">Dpixi</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link">Index</Link >
              </NavItem>
              <NavItem>
                <Link to="/about" className="nav-link">About</Link >
              </NavItem>
              <NavItem>
                <Link to="/portfolio" className="nav-link">Works</Link >
              </NavItem>
              <NavItem>
                <Link to="/Blog" className="nav-link">Blog</Link >
              </NavItem>
              <NavItem>
                <Link to="/Blog" className="nav-link">Contact</Link >
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </header>
    </Container>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
