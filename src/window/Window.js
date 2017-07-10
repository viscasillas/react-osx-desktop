import React, {Component} from 'react';
import styled from 'styled-components';
import ReactGridLayout from 'react-grid-layout';
import {interact} from 'interactjs'
import { View, TitleBar, Toolbar, Text } from 'react-desktop/macOs';

const Container = styled.div`
  min-width: 200px;
  max-width: 80%;
  position: absolute;
  top: 80px;
  z-index: 1000000;
  left: 150px;
  background: white;
  border-radius: 5px;
  box-sizing: border-box;
  h1{
    line-height: 50px;
    margin: 0;
  }
`

// const Toolbar = styled.div`
//   width: 100%;
//   height: 30px;
//   background-color: #eee;
//   border-top-right-radius: 10px;
//   border-top-left-radius: 10px;
//   border-bottom: 1px solid #ccc;
//   padding-top: 14px;
//   span{
//     margin-left: auto;
//     margin-right: auto;
//     display: block;
//     width:120px;
//     height: 15px;
//     font-size: 16px;
//     transform: translateX(-50%),translateY(-50%);
//   }
// `

export default class Window extends Component {
  constructor() {
    super();
    this.state = { isFullscreen: false };
  }
  componentDidMount(){
    interact('.resize-drag')
  .draggable({
    onmove: window.dragMoveListener
  }, console.log('Move'))
  .resizable({
    preserveAspectRatio: false,
    edges: { left: true, right: true, bottom: true, top: true }
  })
  .on('resizemove', function (event) {
    var target = event.target,
        x = (parseFloat(target.getAttribute('data-x')) || 0),
        y = (parseFloat(target.getAttribute('data-y')) || 0);

    // update the element's style
    target.style.width  = event.rect.width + 'px';
    target.style.height = event.rect.height + 'px';

    // translate when resizing from top or left edges
    x += event.deltaRect.left;
    y += event.deltaRect.top;

    target.style.webkitTransform = target.style.transform =
        'translate(' + x + 'px,' + y + 'px)';

    target.setAttribute('data-x', x);
    target.setAttribute('data-y', y);
    // target.textContent = Math.round(event.rect.width) + '×' + Math.round(event.rect.height);
  });
  }
  render(){
    return (
      <Container className="resize-drag">
          {/* <Toolbar>
            <span>ReactOS - Intro</span>
          </Toolbar> */}
          <TitleBar
             title="untitled text 5"
             controls
             isFullscreen={this.state.isFullscreen}
             onCloseClick={() => console.log('Close window')}
             onMinimizeClick={() => console.log('Minimize window')}
             onMaximizeClick={() => console.log('Mazimize window')}
             onResizeClick={() => this.setState({ isFullscreen: !this.state.isFullscreen })}
           />
          {this.props.children}
      </Container>
    )
  }
}
