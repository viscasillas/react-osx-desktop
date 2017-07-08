// Import
import React from "react";
import styled from "styled-components";


// Styles
const Container = styled.div`
  width: 100%;
  float: left;
  padding-top: 16px;
  padding-bottom: 16px;
  font-weight: normal;
  visibility: hidden;
  background: rgba(255,255,255,0.9);
  :hover{
    background: #1E86F3;
    color: white;
    font-weight: bold;
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
