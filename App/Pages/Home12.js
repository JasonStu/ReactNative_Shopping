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


export default class Home12 extends Component {
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
        return (
            <View style={styles.row}>
                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={()=>{alert('我是12')} }
                    >
                    <Image
                        source={{ uri: rowDate.image }}
                        style={styles.rowDateImage}
                        />
                    <Text numberOfLines={1} style={{ fontSize: 11, width: 100 }}> {rowDate.commodityName}</Text>

                    <Text style={{ color: 'red', fontSize: 15 }}>{'¥' + rowDate.secSkillPrice} </Text>

                </TouchableOpacity>
                
            </View>
        );
    }
    render() {

        return (
            <View style={styles.StyleFor18}>

                <View >
                    <ListView
                        horizontal={true}
                        dataSource={this.state.dataSource.cloneWithRows(this.props.module.moduleDetail ? this.props.module.moduleDetail : []) }
                        renderRow={this._renderRow}
                        contentContainerStyle={styles.list}
                        enableEmptySections={true}
                        initialListSize= {40}
                        style={styles.listView}
                        />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        height: 180,
        width: Common.window.width / 3.5 ,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    rowDateImage: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 130,
        width: 100,
    },
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'nowrap',

    },
    listView: {
        backgroundColor: 'white',
    },
    StyleFor18: {
        flexDirection: 'column',
        backgroundColor: 'black',
    },

    text1: {
        marginLeft: 10,
    }
});














