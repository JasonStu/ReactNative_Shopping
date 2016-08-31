






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
import {ShopCarAction, selectAll, changeShopcar,deleteShopList} from '../Action/ShopCarAction';


let  isSelect = 0;
let isBill = 0;
let isRefreshing = false;
let isLoading = true;

export default class ShoppingCart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      navRightStatus: false,
    }

  }

  componentDidMount() {
    InteractionManager.runAfterInteractions(() => {
      const {dispatch} = this.props;
      dispatch(ShopCarAction(isRefreshing, isLoading));
    });

  }

  shopAllPrices() {
    const { ShopCarReducer} = this.props;
    var price = 0;

    ShopCarReducer.selectShopArr.forEach(function (object) {
      price += parseInt(object.price1.value) * parseInt(object.number);

    }, this);

    return price;
  }

  favorableAllPrices(){
        const { ShopCarReducer} = this.props;
    var price = 0;

    ShopCarReducer.selectShopArr.forEach(function (object) {
      price += parseInt(object.price2.value) * parseInt(object.number);

    }, this);

    return price;

  }
  render() {
    const { ShopCarReducer} = this.props;
    isSelect = ShopCarReducer.isSelectAll;
    isBill = ShopCarReducer.selectShopArr.length
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
      height: 50,
      backgroundColor: 'rgb(240, 240, 240)',
      width: Common.window.width / 5,

    };

    return (
      <View >
        <ShoppingNavBar onPress2Right={this.onPress2Right.bind(this) } RightTitle={ShopCarReducer.isChangeShopCar ? '完成' : '编辑'}/>
        {ShopCarReducer.isLoading ? <Loading /> :
          <View>
            <ShoppingCarListView shopDate={ShopCarReducer.ShopDate} {...this.props}/>

            <View style={{ backgroundColor: 'rgb(240, 240, 240)', height: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                  <Buttom
                    containerStyle = {
                      [BrandNameStyle, isSelect ? { backgroundColor: 'black' } : { backgroundColor: '#fcfcfc' }]
                    }
                    style={[{ fontSize: 16, textAlign: 'center' },
                      isSelect ? { color: 'white' } : { color: 'white' }]}
                    text={'√'}
                    onPress={this.onPress2ALL.bind(this) }

                    />
                  <Text style= {{ width: Common.window.width / 8, marginLeft: 5 }}>全选</Text>
                </View>
                <View >
                  {ShopCarReducer.isChangeShopCar ? <View></View> :
                    <View>
                    <Text style={{ color: 'red' }}>{'总价:¥' + this.favorableAllPrices() }</Text>
                      <Text style={{fontSize: 11 ,marginTop:5}}>{'商品金额:¥' + this.shopAllPrices() +',已减'+(this.shopAllPrices()-this.favorableAllPrices())}</Text>
                      
                    </View>
                  }
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <Buttom
                  containerStyle = {
                    [billStyle, isBill ? { backgroundColor: 'red' } : { backgroundColor: 'gray' }]
                  }
                  style={[{ fontSize: 16, textAlign: 'center' },
                    isBill ? { color: 'white' } : { color: 'white' }]}
                  text={ShopCarReducer.isChangeShopCar ? '删除' : '去结算'}
                  disabled={!Boolean(isBill)}
                  onPress={ShopCarReducer.isChangeShopCar?this.deleteShop.bind(this):()=>{alert('结账小弟')}}

                  />
              </View>

            </View>
          </View>
        }

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
    const {dispatch} = this.props;

    dispatch(changeShopcar(!this.props.ShopCarReducer.isChangeShopCar));

  }
  deleteShop(){
        const {dispatch} = this.props;
    dispatch(deleteShopList());

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
 top:20,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'red',
  }
});
