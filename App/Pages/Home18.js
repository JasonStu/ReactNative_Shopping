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


export default class Home18 extends Component {
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
                    // onPress={alert('hello') }
                    >
                    <Image
                        source={{ uri: rowDate.image }}
                        style={styles.rowDateImage}
                        />
                    <Text style={{ marginTop: 10, color: 'red', fontSize: 15, textAlign: 'center' }}>{'¥'+rowDate.secSkillPrice} </Text>
                    <Text style={{color: 'gray', fontSize: 13, textAlign: 'center' ,textDecorationLine: 'line-through'}}>{'¥'+rowDate.publicPrice} </Text>
                </TouchableOpacity>
            </View>
        );
    }
    render() {

        return (
            <View style={styles.StyleFor18}>
                <View style={styles.UGoImageStyle}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            source={{ uri: this.props.listDate.secKillImg }}
                            style={styles.UGoImage}
                            />
                        <Text style={styles.text1}>距离结束 17: 04: 39</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginRight: 10 }}>更多</Text>
                        <Icon name={'md-arrow-dropright'} size={30} style={{ marginRight: 10 }}/>
                    </View>

                </View>
                <View style={{ height: 120, backgroundColor: 'red' }}>
                    <ListView
                        horizontal={true}
                        dataSource={this.state.dataSource.cloneWithRows(this.props.listDate.moduleDetail ? this.props.listDate.moduleDetail : []) }
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
        height: 100,
        width: Common.window.width / 4,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
    },
    rowDateImage: {
        height: 70,
        width: 70,
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
    UGoImage: {
        marginLeft: 10,
        height: 20,
        width: 70,
    },
    UGoImageStyle: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 30,
        backgroundColor: 'white',

    },
    text1: {
        marginLeft: 10,
    }
});














