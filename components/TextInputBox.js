import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native'

export default class TextInputBox extends Component {
  state = {
    text: ''
  }
  render() {
    return (
      <TextInput
        style={[styles.inputBox]}
        maxLength={30}
        onChangeText={(text) => this.setState({text})}
        placeholder={this.props.children}/>
    )
  }
}

const styles = StyleSheet.create({
  inputBox: {
    height: 30,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  }
})