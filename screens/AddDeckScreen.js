import React from 'react';
import { StyleSheet, Text, TextInput, ScrollView } from 'react-native';
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
    // add validation to prevent empty deck name
    if (!deckName) {
      return alert("Deck name cannot be empty. Please re-enter.")
    }

    // add an empty deck
    dispatch(addDeck(deckName))

    // reset state and go back to home screen
    this.setState({ text: ''})

    // go to the individual deck view
    this.props.navigation.navigate('DeckDetail', { deckName })
  }

  render() {
    return (
      <ScrollView contentContainerStyle={{alignItems: 'center'}} style={styles.container} keyboardShouldPersistTaps='handled'>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInput
          style={[styles.inputBox]}
          maxLength={30}
          value={this.state.text}
          onChangeText={(text) => this.setState({text})}
          placeholder={`Input the deck title here`}
          onSubmitEditing={this.onSubmitEdit}
        />
        <TextButton onPress={this.onSubmitEdit}>Create Deck</TextButton>
      </ScrollView>
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
    // alignItems: 'center',
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
