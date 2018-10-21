import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TextButton from '../components/TextButton'
import TextInputBox from '../components/TextInputBox'
import { NavigationActions } from 'react-navigation'

export default class AddScreen extends React.Component {
  static navigationOptions = {
    title: 'Add a Deck',
  };

  toHome = () => {
    // obtain a route’s navigator key, which is defined in MainTabNavigator.js
    // console.log(this.props.navigation.dangerouslyGetParent().state.key)
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>What is the title of your new deck?</Text>
        <TextInputBox buttonText={'Create Deck'} toHome={this.toHome}>Input the deck title here</TextInputBox>
        {/* <TextButton onPress={this.submit}>Create Deck</TextButton> */}
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
