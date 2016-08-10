

import * as types from '../Action/ActionType';

const initialState = {
    HomeList: [],
    isLoading: true,
    isLoadMore: false,
    isRefreshing: false,
};

let homeReducer = (state = initialState, action) => {
    // console.log(action)
    
    switch (action.type) {
        case types.FETCH_HOME_LIST:
            return Object.assign({}, state, {
                isLoadMore: action.isLoadMore,
                isRefreshing: action.isRefreshing,
                isLoading: action.isLoading
            })
            
        case types.RECEIVE_HOME_LIST:
        
            // console.log(action);

            return Object.assign({}, state, {
                HomeList: state.isLoadMore ? state.HomeList.concat(action.homeList) : action.homeList,

                isRefreshing: false,
                isLoading: false,
            })

        case types.RESET_STATE:
            return Object.assign({},state,{
                HomeList:[],
                isLoading:true,
            })
        default:
            return state;
    }
}

export default homeReducer;
