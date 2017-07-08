import React, {Component} from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: auto;
  height: auto;
  ${'' /* background:orange; */}
  text-align: center;
  color: white;
  :hover{
    color: blue;
    cursor: pointer;
  }
`

export default class Desktop extends Component {
  render(){
    return (
      <Container>
        {this.props.children}
      </Container>
    )
  }
}
