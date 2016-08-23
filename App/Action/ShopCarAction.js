/**
 * ShopCarAction
 * 因为没有api 只能拿固定数据
 */


import * as types from './ActionType';
import Util from '../Commom/utils';
import Common from '../Commom/constants';

export let ShopCarAction = (isRefreshing, isLoading) => {

    let URL = 'http://api.huaban.com/fm/wallpaper/pins?limit=';
    URL += 12;
    URL += '&max=';
    URL += '&tag=';

    return dispatch => {
        dispatch(feachShopCarList(isRefreshing, isLoading));
        return Util.get(URL, (response) => {
            // console.log(response)
            //由于没有api 只能拿真实的固定数据
            console.log('购物车数据')
            dispatch(receiveShopCarList(Common.ShoppingCarDate))
        }, (error) => {
            console.log('加载首页数据error==>' + error);
            // debugger
            dispatch(receiveShopCarList([]));
        });

    }

}

export let selectAll = (isSelectAll,isLoading) => {
    console.log('调动成功')
    let URL = 'http://api.huaban.com/fm/wallpaper/pins?limit=';
    URL += 12;
    URL += '&max=';
    URL += '&tag=';
    return dispatch => {
        dispatch(feachSelectAllList(isLoading));
        return Util.get(URL, (response) => {
            // console.log(response)
            //由于没有api 只能拿真实的固定数据
            console.log('全选购物车数据')
        dispatch(selectAllShopCartList(isSelectAll));
        }, (error) => {
            console.log('加载首页数据error==>' + error);
            // debugger
        dispatch(selectAllShopCartList(isSelectAll));
        });
    }
}


export let selectOne = (shopID,isSelectOne,isLoading) => {
    console.log(shopID+'==================>'+isSelectOne)
    let URL = 'http://api.huaban.com/fm/wallpaper/pins?limit=';
    URL += 12;
    URL += '&max=';
    URL += '&tag=';
    return dispatch => {
        // dispatch(feachSelectOneList(isLoading));
                dispatch(selectOneShopCartList(isSelectOne,shopID));

        // return Util.get(URL, (response) => {
        //     // console.log(response)
        //     //由于没有api 只能拿真实的固定数据
        //     console.log('单选购物车数据')
        // dispatch(selectOneShopCartList(isSelectOne,shopID));
        // }, (error) => {
        //     console.log('加载首页数据error==>' + error);
        //     // debugger
        // dispatch(selectOneShopCartList(isSelectOne,shopID));
        // });
    }
}




function encode_utf8(s) {
    return encodeURIComponent(s);
}

let feachShopCarList = (isRefreshing, isLoading) => {
    return {
        type: types.FETCH_SHOPCART_LIST,
        isRefreshing: isRefreshing,
        isLoading: isLoading,
    }
}

let receiveShopCarList = (shopCarDate) => {
    return {
        type: types.RECEIVE_SHOPCART_LIST,
        shopCarDate: shopCarDate,
    }
}
//选择全部
let selectAllShopCartList = (isSelectAll) => {
    return {
        type: types.SELECTAll_SHOPCART_LIST,
        isSelectAll: isSelectAll,

    }
}

let feachSelectAllList = ( isLoading) => {
    return {
        type: types.FETCH_SELECTAll_LIST,
        isLoading: isLoading,
    }
}

//选择单个
let selectOneShopCartList = (isSelectOne,shopID) => {
    return {
        type: types.SELECTONE_SHOPCART_LIST,
        isSelectOne: isSelectOne,
        shopID:shopID

    }
}

let feachSelectOneList = (isLoading) => {
    return {
        type: types.FETCH_SELECTONE_LIST,
        isLoading: isLoading,
    }
}

