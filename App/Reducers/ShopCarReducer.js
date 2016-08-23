

import * as types from '../Action/ActionType';

const initialState = {
    //购物车数据
    ShopDate: {},
    isLoading: true,
    isRefreshing: false,
    //所有价格
    allPrices: 0,
    //carbar 全选的状态
    isSelectAll: false,
    //单选一个
    isSelectOne: false,
    // 购物车商品数量
    cartShopCount: 0,
    // 当前所选商品数量
    currentSelectCartGoodsCount: 0,
    //单个商品ID
    shopID: 0,
    //已选择的商品数组
    selectShopArr: [],
    //所有商品数组
    allShopArr: [],

};


let shopCarReducer = (state = initialState, action) => {
    // console.log(state)
    switch (action.type) {
        //获取全部
        case types.FETCH_SHOPCART_LIST:
            return Object.assign({}, state, {
                isRefreshing: action.isRefreshing,
                isLoading: action.isLoading
            })

        case types.RECEIVE_SHOPCART_LIST:
            let shopArray = [];
            let shopPrices = 0;
            action.shopCarDate.shopcargroup.map((object, i) => {
                object.car_productlist.map((object, i) => {
                    state.allShopArr.push(object);
                    state.selectShopArr.push(object);
                    state.allPrices += parseInt(object.price1.value);

                });
            });

            return Object.assign({}, state, {
                ShopDate: action.shopCarDate,
                isRefreshing: false,
                isLoading: false,
                isSelectAll: true,
            })
        //全选全部
        case types.FETCH_SELECTAll_LIST:
            return Object.assign({}, state, {
                isLoading: action.isLoading
            })

        case types.SELECTAll_SHOPCART_LIST:
            state.selectShopArr = [];
            state.ShopDate.shopcargroup.forEach(function (object) {
                object.car_productlist.forEach(function (object) {
                    object.buyStatus = action.isSelectAll;

                    if (action.isSelectAll === true) {
                        state.allPrices += parseInt(object.price1.value);
                        state.selectShopArr.push(object);

                    } else {
                        state.allPrices -= parseInt(object.price1.value);
                        state.selectShopArr.pop(object);

                    }
                }, this);

            }, this);



            return Object.assign({}, state, {
                ShopDate: state.ShopDate,
                isSelectAll: action.isSelectAll,
                isSelectOne: action.isSelectAll,
                isRefreshing: false,
                isLoading: false,
            })
        //单选一个
        case types.FETCH_SELECTONE_LIST:
            return Object.assign({}, state, {
                isLoading: action.isLoading
            })

        case types.SELECTONE_SHOPCART_LIST:

            state.ShopDate.shopcargroup.map((object, i) => {
                object.car_productlist.map((object, i) => {
                    if (object.id == action.shopID) {
                        object.buyStatus = action.isSelectOne;
                    }
                    // console.log(state.selectShopArr.indexOf(object))
                    if (action.isSelectOne === true) {
                        if (object.id == action.shopID) {
                            state.allPrices += parseInt(object.price1.value);

                            state.selectShopArr.push(object);
                        }

                    } else {
                        if (object.id == action.shopID) {
                            state.allPrices -= parseInt(object.price1.value);

                            state.selectShopArr.pop(object);

                        }
                    }
                    state.isSelectAll = state.allShopArr.length == state.selectShopArr.length;
                })

            })
            // state.ShopDate.shopcargroup.forEach(function (object) {
            //     object.car_productlist.forEach(function (object) {
            //           if (object.buyStatus === true){
            //               selectShopArr.push(object.buyStatus);
            //         } 
            //     }, this);

            // }, this);

            return Object.assign({}, state, {
                ShopDate: state.ShopDate,
                isSelectAll: state.isSelectAll,
                isSelectOne: action.isSelectOne,
                isRefreshing: false,
                isLoading: false,
            })



        default:
            return state;
    }
}
export default shopCarReducer;


