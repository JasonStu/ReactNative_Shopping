

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

export default class Home1 extends Component {
    constructor(props) {
        super(props);
        // console.log(props)

    }
    render() {
        // let imageHeight = parseInt((Platform.OS === 'ios') ? this.props.module.moduleHeight / 2 : this.props.module.moduleHeight);
        // console.log('imageHeight====>' + imageHeight);
        return (

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.75}
                    onPress={()=>{alert('我是1')} }
                        >
                        <Image
                            source={{ uri: this.props.module.moduleDetail[0].image }}
                            style={{ width: Common.window.width / 3 + 20, height: 180 }}
                            />
                    </TouchableOpacity>
                    <View style={{ backgroundColor: 'gray', width: 2 / PixelRatio.get(), height: 180 }}/>

                </View>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <TouchableOpacity
                        activeOpacity={0.75}
                    onPress={()=>{alert('我是1')} }
                        >
                        <Image
                            source={{ uri: this.props.module.moduleDetail[1].image }}
                            style={{ width: Common.window.width * 2 / 3 - 20, height: 70 }}
                            />
                    </TouchableOpacity>

                    <View style={{ backgroundColor: 'gray', width: Common.window.width * 2 / 3, height: 2 / PixelRatio.get() }}/>
                    <TouchableOpacity
                        activeOpacity={0.75}
                    onPress={()=>{alert('我是1')} }
                        >
                        <Image
                            source={{ uri: this.props.module.moduleDetail[2].image }}
                            style={{ width: Common.window.width * 2 / 3 - 20, height: 110 }}
                            />
                    </TouchableOpacity>

                </View>
            </View>

        );
    }
}















