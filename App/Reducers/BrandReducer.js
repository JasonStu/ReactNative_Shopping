

import * as types from '../Action/ActionType';

const initialState = {
    BrandDate: [],
    isLoading: true,
    isRefreshing: false,
};

let brandReducer = (state = initialState, action) => {
    // console.log(state)
    switch (action.type) {
        case types.FETCH_BRAND_LIST:
            return Object.assign({}, state, {
                isRefreshing: action.isRefreshing,
                isLoading: action.isLoading
            })

        case types.RECEIVE_BRAND_LIST:
            return Object.assign({}, state, {
                BrandDate: action.brandDate,
                isRefreshing: false,
                isLoading: false,
            })

        default:
            return state;
    }
}
export default brandReducer;


