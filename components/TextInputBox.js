import React, { Component } from 'react'
import { TextInput, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import TextButton from '../components/TextButton'

export default class TextInputBox extends Component {
  state = {
    text: ''
  }
  onSubmitEdit = () => {
    console.log(this.props.addDeck)
    this.props.addDeck(this.state)
    this.props.toHome()
  }

  render() {
    return (
      <View>
        <TextInput
          style={[styles.inputBox]}
          maxLength={30}
          onChangeText={(text) => this.setState({text})}
          placeholder={this.props.children}
          onSubmitEditing={this.onSubmitEdit}
        />
        <TextButton onPress={this.onSubmitEdit}>{this.props.buttonText}</TextButton>
      </View>
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
