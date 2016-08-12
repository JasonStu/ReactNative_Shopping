

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

export default class Home10 extends Component {
    constructor(props) {
        super(props);
        // console.log(props)

    }
    render() {
        let dateArray = this.props.module.moduleDetail;

        // let imageHeight = parseInt((Platform.OS === 'ios') ? this.props.module.moduleHeight / 2 : this.props.module.moduleHeight);
        // console.log('imageHeight====>' + imageHeight);
        return (

            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', backgroundColor: 'white' }}>
                <View style={{ alignItems: 'center', flexDirection: 'row', backgroundColor: 'rgb(240, 240, 240)',width:Common.window.width, height: this.props.module.moduleTitle !== '' ? 30 : 0 }}>
                    <View style={{ backgroundColor: 'red', width: 5, height: this.props.module.moduleTitle !== '' ? 20 : 0 }}>
                    </View>
                    <Text style={{ marginLeft: 10, fontSize: 15 }}>{this.props.module.moduleTitle}</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}>

                    {
                        dateArray.map((objet, i) => {

                            return (
                                <TouchableOpacity
                                    key={i}
                                    activeOpacity={0.75}
                                    style={{ flexDirection: 'column' }}
                                    onPress={() => { alert('这是10') } }
                                    >
                                    <Image
                                        source={{ uri: objet.image }}
                                        style={{ width: Common.window.width * 1 / dateArray.length - 2 / PixelRatio.get(), height: 130 }}
                                        />

                                </TouchableOpacity>
                            )
                        })
                    }
                </View>

            </View>

        );
    }
}















