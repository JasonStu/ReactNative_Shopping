/**
 * Created by jason .
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
// import Common from '../common/constants';
let window = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
}

export default class SearchHeader extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <Image
                    style={styles.searchIcon}
                    source={require('../Img/logo_b.png') }
                    />
                <TouchableOpacity
                    activeOpacity={0.75}
                    style={styles.searchInput}
                    onPress={this.props.searchAction}
                    >
                    <Image
                        style={styles.scanIcon}
                        source={require('../Img/img_search.png') }
                        />
                    <Text style={styles.searchPlaceholder}>请输入关键字或者商品编号</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
    },

    searchInput: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 32,
        width: window.width - 60 - 15 * 2,
        margin: 6,
        padding: 10,
        backgroundColor: 'rgb(245, 246, 247)',
        borderRadius: 2,
    },

    searchIcon: {
        width: 50,
        height: 30,
    },

    scanIcon: {
        width: 15,
        height: 15,
    },

    searchPlaceholder: {
        marginLeft: 10,
        textAlign: 'center',
        fontSize: 12,
        color: 'gray'
    }
})