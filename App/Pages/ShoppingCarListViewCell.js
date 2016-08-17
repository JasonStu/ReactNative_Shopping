import React, { Component ,PropTypes} from 'react';
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
const propTypes = {
    module: PropTypes.array.isRequired,

};
const cellHeight = Common.window.width / 3;

export default class ShoppingCarListViewCell extends Component {
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
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.row}>
                    <View style={styles.imgAndButton}>
                        <TouchableOpacity
                            activeOpacity={0.75}
                            onPress={() => { alert('选中按钮') } }
                            >
                            <Text >选中</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bigCell}>
                        <View style={styles.title}>
                            <Text style={{fontSize:11}}>{rowDate.name}</Text>

                        </View>
                        <View style={styles.tradeName}>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.img}>
                                    <Image
                                        source={{ uri: rowDate.pic}}
                                        style={{ width: cellHeight * 3 / 5 -5, height: cellHeight * 3 / 5-5 }}
                                        />
                                </View>
                                <View style={styles.shopDetial}>
                                    <Text style={{ height: cellHeight * 4 / 5 / 3 ,fontSize:11}}>{'颜色:'+rowDate.color}</Text>
                                    <Text  style={{ height: cellHeight * 4 / 5 / 3 ,fontSize:11}}>{'尺寸:'+rowDate.size}</Text>
                                    <Text style={{ height: cellHeight * 4 / 5 / 3 ,fontSize:11}}>{'发货:'+rowDate.merchant}</Text>
                                </View>
                            </View>
                            <View style={styles.priceAndCound}>
                                <Text style={{ height: cellHeight * 4 / 5 / 3 ,fontSize:11}}>¥456</Text>
                                <Text style={{ height: cellHeight * 4 / 5 / 3 ,fontSize:11}}>X4</Text>

                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ width: Common.window.width, height: Common.window.height / 60 ,backgroundColor:'white'}}>
                </View>
            </View>
        );
    }
    _renderHeader(object) {
        return (
            <View style={{ width: Common.window.width, height: 50, backgroundColor: 'white' }}>
            </View>
        );
    }
    render() {

        return (
            <View style={styles.StyleFor18}>

                <View >
                    <ListView
                        dataSource={this.state.dataSource.cloneWithRows(this.props.module ? this.props.module : []) }
                        renderRow={this._renderRow}
                        // dataSource={this.state.dataSource.cloneWithRows([1, 2]) }
                        renderHeader= {
                            this._renderHeader.bind(this)
                        }
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
    priceAndCound: {
        backgroundColor: 'white',
        marginTop: cellHeight / 5,
        // height: cellHeight * 3 / 5,



    },
    img: {
        // backgroundColor: 'yellow',
        width: cellHeight * 3 / 5,
         height: cellHeight * 3 / 5 ,
         borderColor:'gray',
         borderWidth:1,
                 marginTop:15,

    },
    shopDetial: {
        backgroundColor: 'white',
        width: Common.window.width*3 /6,
        marginLeft:5,
        marginTop:5,

    },

    tradeName: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    imgAndButton: {
        backgroundColor: 'white',
        width: Common.window.width / 10,
        // height: cellHeight,
        marginLeft: 10,

        alignItems: 'center',
        justifyContent: 'center',

    },
    bigCell: {
        backgroundColor: 'white',

    },

    title: {
        backgroundColor: 'white',
        width: Common.window.width * 4 / 5,
        // height: cellHeight / 5,


    },
    row: {
        // height: cellHeight,
        width: Common.window.width,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: 'white',
        flexDirection: 'row',

    },
    listView: {
    },
    StyleFor18: {
        flexDirection: 'row',
        width: Common.window.width,
    },

    text1: {
        marginLeft: 10,
    }
});














