import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import TextButton from '../components/TextButton'
import TextInputBox from '../components/TextInputBox'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Add a Deck',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>What is the title of your new deck?</Text>
        <TextInputBox>TEST</TextInputBox>
        <TextButton>Create Deck</TextButton>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
