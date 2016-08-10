

import * as types from './ActionTypes';
import Util from '../Common/utils';

export let home = (tag, offest, limit, isLoadMore, isRefreshing, isLoading) => {
    let URL = 'http://api.huaban.com/fm/wallpaper/pins?limit=';
    if (limit) URL += limit;
    offest ? URL += '&max=' + offest : URL += '&max=';
    tag ? URL += '&tag=' + encode_utf8(tag) : URL += '&tag='
    // console.log(URL)
    
    return dispatch => {
        dispatch(feachHomeList(isLoadMore, isRefreshing, isLoading));
        return Util.get(URL, (response) => {
            //  console.log(response)
            //  debugger
            dispatch(receiveHomeList(response.pins))
        }, (error) => {
            // console.log('加载首页数据error==>' + error);
            // // debugger
            dispatch(receiveHomeList([]));
        });

    }

}

function encode_utf8(s) {
    return encodeURIComponent(s);
}

let feachHomeList = (isLoadMore, isRefreshing, isLoading) => {
    return {
        type: types.FETCH_HOME_LIST,
        isLoadMore: isLoadMore,
        isRefreshing: isRefreshing,
        isLoading: isLoading,
    }
}

let receiveHomeList = (homeList) => {
    return {
        type: types.RECEIVE_HOME_LIST,
        homeList: homeList,
    }
}
