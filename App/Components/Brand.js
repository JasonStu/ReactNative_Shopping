/**
 * Created by jason on 16/7/14.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ListView,
  PixelRatio,
  InteractionManager,
} from 'react-native';
import Common from '../Commom/constants';
import SearchHeader from '../Components/SearchHeader';
import Buttom from '../Commom/Buttom';
import BrandListView from '../Pages/BrandListView';
import {BrandAction} from '../Action/BrandAction';
import Loading from '../Commom/Loading';

let Array = [];
let passDate = {};
let isRefreshing = false;
let isLoading = true;
let offest = '';
let tag = '';
let limit = 21;//为了使得api跑起来要加上

export default class Brand extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultNum: 0,
      selectArray: [1],
    };

  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      const {dispatch, BrandReducer} = this.props;
      dispatch(BrandAction(1, tag, offest, limit, isRefreshing, isLoading));
    });

  }

  onPress(type) {

  }

  render() {

    const { BrandReducer} = this.props;
    passDate = BrandReducer.BrandDate;
    if (passDate.brands_title !== undefined && Array.length < passDate.brands_title.length) {

      passDate.brands_title.map((object, i) => {
        if (i === 0) {
          Array.push(1);
        } else {
          Array.push(0);
        }
      });
    }

    const BrandNameStyle = {
      justifyContent: 'center',
      alignItems: 'center',
      width: Common.window.width / 4,
      height: 50,
      backgroundColor: 'rgb(240, 240, 240)',
      borderColor: 'gray',
      borderWidth: 1 / PixelRatio.get(),
      borderLeftWidth: 0,
      borderTopWidth: 0
    };

    return (
      <View style={styles.container}>
        <SearchHeader
          searchAction={() => {
            alert('search')
          } }
          scanAction={() => alert('scan') }
          />
        {BrandReducer.isLoading ? <Loading /> :

          <View style={styles.mainViewStyle}>
            <View style={{ backgroundColor: 'white', width: Common.window.width / 4, height: Common.window.height - 60 - 60 }}>
              <ScrollView >
                {
                  passDate.brands_title.map((object, i) => {
                    const isSelect = this.state.selectArray[i];
                    console.log('isSelect=====>' + this.state.selectArray);

                    return (
                      <Buttom
                        key={i}
                        containerStyle = {
                          [BrandNameStyle, isSelect ? { backgroundColor: 'rgb(240, 240, 240)', borderRightWidth: 0 } : { backgroundColor: '#fcfcfc', borderRightWidth: 1 / PixelRatio.get() }]
                        }
                        style={[{ fontSize: 16, textAlign: 'center' },
                          isSelect ? { color: 'red' } : { color: 'black' }]}
                        text={object.name}
                        onPress={() => {
                          Array.map((object, i) => {
                            Array[i] = 0;
                          });
                          Array.splice(i, 1, 1);
                          this.setState({
                            defaultNum: i,
                            selectArray: Array,
                          });
                          InteractionManager.runAfterInteractions(() => {
                            const {dispatch} = this.props;
                            dispatch(BrandAction(i + 1, tag, offest, limit, isRefreshing, isLoading));
                          });

                        } }
                        />
                    );
                  }

                  )
                }
              </ScrollView>
            </View>
            <View style={{
              backgroundColor: 'blue', width: Common.window.width * 3 / 4, height: Common.window.height - 60 - 60, justifyContent: 'center',
              alignItems: 'center'
            }}>
              <BrandListView module={passDate.brands_wall[0].value}/>
            </View>

          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
     top:20,
  },
  mainViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  TextStyle: {


  }
});
