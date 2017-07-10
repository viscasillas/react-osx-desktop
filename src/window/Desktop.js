import React, {Component} from 'react';
import styled from 'styled-components';
import ReactGridLayout from 'react-grid-layout';
import $ from 'jquery';
import Window from './Window'
import WindowManager from './WindowManager';

const Container = styled.div`
  padding-left:10px;
  height: 100%;
  width: 100%;
`
const Folder = styled.div`
  width: auto;
  height: auto;
  background: transparent;
  text-align: center;
  color: white;
  border: 1px solid transparent;
  :hover{
    cursor: pointer;
    border: 1px solid #576685;
    background: rgba(0,0,0,0.2);
    border-radius: 5px;
    span{
      color: palevioletred;
    }
  }
  span, img{
    display: block;
    clear: both;
    margin-right: auto;
    margin-left: auto;
  }
`


var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

export default class Desktop extends Component {
  constructor(){
    super();
    this.state = {
      items: [],
      layout: [
        {i: 'a', x: 0, y: 0, w: 1, h: 2},
        {i: 'b', x: 0, y: 0, w: 1, h: 2, minW: 1, maxW: 1},
        {i: 'c', x: 0, y: 0, w: 1, h: 2},
        {i: 'd', x: 0, y: 0, w: 1, h: 2},
        {i: 'e', x: 0, y: 0, w: 1, h: 2}
      ]
    }
  }
  componentDidMount(){
    var items = [];
    this.props.items.map((item, i) => {
      items.push({i: alphabet[i], x: 0, y: 0, w: 1, h: 2});
    });
    console.log(items);
    this.setState({items: items});

  }
  renderDesktopItems = () => {
    this.props.items.map((item, i) => {
      return (
        <Folder key={alphabet[i]}>
          <img src="/assets/folder-icons/blank.png" height="50px"/>
          <span>{item.title}</span>
        </Folder>
      )
    });
  }
  render(){
    return (
      <Container>
        {/* <Window>
          <h1>Hello</h1>
        </Window> */}
        <WindowManager>
          test
        </WindowManager>
        {this.state.items &&
          <ReactGridLayout className="layout" layout={this.state.items} cols={12} rowHeight={50} width={window.innerWidth}>
            {this.renderDesktopItems()}
          </ReactGridLayout>
        }
        <ReactGridLayout className="layout" layout={this.state.layout} cols={12} rowHeight={50} width={window.innerWidth}>
          <Folder key={'a'}>
            <img src="/assets/folder-icons/blank.png" height="50px"/>
            <span>Untitled Folder 2</span>
          </Folder>
          <Folder key={'b'}>
            <img src="/assets/folder-icons/blank.png" height="50px"/>
            <span>Untitled Folder 2</span>
          </Folder>
          <Folder key={'c'}>
            <img src="/assets/folder-icons/blank.png" height="50px"/>
            <span>Untitled Folder 3</span>
          </Folder>
          <Folder key={'d'}>
            <img src="/assets/folder-icons/blank.png" height="50px"/>
            <span>Untitled Folder 3</span>
          </Folder>
          <Folder key={'e'}>
            <img src="/assets/folder-icons/blank.png" height="50px"/>
            <span>Untitled Folder 3</span>
          </Folder>
        </ReactGridLayout>
      </Container>
    )
  }
}
