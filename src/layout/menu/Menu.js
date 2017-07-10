// Import
import React from "react";
import styled from "styled-components";

import user from '../../config/user';

// Styles
const Container = styled.div`
  position: absolute;
  top: 0;
  color: black;
  background: transparent;
  height: ${user.config.desktop.toolbar.height}px;
  width: 100px;
  z-index: 1000000000;
  &:hover{
    width: 200px;
    bottom: 0;
    padding-top: ${user.config.desktop.toolbar.height}px;
    .MenuItems{
      background: rgba(255,255,255,8.5);
      height: auto;
    }
    .MenuSplitter{
      background: #ccc;
    }
    .MenuItem, .MenuFolder{
      visibility: visible;
      z-index: 1000000000;
    }
    div:last-of-type{
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
    }
  }
`;

const MenuItems = styled.div`
  padding-top: ${user.config.desktop.toolbar.paddingBottom}px;
  height: 0px;
`

export default class Menu extends React.Component {
  render() {
    return (
      <Container className="Menu">
        <MenuItems className="MenuItems">
          {this.props.children}
        </MenuItems>
      </Container>
    );
  }
}
