// Import
import React from "react";
import styled from "styled-components";


// Styles
const Container = styled.div`\
  position: absolute;
  bottom: 0;
`;

export default class Menu extends React.Component {
  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    );
  }
}
