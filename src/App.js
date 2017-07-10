import React, { Component } from 'react';
import styled from 'styled-components';

import Navigation from './layout/navigation/Navigation'
import NavItem from './layout/navigation/NavItem'

import Menu from './layout/menu/Menu'
import MenuItem from './layout/menu/MenuItem'
import MenuSplitter from './layout/menu/MenuSplitter';

import Dock from './dock/Dock'

import Desktop from './window/Desktop'

import user from './config/user'

const Container = styled.div`
  padding: 0px;
  margin: 0px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-family: Helvetica;
  background-image: url(${(props)=>props.wallpaper});
  background-size: contain;
  overflow: hidden;
`;

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      desktop:{
        items: [
          {
            type: 'folder',
            title: 'Some folder'
          },{
            type: 'folder',
            title: 'Some folder 2'
          },{
            type: 'folder',
            title: 'Some folder 3'
          }
        ]
      }
    }
  }
  render() {
    const HomeMenu = (
      <Menu>
        <MenuItem onClick={() => alert('What do you want to open')}>Open</MenuItem>
        <MenuItem>Save Log</MenuItem>
        <MenuItem>Rescan</MenuItem>
        <MenuItem>Preferences</MenuItem>
        {/* <MenuSplitter /> */}
        <MenuItem onClick={() => alert('You cannot quit this app')}>Quit</MenuItem>
      </Menu>
    );
    return (
      <Container wallpaper={user.config.desktop.wallpaper && user.config.desktop.wallpaper}>

        <Navigation title={user.config.desktop.toolbar.title}>
          <NavItem hoverMenu={HomeMenu}>File</NavItem>
          <NavItem onClick={() => alert('what')}>Edit</NavItem>
          <NavItem>View</NavItem>
          <NavItem hoverMenu={HomeMenu}>History</NavItem>
        </Navigation>

        <Desktop items={this.state.desktop.items}/>


        {/* <Dock /> */}
      </Container>
    );
  }
}
