import React, { Component } from 'react';
import { TouchableHighlight, Text, View } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'tomato'
        }}
      >
        <View style={{ marginVertical: 20 }}>
          <Text style={{ fontSize: 30, color: 'white' }}>
            Restaurant Finder
          </Text>
        </View>
        <TouchableHighlight
          onPress={() => this.props.navigation.navigate('Search')}
          underlayColor={'grey'}
          style={{
            backgroundColor: 'transparent',
            padding: 10,
            borderRadius: 20,
            borderWidth: 1
            // backgroundColor: 'grey'
          }}
        >
          <Text style={{ fontSize: 20, color: 'black' }}>
            Enter To Search Restaurant
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
