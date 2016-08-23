/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  InteractionManager,
  PixelRatio
} from 'react-native';
import ShoppingCarListView from '../Pages/ShoppingCarListView';
import ShoppingNavBar from './ShoppingNavBar';
import Buttom from '../Commom/Buttom';
import Common from '../Commom/constants';
import Loading from '../Commom/Loading';
import {ShopCarAction, selectAll} from '../Action/ShopCarAction';


const isSelect = 0;
let isRefreshing = false;
let isLoading = true;

export default class ShoppingCart extends Component {

  constructor(props) {
    super(props);

  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      const {dispatch} = this.props;
      dispatch(ShopCarAction(isRefreshing, isLoading));
    });

  }
  render() {
    const { ShopCarReducer} = this.props;
    isSelect = ShopCarReducer.isSelectAll;
    const BrandNameStyle = {
      justifyContent: 'center',
      alignItems: 'center',
      width: Common.window.width / 13,
      height: Common.window.width / 13,
      backgroundColor: 'rgb(240, 240, 240)',
      marginLeft: 5,
      borderColor: 'black',
      borderWidth: 1 / PixelRatio.get(),
      borderRadius: Common.window.width / 13,


    };
    const billStyle = {
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      backgroundColor: 'rgb(240, 240, 240)',
            width: Common.window.width / 5,

    };
    return (
      <View style={{}}>
        <ShoppingNavBar onPress2Right={this.onPress2Right.bind(this) }/>
        {ShopCarReducer.isLoading ? <Loading /> :
          <ShoppingCarListView shopDate={ShopCarReducer.ShopDate} {...this.props}/>
        }
        <View style={{
          backgroundColor: 'rgb(240, 240, 240)',
          height: 40,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <View style={{
            flexDirection: 'row', alignItems: 'center',
          }}>
            <View style={{
              flexDirection: 'row', alignItems: 'center',
            }}>
              <Buttom
                containerStyle = {
                  [BrandNameStyle, isSelect ? { backgroundColor: 'black' } : { backgroundColor: '#fcfcfc' }]
                }
                style={[{ fontSize: 16, textAlign: 'center' },
                  isSelect ? { color: 'white' } : { color: 'white' }]}
                text={'√'}
                onPress={this.onPress2ALL.bind(this) }

                />
              <Text style= {{ width: Common.window.width / 8 }}>全选</Text>
            </View>
            <View>
              <Text>{'总价:¥'+ShopCarReducer.allPrices}</Text>
              <Text>全选</Text>

            </View>
          </View>
          <View style={{
            flexDirection: 'row', alignItems: 'center',
          }}>
            <Buttom
              containerStyle = {
                [billStyle, isSelect ? { backgroundColor: 'red' } : { backgroundColor: 'gray' }]
              }
              style={[{ fontSize: 16, textAlign: 'center' },
                isSelect ? { color: 'white' } : { color: 'white' }]}
              text={'去结算'}
              onPress={this.onPress2ALL.bind(this) }

              />
          </View>

        </View>
      </View>
    );
  }
  onPress2ALL(object) {
    InteractionManager.runAfterInteractions(() => {
      const {dispatch} = this.props;
      dispatch(selectAll(!isSelect, isLoading));
    });
  }
  onPress2Right(object) {
    alert('选中按钮')

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
    backgroundColor: 'red',
  }
});
