

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

export default class Home8 extends Component {
    constructor(props) {
        super(props);
        // console.log(props)

    }
    render() {
        let dateArray = this.props.module.moduleDetail;

        // let imageHeight = parseInt((Platform.OS === 'ios') ? this.props.module.moduleHeight / 2 : this.props.module.moduleHeight);
        // console.log('imageHeight====>' + imageHeight);
        return (

            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white' }}>

                {
                    dateArray.map((objet, i) => {

                        return (
                            <TouchableOpacity
                                key={i}
                                activeOpacity={0.75}
                                style={{flexDirection: 'column'}}
                                // onPress={alert('hello') }
                                >
                                <Image
                                    source={{ uri: objet.image }}
                                    style={{ width: Common.window.width * 1 / dateArray.length - 2 / PixelRatio.get(), height: 150 }}
                                    />

                            </TouchableOpacity>
                        )
                    })
                }
            </View>

        );
    }
}















