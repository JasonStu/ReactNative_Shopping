

import * as types from '../Action/ActionType';

const initialState = {
    //购物车数据
    ShopDate: {},
    isLoading: true,
    isRefreshing: false,
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
    //改变购物车状态
    isChangeShopCar: false,

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
            // if (action.isSelectAll === true) { state.allPrices = 0 }
            state.ShopDate.shopcargroup.forEach(function (object) {
                object.car_productlist.forEach(function (object) {
                    object.buyStatus = action.isSelectAll;

                    if (action.isSelectAll === true && object.state === '1') {
                        state.selectShopArr.push(object);

                    } else if (action.isSelectAll === false && object.state === '0'){
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
                        if (object.id === action.shopID) {

                            state.selectShopArr.push(object);
                        }

                    } else {
                        if (object.id === action.shopID) {

                            state.selectShopArr.splice(state.selectShopArr.indexOf(object), 1)

                        }
                    }
                    state.isSelectAll = state.allShopArr.length == state.selectShopArr.length;
                })

            })

            return Object.assign({}, state, {
                ShopDate: state.ShopDate,
                isSelectAll: state.isSelectAll,
                isSelectOne: action.isSelectOne,
                isRefreshing: false,
                isLoading: false,
            })

        //改变购物车状态
        case types.CHANEG_SHOPCAR_LIST:
            return Object.assign({}, state, {
                isChangeShopCar: action.isChange
            })

        //改变商品数量
        case types.CHANEG_SHOP_COUNT:
            state.ShopDate.shopcargroup.forEach(function (object) {
                object.car_productlist.forEach(function (object) {
                    var shopIndex = state.selectShopArr.indexOf(object);

                    if (object.id === action.shopID && action.isChangeCount === true) {
                        object.number++;

                        // if (object.number > 0 && object.number <= 1) {
                        //     object.buyStatus = true;
                        //     state.selectShopArr.splice(shopIndex, 0, object)
                        //     state.isSelectAll = state.allShopArr.length == state.selectShopArr.length;

                        // }

                    } else if (object.id === action.shopID && object.number > 1 && action.isChangeCount === false) {

                        object.number--;

                        // if (object.number < 1) {
                        //     // alert('执行')
                        //     object.buyStatus = false;
                        //     state.selectShopArr.splice(shopIndex, 1)
                        //     state.isSelectAll = state.allShopArr.length == state.selectShopArr.length;

                        // }

                    }
                }, this);

            }, this);
            return Object.assign({}, state, {
                ShopDate: state.ShopDate,
            })

        //删除商品数量
        case types.DELETE_SHOPCAR_LIST:
            var isDelete = false;
            // var deObj = {};
            // var shopIndex = -100;
            state.ShopDate.shopcargroup.forEach(function (object) {

                object.car_productlist.forEach(function (object) {
                   var  shopIndex = state.selectShopArr.indexOf(object);

                    if (state.selectShopArr.indexOf(object) !== -1) {
                        object.state = '0';
                        state.selectShopArr.splice(state.selectShopArr.indexOf(object), 1)
                        state.allShopArr.splice(state.selectShopArr.indexOf(object), 1)
                    }
                }, this);

            }, this);
            return Object.assign({}, state, {
                ShopDate: state.ShopDate,
            })

        default:
            return state;
    }
}
export default shopCarReducer;

let method = (object, array) => {
    array.forEach(function (element) {

    }, this);
}