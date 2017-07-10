import React, {Component} from 'react';
import styled from 'styled-components';
import { TextInput } from 'react-desktop/macOs';


export default class Browser extends Component{
  constructor(){
    super();
    this.state = {
      url: 'http://bing.com'
    }
  }
  updateUrl = (e) =>{
    this.setState({url: e.target.value});
  }
  render(){
    const Container = styled.div`
      iframe{
        border: 0;
        width: 100%;
      }
    `
    return (
      <Container>
        <TextInput
           label="Website"
           placeholder="https://"
           defaultValue=""
           onChange={this.updateUrl}
         />
         <iframe src={this.state.url && this.state.url} />
      </Container>
    )
  }
}
