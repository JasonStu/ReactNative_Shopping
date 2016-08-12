

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
    PixelRatio,
    Platform
} from 'react-native';
import Common from '../Commom/constants';

export default class Home4 extends Component {
    constructor(props) {
        super(props);
        // console.log(props)

    }
    render() {
        // let imageHeight = parseInt((Platform.OS === 'ios') ? this.props.module.moduleHeight / 2 : this.props.module.moduleHeight);
        // console.log('imageHeight====>' + imageHeight);
        return (

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white' }}>
                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={()=>{alert('我是4')} }
                    >
                    <Image
                        source={{ uri: this.props.module.moduleDetail[0].image }}
                        style={{ width: Common.window.width / 3, height: 150 }}
                        />
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={()=>{alert('我是4')} }
                    >
                    <Image
                        source={{ uri: this.props.module.moduleDetail[1].image }}
                        style={{ width: Common.window.width * 1 / 3, height: 150 }}
                        />
                </TouchableOpacity>

                <TouchableOpacity
                    activeOpacity={0.75}
                    onPress={()=>{alert('我是4')} }
                    >
                    <Image
                        source={{ uri: this.props.module.moduleDetail[2].image }}
                        style={{ width: Common.window.width * 1 / 3, height: 150 }}
                        />
                </TouchableOpacity>
            </View>

        );
    }
}















