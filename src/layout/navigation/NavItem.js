import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  ${'' /* background: #ddd; */}
  float: left;
  padding-top: 16px;
  padding-bottom: 16px;
  position: relative;
  z-index: 1000000000;
  :hover{
    cursor: pointer;
    font-weight: bold;
    background: #1E86F3;
    color: white;
  }
  span{
    padding-left: 20px;
    padding-right: 20px;
  }
`

export default class NavItem extends React.Component{
  render(){
    return (
        <Container className="NavItem" onClick={this.props.onClick && this.props.onClick}>
          <span>{this.props.children}</span>
          {this.props.hoverMenu && this.props.hoverMenu}
        </Container>
    )
  }
}
