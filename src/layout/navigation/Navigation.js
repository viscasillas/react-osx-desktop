// Import
import React from "react";
import styled from "styled-components";

import user from '../../config/user'

// Styles
const Container = styled.div`
  width: 100%;
  height: ${user.config.desktop.toolbar.height}px;
  background: rgba(255,255,255,0.9);
  display: inline-block;
  z-index: 1000000000;
  padding-left: 30px;
`;

const Title = styled.div`
  float: left;
  padding-top: 17px;
  padding-bottom: 15px;
  padding-right: 10px;
  position: relative;
  z-index: 1000000000;
  font-weight: 800;
`

export default class Navigation extends React.Component {
  render() {

    return (
      <Container className="Navigation">
        {this.props.title && <Title>{this.props.title}</Title>}
        {this.props.children}
      </Container>
    );
  }
}
