import React, { Component } from 'react';
import styled from 'styled-components';

import Navigation from './layout/navigation/Navigation'
import NavItem from './layout/navigation/NavItem'

import Menu from './layout/menu/Menu'
import MenuItem from './layout/menu/MenuItem'
import MenuFolder from './layout/menu/MenuFolder'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Container = styled.div`
  padding: 0px;
  margin: 0px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default class App extends Component {
  render() {
    const HomeMenu = (
      <Menu>
        <MenuItem>Hello World</MenuItem>
        <MenuItem>Hello World</MenuItem>
        {/* <MenuFolder>Hello World</MenuFolder> */}
      </Menu>
    );
    return (
      <Container>
        <Navigation>
          <NavItem hoverMenu={HomeMenu}>Home</NavItem>
          <NavItem>Search</NavItem>
        </Navigation>
      </Container>
    );
  }
}
