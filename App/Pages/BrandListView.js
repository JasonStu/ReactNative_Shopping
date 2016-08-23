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
import Loading from '../Commom/Loading';
const propTypes = {
    module: PropTypes.array.isRequired,

};

export default class BrandListView extends Component {


    constructor(props) {
        super(props);
        console.log(props)
        this._renderRow = this._renderRow.bind(this);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        };
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.module !== this.props.module){
            return true;
        }
        return false;
    }

    _renderRow(rowDate) {
        return (
            <View style={styles.row}>

                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={() => { alert('我是BrandListView') } }
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center', flexDirection: 'column',
                        height: 100 - 10,
                        width: Common.window.width * 3 / 4 / 3 - 10,
                        backgroundColor: 'white'

                    }}

                    >
                    <Image
                        source={{ uri: rowDate.pic }}
                        style={styles.rowDateImage}
                        />
                    <Text numberOfLines={1}
                        style={{ fontSize: 11 }}
                        textAlign = {'center'}
                        >
                        {rowDate.name}
                    </Text>

                </TouchableOpacity>

            </View>
        );
    }
    render() {

        return (

            <View style={styles.bgStyle}>
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(this.props.module ? this.props.module : []) }
                    renderRow={this._renderRow}
                    contentContainerStyle={styles.list}
                    enableEmptySections={true}
                    initialListSize= {10}
                    style={styles.listView}
                    />
            </View>

        );
    }
}

const styles = StyleSheet.create({
    row: {
        height: 100,
        width: Common.window.width * 3 / 4 / 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    rowDateImage: {
        justifyContent: 'center',
        alignItems: 'center',
        height: Common.window.width * 3 / 4 / 3 - 30,
        width: Common.window.width * 3 / 4 / 3 - 20,
    },
    list: {
        // justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    listView: {
        backgroundColor: 'rgb(240, 240, 240)',
        width: Common.window.width * 3 / 4,
        height: Common.window.height - 60 - 60
    },
    bgStyle: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',

    },

    text1: {
        marginLeft: 10,
    }
});














