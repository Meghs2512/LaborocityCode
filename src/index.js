import React, { Component } from 'react';
import { View, StatusBar, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import AppNavigator from './lib/route';
import styles from './screen/styles/appStyles'
const AppIndex = createAppContainer(AppNavigator)

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }} >
        <StatusBar
          backgroundColor='transparent'
          barStyle='light-content'
        />
        <View style={styles.container}>
          <Image
            style={styles.imageStyle}
            source={require('../assets/Logo.jpg')}
          />
          <Icon name='ios-menu' size={28} color='#2C7DFA'></Icon>
        </View>
        <AppIndex screenProps={{ generalLabor: "" }} />
      </View>
    )
  }
}
