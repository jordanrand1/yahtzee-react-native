import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';

export default class App extends React.Component {
  state = { isReady: false }

  getReady = () => {
    return new Promise(resolve => setTimeout(() => resolve("Done"), 3000))
  }

  render() {
    if (!this.state.isReady)
      return (
        <AppLoading
          startAsync={this.getReady}
          onFinish={ () => this.setState({ isReady: true }) }
          onError={console.warn}
        />
      )
      return (
        <View style={styles.container}>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
