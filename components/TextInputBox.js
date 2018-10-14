import React, { Component } from 'react'
import { TextInput } from 'react-native'

export default class TextInputBox extends Component {
  state = {
    text: 'Input your text here'
  }
  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}/>
    )
  }
}