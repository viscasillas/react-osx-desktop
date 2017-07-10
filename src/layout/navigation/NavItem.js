import React from 'react';
import styled from 'styled-components';

import user from '../../config/user'



export default class NavItem extends React.Component{
  render(){
    const Container = styled.div`
      ${'' /* background: #ddd; */}
      ${'' /* float: left; */}
      height: ${user.config.desktop.toolbar.height}px;
      position: relative;
      z-index: 1000000000;
      width: 50px;
      width: ${this.props.children.length * 13}px;
      display: inline-block;
      :hover{
        cursor: default;
        font-weight: bold;
        background: #1E86F3;
        color: white;
      }
      span{
        padding-left: 10px;
        padding-right: 10px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    `
    return (
        <Container className="NavItem" onClick={this.props.onClick && this.props.onClick}>
          <span>{this.props.children}</span>
          {this.props.hoverMenu && this.props.hoverMenu}
        </Container>
    )
  }
}
