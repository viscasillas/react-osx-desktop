import React,{Component} from 'react';
import styled from 'styled-components'
import { Window, View, TitleBar, Toolbar, Text } from 'react-desktop/macOs';


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
    // console.log(`
    //   I am this windowNumber:
    //   I am this zIndex:
    //   I want to be:
    // `)
    let windows = this.state.windows;
    let windowCount = this.state.windows.length;
    let cloneDesiredWindow = windows[currentWindow]
    windows.splice(currentWindow, 1);
    windows.unshift(cloneDesiredWindow);

    console.log(windowCount, currentWindow + 1 , this.moveElementInArray(windows, 1, -1))
    this.setState({windows})
  }
  orderWindows = () => {
    let state = this.state;
    this.state.windows && this.state.windows.map((win, i)=>{
      state.windows[i].zIndex = this.state.zIndexStart + i - 1;
      console.log(state);
    })
    this.setState({state});
  }
  render(){
    const WindowContainer = styled.div`
      width: auto;
      height: auto;
      z-index: ${(props)=>  this.state.zIndexStart - props.stack};
      position: absolute;
      top: ${(props)=>  150 - props.stack * 20}px;
      left: ${(props)=>  150 - props.stack * 20}px;
    `
    return (
      <div>
        <button onClick={this.orderWindows}>re-order</button>
        {
          this.state.windows && this.state.windows.map((win, i)=>{
            return (
              <WindowContainer stack={(i + 1)} key={i} onClick={() => this.exposeThisWindow(i)}>
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
