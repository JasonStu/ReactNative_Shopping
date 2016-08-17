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
import Icon from 'react-native-vector-icons/Ionicons';
import ShoppingCarListViewCell from '../Pages/ShoppingCarListViewCell';

let date = Common.ShoppingCarDate;

export default class ShoppingCarListView extends Component {
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

    _renderRow(rowDate) {
                    console.log(rowDate)

        return (
            <View style={styles.row}>
            <ShoppingCarListViewCell module={rowDate.car_productlist} {...this.props}/>
            <View style={{width:Common.window.width,height:Common.window.height/70}}></View>
            </View>
        );
    }
    render() {

        return (
            <View style={styles.StyleFor18}>

                <View >
                    <ListView
                        dataSource={this.state.dataSource.cloneWithRows( date.shopcargroup) }
                        renderRow={this._renderRow}
                        // dataSource={this.state.dataSource.cloneWithRows([1,2,3,3,32,3,3,32,3,3,32,3,3,32,3,3,32,3,3,3,3]) }
                        // dataSource={this.state.dataSource.cloneWithRows([[1,2,3],[1,2,3,4,4,4,4,4,4,4],[1],[1,2],[1,2,3,4,4,4],[1],[1,2],[1,2,3,3]]) }

                        enableEmptySections={true}
                        initialListSize= {10}
                        style={styles.listView}
                        />
                </View>

            </View>
        );

    }
}

const styles = StyleSheet.create({
    row: {
        width: Common.window.width ,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listView: {
        backgroundColor: 'rgb(230, 230, 230)',
    },
    StyleFor18: {
        flexDirection: 'row',
         height: Common.window.height-60-20-40,
        width: Common.window.width ,
    },

    text1: {
        marginLeft: 10,
    }
}); 














