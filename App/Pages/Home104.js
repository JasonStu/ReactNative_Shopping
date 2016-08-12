

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

export default class Home104 extends Component {
    constructor(props) {
        super(props);
        // console.log(props)
    }
    render() {
        return (

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', height: 40, backgroundColor: 'white' }}>
                <Image
                    source={{ uri: this.props.module.moduleDetail[0].image }}
                    style={{ width: 100, height: 20, marginLeft: 10 }}
                    />
                <View style={{ marginLeft: 10, backgroundColor: 'gray', width: 2 / PixelRatio.get(), height: 30 }}/>
                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={() => { alert('我是104') } }
                    >
                    <Text numberOfLines={1} style={{ fontSize: 12, width: Common.window.width - 150 }}> {this.props.module.moduleDetail[0].title}</Text>
                </TouchableOpacity>

            </View>

        );
    }
}















