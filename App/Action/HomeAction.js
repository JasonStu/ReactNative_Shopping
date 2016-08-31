/**
 * HomeAction
 * 因为没有api 只能拿固定数据
 */


import * as types from './ActionType';
import Util from '../Commom/utils';
import Common from '../Commom/constants';

export let HomeAction = (type, tag, offest, limit, isRefreshing, isLoading) => {

    let URL = 'http://api.huaban.com/fm/wallpaper/pins?limit=';
    if (limit) URL += limit;
    offest ? URL += '&max=' + offest : URL += '&max=';
    tag ? URL += '&tag=' + encode_utf8(tag) : URL += '&tag='
    console.log(URL)
    return dispatch => {
        // dispatch(feachHomeList(isRefreshing, isLoading));
        if (type === 1) { //首页
            dispatch(feachHomeList(isRefreshing, isLoading));

        } else { // 海外购
            dispatch(feachSeaUGoList(isRefreshing, isLoading))

        }

        return Util.get(URL, (response) => {
            // console.log(response)
            //由于没有api 只能拿真实的固定数据
            // dispatch(receiveHomeList(response.pins))    
            if (type === 1) { //首页
                console.log('请求首页数据')

                dispatch(receiveHomeList(Common.HomeDate))

            } else { // 海外购
                console.log('请求海外购数据')

                dispatch(receiveSeaUGoList(Common.seaGoDate))

            }

        }, (error) => {
            console.log('加载首页数据error==>' + error);
            // // debugger
            dispatch(receiveHomeList([]));
        });

    }

}

function encode_utf8(s) {
    return encodeURIComponent(s);
}

let feachHomeList = (isRefreshing, isLoading) => {
    return {
        type: types.FETCH_HOME_LIST,
        // isLoadMore: isLoadMore,
        isRefreshing: isRefreshing,
        isLoading: isLoading,
    }
}

let receiveHomeList = (homeList) => {
    // console.log(homeList)
    return {
        type: types.RECEIVE_HOME_LIST,
        homeList: homeList,
    }
}

let feachSeaUGoList = (isRefreshing, isLoading) => {
    return {
        type: types.FETCH_SEAUGO_LIST,
        // isLoadMore: isLoadMore,
        isRefreshing: isRefreshing,
        isLoading: isLoading,
    }
}

let receiveSeaUGoList = (uGoList) => {
    // console.log(homeList)
    return {
        type: types.RECEIVE_SEAUGO_LIST,
        uGoList: uGoList,
    }
}
