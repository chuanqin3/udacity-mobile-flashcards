import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TextButton from '../components/TextButton'
import TextInputBox from '../components/TextInputBox'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Add a Deck',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInputBox>Input the deck title here</TextInputBox>
        <TextButton>Create Deck</TextButton>
      </View>
    );
  }
}

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
  }
});
