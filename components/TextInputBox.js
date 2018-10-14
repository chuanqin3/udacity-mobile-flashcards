import React, { Component } from 'react'
import { TextInput } from 'react-native'

export default class TextInputBox extends Component {
  state = {
    text: ''
  }
  render() {
    return (
      <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        placeholder={this.props.children}/>
    )
  }
}