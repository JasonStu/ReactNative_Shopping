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
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  ListView,
  PixelRatio,
} from 'react-native';
import Common from '../Commom/constants';
import SearchHeader from '../Components/SearchHeader';
import Buttom from '../Commom/Buttom';

let date = {
  "response": "brands",
  "totalpage": "8",
  "brands_title": [
    {
      "name": "推荐",
      "id": ""
    },
    {
      "name": "运动",
      "id": "eaec32113fea4c87a0a231f5147040e0"
    },
    {
      "name": "女鞋",
      "id": "5da2011498fd4455afd2e29896a489d6"
    },
    {
      "name": "男鞋",
      "id": "1e7cd6973c7e4f0ab30e4f4a6281f19d"
    },
    {
      "name": "户外",
      "id": "32f8ddd36f4d4e5b965a3ac8b79c5c29"
    },
    {
      "name": "男装",
      "id": "4a93de5dfcf4404c93bcf851228577f3"
    },
    {
      "name": "女装",
      "id": "07e0610989b54e3381e032ebd05de897"
    },
    {
      "name": "儿童",
      "id": "5c166c0c914a48ca857ef865919a04e8"
    }
  ],
  "advert_banner": [],
  "brands_wall": [
    {
      "key": "推荐",
      "value": [
        {
          "name": "阿迪达斯",
          "brandEnglishName": "adidas",
          "id": "1jJK",
          "pic": "http://i1.ygimg.cn/pics/brandlogo/adidas430571977.jpg"
        },
        {
          "name": "耐克",
          "brandEnglishName": "nike",
          "id": "FUYN",
          "pic": "http://i1.ygimg.cn/pics/brandlogo/nike474091448.jpg"
        },
        {
          "name": "百丽",
          "brandEnglishName": "belle",
          "id": "jHz8",
          "pic": "http://i1.ygimg.cn/pics/brandlogo/belle430574722.jpg"
        },
        {
          "name": "彪马",
          "brandEnglishName": "puma",
          "id": "45O5",
          "pic": "http://i2.ygimg.cn/pics/brandlogo/puma430798128.jpg"
        },
        {
          "name": "天美意",
          "brandEnglishName": "teenmix",
          "id": "Fbf5",
          "pic": "http://i2.ygimg.cn/pics/brandlogo/teenmix483675534.jpg"
        },
        {
          "name": "他她",
          "brandEnglishName": "tata",
          "id": "iU5u",
          "pic": "http://i2.ygimg.cn/pics/brandlogo/tata430799032.jpg"
        },
        {
          "name": "阿迪三叶草",
          "brandEnglishName": "adidas Originals",
          "id": "uOkv",
          "pic": "http://i1.ygimg.cn/pics/brandlogo/adidasclassic430572126.jpg"
        },
        {
          "name": "阿迪休闲",
          "brandEnglishName": "adidas neo",
          "id": "Cyz8",
          "pic": "http://i2.ygimg.cn/pics/brandlogo/adidasneo430571994.jpg"
        },
        {
          "name": "匡威",
          "brandEnglishName": "converse",
          "id": "MxXO",
          "pic": "http://i1.ygimg.cn/pics/brandlogo/converse430539595.jpg"
        },
        {
          "name": "思加图",
          "brandEnglishName": "staccato",
          "id": "Hfjt",
          "pic": "http://i2.ygimg.cn/pics/brandlogo/staccato430798791.jpg"
        },
        {
          "name": "茵奈儿",
          "brandEnglishName": "innet",
          "id": "Mckz",
          "pic": "http://i1.ygimg.cn/pics/brandlogo/innet474093572.jpg"
        },
        {
          "name": "百思图",
          "brandEnglishName": "basto",
          "id": "YDun",
          "pic": "http://i1.ygimg.cn/pics/brandlogo/basto523422917.jpg"
        },
        {
          "name": "NII",
          "brandEnglishName": "NII",
          "id": "0OBG",
          "pic": "http://i1.ygimg.cn/pics/brandlogo/nii504849888.jpg"
        },
        {
          "name": "森达",
          "brandEnglishName": "senda",
          "id": "50LY",
          "pic": "http://i1.ygimg.cn/pics/brandlogo/senda430798535.jpg"
        },
        {
          "name": "CHRIS.CHRISTY",
          "brandEnglishName": "CHRIS.CHRISTY",
          "id": "Ck9u",
          "pic": "http://i1.ygimg.cn/pics/brandlogo/chrischristy490190045.jpg"
        },
        {
          "name": "HUM",
          "brandEnglishName": "HUM",
          "id": "y303",
          "pic": "http://i2.ygimg.cn/pics/brandlogo/hum491912321.jpg"
        },
        {
          "name": "拔佳",
          "brandEnglishName": "Bata",
          "id": "6JEt",
          "pic": "http://i2.ygimg.cn/pics/brandlogo/bata430574220.jpg"
        },
        {
          "name": "NEW BALANCE",
          "brandEnglishName": "New Balance",
          "id": "kLfX",
          "pic": "http://i2.ygimg.cn/pics/brandlogo/newbalance430797273.jpg"
        },
        {
          "name": "NAIN",
          "brandEnglishName": "NAIN",
          "id": "xMU7",
          "pic": "http://i1.ygimg.cn/pics/brandlogo/nain502454197.jpg"
        },
        {
          "name": "李宁",
          "brandEnglishName": "li-ning",
          "id": "9nEx",
          "pic": "http://i1.ygimg.cn/pics/brandlogo/lining430547326.jpg"
        }
      ]
    }
  ]
}

export default class Brand extends Component {


  render() {
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
        <View style={styles.mainViewStyle}>
          <View style={{ backgroundColor: 'white', width: Common.window.width / 4, height: Common.window.height - 60 - 60 }}>
            <ScrollView >
              {
                date.brands_title.map((object, i) => {
                      const isSelect = i;

                  return (
                    <Buttom
                      key={i}
                      containerStyle = {
                        [BrandNameStyle, isSelect ? { backgroundColor: '#3e9ce9' } : { backgroundColor: '#fcfcfc' }]
                      }
                      style={[{ fontSize: 16, textAlign: 'center' },
                        isSelect ? { color: '#fcfcfc' } : { color: 'black' }]}
                      text={object.name}
                      />
                  );
                }

                )
              }
            </ScrollView>
          </View>
          <View style={{ backgroundColor: 'blue', width: Common.window.width * 3 / 4, height: Common.window.height - 60 - 60 }}>

          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
