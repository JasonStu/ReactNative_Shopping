/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ShoppingCarListView from '../Pages/ShoppingCarListView';
export default class ShoppingCart extends Component {
  render() {
    return (
      <View >
        <ShoppingCarListView {...this.props}/>

        <Text style={styles.welcome}>
          购物车
        </Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor:'red',
  }
});
