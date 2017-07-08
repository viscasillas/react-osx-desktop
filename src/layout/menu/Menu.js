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
  padding-top: 0;
  height: ${user.config.desktop.toolbar.height}px;
  width: 200px;
  z-index: 1000000000;
  &:hover{
    bottom: 0;
    padding-top:${user.config.desktop.toolbar.height}px;
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

export default class Menu extends React.Component {
  render() {
    return (
      <Container className="Menu">
        {this.props.children}
      </Container>
    );
  }
}
