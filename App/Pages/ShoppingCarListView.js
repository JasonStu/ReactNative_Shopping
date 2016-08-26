import React, { Component, PropTypes} from 'react';
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
const propTypes = {
    shopDate: PropTypes.any,

};

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

        return (
            <View style={styles.row}>
                <ShoppingCarListViewCell module={rowDate} {...this.props}/>
                <View style={{ width: Common.window.width, height: Common.window.height / 70 }}></View>
            </View>
        );
    }
    render() {
        const { ShopCarReducer} = this.props;

        return (
            <View style={styles.StyleFor18}>
                {ShopCarReducer.isLoading ? <Loading /> :
                    <View >
                        <ListView
                            dataSource={this.state.dataSource.cloneWithRows(this.props.shopDate.shopcargroup ? this.props.shopDate.shopcargroup : []) }
                            renderRow={this._renderRow}

                            enableEmptySections={true}
                            initialListSize= {10}
                            style={styles.listView}
                            />
                    </View>
                }
            </View>
        );

    }
}

const styles = StyleSheet.create({
    row: {
        width: Common.window.width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    listView: {
        backgroundColor: 'rgb(230, 230, 230)',
    },
    StyleFor18: {
        flexDirection: 'row',
        height: Common.window.height - 60 - 20 - 40 - 40,
        width: Common.window.width,
    },

    text1: {
        marginLeft: 10,
    }
});














