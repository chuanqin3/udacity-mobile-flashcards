import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import TextInputBox from '../components/TextInputBox'
import { NavigationActions } from 'react-navigation'
import { addDeck } from '../actions'
import TextButton from '../components/TextButton'
import { connect } from 'react-redux';

class AddScreen extends React.Component {
  static navigationOptions = {
    title: 'Add a Deck',
  };

  state = {
    text: ''
  }

  onSubmitEdit = () => {
    const deckName = this.state.text
    const { dispatch } = this.props
    console.log(deckName)
    // add an empty deck
    dispatch(addDeck(deckName))

    // reset state and go back to home screen
    this.setState(() => {text: ''})
    this.toHome()
  }

  toHome = () => {
    // obtain a route’s navigator key, which is defined in MainTabNavigator.js
    // console.log(this.props.navigation.dangerouslyGetParent().state.key)
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          style={[styles.inputBox]}
          maxLength={30}
          onChangeText={(text) => this.setState({text})}
          placeholder={`Input the deck title here`}
          onSubmitEditing={this.onSubmitEdit}
        />
        <TextButton onPress={this.onSubmitEdit}>Create Deck</TextButton>
      </View>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    dispatch,
  }
}

export default connect(mapDispatchToProps)(AddScreen)

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
