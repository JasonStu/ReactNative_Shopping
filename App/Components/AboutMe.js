/**
 * Created by jason on 16/7/14.
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  PixelRatio,
  ScrollView,
  TouchableOpacity,

} from 'react-native';
import Common from '../Commom/constants';
import ImageButton from '../Commom/ImageButton';
import TextButton from '../Commom/TextButton';



export default class AboutMe extends Component {
  render() {
    return (

      <ScrollView style={{ width: Common.window.width, height: Common.window.height, marginTop: -20, backgroundColor: 'rgba(240,240,240,0.9)' }}>
        <Image
          source={require('../Img/mebg.png') }
          style={{
            width: Common.window.width, height: Common.window.height / 5, position: 'relative',
          }}
          >
          <Text style={styles.welcome}>
            ReacNative
          </Text>
          <Text style={{ position: 'absolute', marginTop: 80, marginLeft: 30,color:'white' }}>
            普通会员
          </Text>
          <Text style={{ position: 'absolute', top: 30, marginLeft: Common.window.width - 50 ,color:'white'}}>
            设置
          </Text>
          <Text style={{ position: 'absolute', marginLeft: Common.window.width - 80, bottom: 10,color:'white' }}>
            账户管理 >
          </Text>
        </Image>
        <Text style={{ width: Common.window.width, height: 40, position: 'absolute', padding: 10, fontSize: 18, backgroundColor: 'white' }}>
          我的订单
        </Text>
        <Text style={{ position: 'absolute', padding: 10, fontSize: 18, marginLeft: Common.window.width - 30 }}>
          >
        </Text>
        <View style={{ width: Common.window.width, height: 2 / PixelRatio.get(), backgroundColor: 'gray', marginTop: 40 }}>
        </View>
        <View style={{ padding:10, flex: 1, flexDirection: 'row', justifyContent: 'space-between',backgroundColor: 'white'  }}>
          <ImageButton
            imageStyle={{
              width: 30,
              height: 30,
            }}
            onPress={() => { } }
            imageUrl = {require('../Img/moneys.png') }
            text={'代付款'}
            />
          <ImageButton
            imageStyle={{
              width: 30,
              height: 30,
            }}
            onPress={() => { } }
            imageUrl = {require('../Img/bus.png') }
            text={'物流'}
            />
          <ImageButton
            imageStyle={{
              width: 30,
              height: 30,
            }}
            onPress={() => { } }
            imageUrl = {require('../Img/tosts.png') }
            text={'物流'}
            />

        </View>
   

        <Text style={{ marginTop:10,width: Common.window.width, height: 40, position: 'absolute', padding: 10, fontSize: 18 ,backgroundColor:'white'}}>
          我的钱包
        </Text>
        <View style={{ width: Common.window.width, height: 2 / PixelRatio.get(), backgroundColor: 'gray', marginTop: 50 }}>
        </View>

        <View style={{ padding: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-between',backgroundColor:'white' }}>
          <TextButton

            onPress={() => { } }
            text={'物流'}
            upText={'0'}
            />
          <TextButton

            onPress={() => { } }
            text={'物流'}
            upText={'0'}
            />
          <TextButton

            onPress={() => { } }
            text={'物流'}
            upText={'0'}
            />
          <ImageButton
            imageStyle={{
              width: 20,
              height: 20,
            }}
            onPress={() => { } }
            imageUrl = {require('../Img/RMB.png') }
            text={'优红利'}
            />
        </View>
     
        <View style={{marginTop:10, padding: 15, flex: 1, flexDirection: 'row', justifyContent: 'space-between',backgroundColor:'white' }}>
          <ImageButton
            imageStyle={{
              width: 30,
              height: 30,
            }}
            onPress={() => { } }
            imageUrl = {require('../Img/sc.png') }
            text={'我的收藏'}
            />
          <ImageButton
            imageStyle={{
              width: 30,
              height: 30,
            }}
            onPress={() => { } }
            imageUrl = {require('../Img/yj.png') }
            text={'浏览记录'}
            />
          <ImageButton
            imageStyle={{
              width: 30,
              height: 30,
            }}
            onPress={() => { } }
            imageUrl = {require('../Img/wh.png') }
            text={'帮组中心'}
            />
          <ImageButton
            imageStyle={{
              width: 30,
              height: 30,
            }}
            onPress={() => { } }
            imageUrl = {require('../Img/yjj.png') }
            text={'意见反馈'}
            />

        </View>
    
        <TouchableOpacity style={{marginTop:10, flexDirection: 'row', alignItems: 'center', height: 50, position: 'relative',backgroundColor:'white' }}activeOpacity={0.75}>
          <Image
            source={require('../Img/ri.png') }
            style={{ width: 30, height: 30, marginLeft: 20 }}
            />
          <Text style={{ marginLeft: 10 }}>
            每日签到
          </Text>
          <Text style={{ position: 'absolute', padding: 12, fontSize: 18, marginLeft: Common.window.width - 150 }}>
            >
          </Text>

        </TouchableOpacity>
  
        <TouchableOpacity style={{ marginTop:10,flexDirection: 'row', alignItems: 'center', height: 50, position: 'relative' ,backgroundColor:'white'}}activeOpacity={0.75}>
          <Image
            source={require('../Img/kf.png') }
            style={{ width: 30, height: 30, marginLeft: 20 }}
            />
          <Text style={{ marginLeft: 10 }}>
            联系客服
          </Text>
          <Text style={{ position: 'absolute', padding: 12, fontSize: 18, marginLeft: Common.window.width - 150 }}>
            >
          </Text>

        </TouchableOpacity>
          <View style={{ marginTop: 0, width: Common.window.width, height: 5, backgroundColor: 'rgb(240,240,240)' }}>
        </View>

      </ScrollView>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    // alignItems: 'center',
    position: 'relative',
    // backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    // textAlign: 'center',
    marginTop: 40,
    marginLeft: 30,
    color: 'white',
    position: 'absolute'
    // position: 'relative',

  }
});
