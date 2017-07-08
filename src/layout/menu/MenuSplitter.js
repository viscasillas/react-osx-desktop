// Import
import React from "react";
import styled from "styled-components";


// Styles
const Container = styled.div`
  width: 100%;
  height: 1px;
  float: left;
`;

export default class MenuSplitter extends React.Component {
  render() {
    return (
      <Container className="MenuSplitter"/>
    );
  }
}
