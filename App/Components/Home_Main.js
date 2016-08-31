





import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ListView,
    PixelRatio,
    InteractionManager,
} from 'react-native';
import Common from '../Commom/constants';
import Swiper from 'react-native-swiper';
import {HomeAction} from '../Action/HomeAction';
import Loading from '../Commom/Loading';


import HomeSwioer from '../Pages/HomeSwiper';
import HomeList102 from '../Pages/HomeList102';
import Home104 from '../Pages/Home104';
import Home18 from '../Pages/Home18';
import Home11 from '../Pages/Home11';
import Home4 from '../Pages/Home4';
import Home1 from '../Pages/Home1';
import Home8 from '../Pages/Home8';
import Home10 from '../Pages/Home10';
import Home12 from '../Pages/Home12';

let isRefreshing = false;
let isLoading = true;
let offest = '';
let tag = '';
let limit = 21;

export default class Home_Main extends Component {
    constructor(props) {
        super(props);
        this._renderRow = this._renderRow.bind(this);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        };
    }

    componentDidMount() {
        InteractionManager.runAfterInteractions(() => {
            const {dispatch, HomeReducer} = this.props;
            //    HomeReducer.isLoading = true;
            dispatch(HomeAction(this.props.type, tag, offest, limit, isRefreshing, isLoading));
        });
    }
    render() {
        const { HomeReducer } = this.props;
        let homeList = [];
        if (this.props.type === 1) { //首页

            homeList = HomeReducer.HomeList;
        } else {

            homeList = HomeReducer.UGOList;

        }

        // let homeList = HomeReducer.HomeList;

        return (
            <View style={styles.container}>
                {HomeReducer.isLoading ? <Loading /> :
                    <ListView
                        dataSource={this.state.dataSource.cloneWithRows(homeList.module ? homeList.module : []) }
                        renderRow={this._renderRow}
                        enableEmptySections={true}
                        initialListSize= {1}
                        style={styles.listView}
                        />
                }
            </View>

        );

    }

    _renderRow(rowDate, rowID, rowIdentities) {
        // console.log('rowIDssss============>'+rowIdentities);
        switch (parseInt(rowDate.moduleStyle)) {

            case 101:
                if (rowIdentities == parseInt(rowDate.modulePosition) - 1) {
                    return (
                        
                            <HomeSwioer bannerDate={rowDate}/>

                    );
                }

            case 102:
                if (rowIdentities == parseInt(rowDate.modulePosition) - 1) {

                    return (
                        
                            <HomeList102 listDate={rowDate}/>

                    );
                }
            case 104:
                if (rowIdentities == parseInt(rowDate.modulePosition) - 1) {

                    return (
                        
                            <Home104 module={rowDate}/>
                    );
                }
            case 18:
                if (rowIdentities == parseInt(rowDate.modulePosition) - 1) {

                    return (
                        
                            <Home18 listDate={rowDate}/>
                    );
                }
            case 11:
                if (rowIdentities == parseInt(rowDate.modulePosition) - 1) {

                    return (
                        
                            <Home11 module={rowDate}/>
                            
                    );
                }
            case 4:
                if (rowIdentities == parseInt(rowDate.modulePosition) - 1) {

                    return (
                        
                            <Home4 module={rowDate}/>
                    );
                }
            case 1:
                if (rowIdentities == parseInt(rowDate.modulePosition) - 1) {

                    return (
                        
                            <Home1 module={rowDate}/>
                    );
                }
            case 10:
                if (rowIdentities == parseInt(rowDate.modulePosition) - 1) {

                    return (
                        
                            <Home10 module={rowDate}/>
                    );
                }
            case 8:
                if (rowIdentities == parseInt(rowDate.modulePosition) - 1) {

                    return (
                        
                            <Home8 module={rowDate}/>
                    );
                }
            case 12:
                if (rowIdentities == parseInt(rowDate.modulePosition) - 1) {

                    return (
                        
                            <Home12 module={rowDate}/>
                    );
                }
            default:
                return (
                    <View style={{ width: Common.window.width, height: 100, backgroundColor: 'blue' }}>

                    </View>
                );;
        }
    }

}
const styles = StyleSheet.create({
    container: {
        flex:1,
        width: Common.window.width,
        height: Common.window.height -90-55,
        backgroundColor: 'rgb(240, 240, 240)',
        
    },
    contentContainer: {
        backgroundColor: 'rgb(240, 240, 240)'
    },


    listView: {
        
        backgroundColor: 'white',
    },
    cellStyle:{
        backgroundColor: 'rgb(240, 240, 240)'

    },

});
