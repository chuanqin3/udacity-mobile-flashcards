import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native'
import { connect } from 'react-redux'
import TextButton from '../components/TextButton'

class AddCardScreen extends React.Component {
  state = {
    question: '',
    answer: '',
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the question of your new card?</Text>
        <TextInput
          style={[styles.inputBox]}
          maxLength={50}
          onChangeText={(question) => this.setState({question})}
          placeholder={`Input the question here`}
          onSubmitEditing={this.onSubmitEdit}
        />
        <Text style={styles.title}>What is the answer of your new card?</Text>
        <TextInput
          style={[styles.inputBox]}
          maxLength={100}
          onChangeText={(answer) => this.setState({answer})}
          placeholder={`Input the answer here`}
          onSubmitEditing={this.onSubmitEdit}
        />
        <TextButton onPress={this.onSubmitEdit}>Add Card</TextButton>
      </View>
    )
  }
}

export default connect()(AddCardScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    padding: 10,
  },
  inputBox: {
    height: 30,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
  }
});
