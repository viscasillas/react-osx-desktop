// Import
import React from "react";
import styled from "styled-components";

import user from '../../config/user'

// Styles
const Container = styled.div`
  width: 100%;
  height: ${user.config.desktop.toolbar.height}px;
  ${'' /* background: rgba(255,255,255,0.9); */}
  position: relative;
  font-weight: normal;
  visibility: hidden;
  :hover{
    background: #1E86F3;
    color: white;
    font-weight: bold;
  }
  span{
    padding-left: 10px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export default class MenuItem extends React.Component {
  render() {
    return (
      <Container className="MenuItem" onClick={this.props.onClick && this.props.onClick}>
        <span>{this.props.children}</span>
      </Container>
    );
  }
}
