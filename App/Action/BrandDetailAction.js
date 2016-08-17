/**
 * BrandAction
 * 因为没有api 只能拿固定数据
 */


import * as types from './ActionType';
import Util from '../Commom/utils';
import Common from '../Commom/constants';

export let BrandDetailAction = (type, isRefreshing, isLoading) => {

    let URL = 'http://api.huaban.com/fm/wallpaper/pins?limit=';
    URL += 12;
    URL += '&max=';
    URL += '&tag=';
    console.log(URL)

    return dispatch => {
        dispatch(feachBrandList(isRefreshing, isLoading));


        return Util.get(URL, (response) => {
            // console.log(response)
            //由于没有api 只能拿真实的固定数据
            if (type === 1) { //首页
                console.log('brand第一种数据')

                dispatch(receiveBrandDetailList(Common.BrandDate[0]))

            } else { // 海外购
                console.log('brand第二种数据')

                dispatch(receiveBrandDetailList(Common.BrandDate[1]))

            }
        }, (error) => {
            console.log('加载首页数据error==>' + error);
            // // debugger
            dispatch(receiveBrandDetailList([]));
        });

    }

}

function encode_utf8(s) {
    return encodeURIComponent(s);
}

let feachBrandDetailList = (isRefreshing, isLoading) => {
    return {
        type: types.FETCH_BRANDDETAIL_LIST,
        isRefreshing: isRefreshing,
        isLoading: isLoading,
    }
}

let receiveBrandDetailList = (brandDetailDate) => {
    return {
        type: types.RECEIVE_BRANDDETAIL_LIST,
        brandDetailDate: brandDetailDate,
    }
}

