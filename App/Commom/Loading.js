/**
 * Created by ljunb on 16/6/2.
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicator,
} from 'react-native';

import Common from './constants';

export default class Loading extends React.Component {
    render() {
        return (
            <View style={styles.loading}>
                <ActivityIndicator color="white"/>
                <Text style={styles.loadingTitle}>加载中……</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loading: {
        backgroundColor: 'gray',
        height: 80,
        width: 100,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: (Common.window.height-90-70-80)/2,
        left: (Common.window.width-100)/2,
    },

    loadingTitle: {
        marginTop: 10,
        fontSize: 14,
        color: 'white'
    }
})