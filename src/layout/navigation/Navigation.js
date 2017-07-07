// Import
import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";


// Styles
const Container = styled.div`
  width: 100%;
  height: 50px;
  background: #eee;
  display: inline-block;
`;

export default class Navigation extends React.Component {
  render() {

    return (
      <Container>
        {this.props.children}
      </Container>
    );
  }
}
