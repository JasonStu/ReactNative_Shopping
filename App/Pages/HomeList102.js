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

export default class HomeList extends Component {
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
                    <Text style={{ marginTop: 10, color: 'gray', fontSize: 13, textAlign: 'center' }}>{rowDate.title} </Text>
                </TouchableOpacity>
            </View>
        );
    }
    render() {

        return (
            <View>
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(this.props.listDate.moduleDetail ? this.props.listDate.moduleDetail : []) }
                    renderRow={this._renderRow}
                    contentContainerStyle={styles.list}
                    enableEmptySections={true}
                    initialListSize= {8}
                    style={styles.listView}
                    />
                <View style={{ backgroundColor: 'gray', height: 2 / PixelRatio.get() }}/>
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
        height: 50,
        width: 50,
    },
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    listView: {
        backgroundColor: 'white',
    },
});














