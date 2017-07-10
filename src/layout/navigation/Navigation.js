// Import
import React, {Component} from "react";
import styled from "styled-components";
import Clock from 'react-live-clock';

import user from '../../config/user'

// Styles
const Container = styled.div`
  width: 100%;
  height: ${user.config.desktop.toolbar.height}px;
  background: rgba(255,255,255,0.9);
  z-index: 1000000000;
  padding-left: 30px;
  box-shadow: 10px 2px 5px rgba(0,0,0,0.4);
`;


export default class Navigation extends Component {
  render() {

    const Title = styled.div`
      ${'' /* float: left; */}
      height: ${user.config.desktop.toolbar.height}px;
      padding-right: 25px;
      position: relative;
      z-index: 1000000000;
      ${'' /* background: lightblue; */}
      font-weight: 800;
      width: ${this.props.title.length * 8}px;
      display: inline-block;
      span{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }
    `

    const ClockContainer = styled.span`
      float:right;
      height: ${user.config.desktop.toolbar.height}px;
      width: 120px;
      padding-left: 5px;
      padding-right: 5px;
      position: relative;
      span{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        opacity: 1.0;
        font-weight: light;
        :hover{
          opacity: 1.0;
          cursor: default;
        }
      }
    `
    return (
      <Container className="Navigation">
        {this.props.title && <Title><span>{this.props.title}</span></Title>}
        {this.props.children}
        <ClockContainer>
          <span><Clock format={'ddd hh:MM'} ticking={true} timezone={'US/Pacific'} /></span>
        </ClockContainer>
      </Container>
    );
  }
}
