// Import
import React from "react";
import styled from "styled-components";


// Styles
const Container = styled.div`
  width: 100px;
  background: #ddd;
  float: left;
  text-align: center;
  padding-top: 16px;
  padding-bottom: 16px;
  position: relative;
  &:hover{
    background: #bbb;
    cursor: pointer;
    color: white;
    font-weight: bold;
  }
`;

export default class MenuFolder extends React.Component {
  render() {
    return (
      <Container>
        Folder
      </Container>
    );
  }
}
