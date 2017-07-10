import React,{Component} from 'react';
import styled from 'styled-components'
import { Window, View, TitleBar, Toolbar, Text } from 'react-desktop/macOs';
import Browser from './../apps/WebBrowser/Browser'

export default class WindowManager extends Component{
  constructor(){
    super();
    this.state = {
      zIndexStart: 1000,
      windows: [
        {
          title: 'Window 1'
        },{
          title: 'Window 2'
        },{
          title: 'Window 3'
        },{
          title: 'Window 4'
        }
      ]
    }
  }
  moveElementInArray = (array, value, positionChange) =>{
    var oldIndex = array.indexOf(value);
    if (oldIndex > -1){
      var newIndex = (oldIndex + positionChange);

      if (newIndex < 0){
        newIndex = 0
      }else if (newIndex >= array.length){
        newIndex = array.length
      }

      //http://jsperf.com/new-array-vs-splice-vs-slice/19
      var arrayClone = array.slice();
      arrayClone.splice(oldIndex,1);
      arrayClone.splice(newIndex,0,value);

      return arrayClone
    }
    return array
  }

  exposeThisWindow = (currentWindow) => {
    let windows = this.state.windows;
    let windowCount = this.state.windows.length;
    let cloneDesiredWindow = windows[currentWindow]
    // remove current window from list
    windows.splice(currentWindow, 1);
    // add window back to the window list
    windows.unshift(cloneDesiredWindow);
    console.log(windowCount, currentWindow + 1 , this.moveElementInArray(windows, 1, -1))
    this.setState({windows})
  }
  render(){
    const WindowContainer = styled.div`
      width: auto;
      height: auto;
      z-index: ${(props)=>  this.state.zIndexStart - props.stack};
      position: absolute;
      top: ${(props) => props.top }px;
      left: ${(props) =>  props.left}px;
    `
    return (
      <div>
        {
          this.state.windows && this.state.windows.map((win, i)=>{
            return (
              <WindowContainer
                stack={(i + 1)}
                key={i}
                onClick={() => this.exposeThisWindow(i)}
                top={180 - (i + 1) * 20}
                left={180 - (i + 1) * 20}
                >
                <Window
                   chrome
                   height="300px"
                   width="600px"
                   padding="10px"
                 >
                  <TitleBar
                     title={win.title}
                     controls
                     isFullscreen={this.state.isFullscreen}
                     onCloseClick={() => console.log('Close window')}
                     onMinimizeClick={() => console.log('Minimize window')}
                     onMaximizeClick={() => console.log('Mazimize window')}
                     onResizeClick={() => this.setState({ isFullscreen: !this.state.isFullscreen })}
                   />
                   <Text>I am z-index: {this.state.zIndexStart + i - 1}</Text>
                </Window>
           </WindowContainer>
            )
          })
        }
      </div>
    )
  }
}
