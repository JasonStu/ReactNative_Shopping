import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    ListView,
    PixelRatio
} from 'react-native';
import Common from '../Commom/constants';
import Swiper from 'react-native-swiper';
import HomeSwioer from '../Pages/HomeSwiper';
import HomeList102 from '../Pages/HomeList102';
import Home104 from '../Pages/Home104';
import Home18 from '../Pages/Home18';
import Home11 from '../Pages/Home11';



export default class Home_Main extends Component {
    constructor(props) {
        super(props);
        // console.log(props)
        this._renderRow = this._renderRow.bind(this);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        };
    }
    render() {
        let homeList = Common.HomeDate;
        // console.log(homeList.module)

        return (
            <View style={styles.container}>

                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(homeList.module) }
                    renderRow={this._renderRow}
                    enableEmptySections={true}
                    initialListSize= {40}
                    style={styles.listView}
                    />

            </View>

        );

    }

    _renderRow(rowDate, rowID,rowIdentities) {
        console.log('rowIDssss============>'+rowIdentities);
        switch (parseInt(rowDate.moduleStyle)) {
            case 101:
                if (rowIdentities == parseInt(rowDate.modulePosition)-1) {
                    return (
                        <View >
                            <HomeSwioer bannerDate={rowDate}/>
                        </View>

                    );
                }

            case 102:
                if (rowIdentities == parseInt(rowDate.modulePosition)-1) {

                    return (
                        <View >
                            <HomeList102 listDate={rowDate}/>
                        </View>
                    );
                }
            case 104:
                if (rowIdentities == parseInt(rowDate.modulePosition)-1) {

                    return (
                        <View >
                            <Home104 module={rowDate}/>
                        </View>
                    );
                }
            case 18:
                if (rowIdentities == parseInt(rowDate.modulePosition)-1) {

                    return (
                        <View >
                            <Home18 listDate={rowDate}/>
                        </View>
                    );
                }
            case 11:
                if (rowIdentities == parseInt(rowDate.modulePosition)-1) {

                    return (
                        <View >
                            <Home11 module={rowDate}/>
                        </View>
                    );
                }
            default:
                return  (
                        <View style={{width:Common.window.width,height:100,backgroundColor:'blue'}}>
                            
                        </View>
                    );;
        }
    }

}
const styles = StyleSheet.create({
    container: {
        width: Common.window.width,
        height: Common.window.height - 90 - 50,
        backgroundColor: 'white',
    },
    contentContainer: {
        backgroundColor: "#ff0000",
    },


    listView: {
        height: Common.window.height - 90 - 60,
        backgroundColor: 'white',
    },

});
