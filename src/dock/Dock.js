// Import
import React from "react";
import styled from "styled-components";
import user from '../config/user';

// Styles
const Container = styled.div`
  position: fixed;
  top: calc(${window.innerHeight}px - 100px);
  left: 50%;
  transform: translateX(-65%);
  width: 900px;
  height: 100px;
  background: white;
  z-index: 1000000000;
`;

export default class Dock extends React.Component {
  render() {
    return (
      <Container className="Menu">
        asdfasdf
      </Container>
    );
  }
}
