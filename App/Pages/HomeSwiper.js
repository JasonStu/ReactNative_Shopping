import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ListView,
    PixelRatio
} from 'react-native';
import Common from '../Commom/constants';
import Swiper from 'react-native-swiper';
// const propTypes = {
//   bannerDate: PropTypes.array.isRequired
// };
export default class HomeSwiper extends Component {
    constructor(props) {
        super(props);
        // console.log(props)
    }
    render() {
        return (
            <Swiper
                height={150}
                loop={true}
                autoplay={true}
                dot={<View style={styles.customDot} />}
                activeDot={<View style={styles.customActiveDot} />}
                paginationStyle={{
                    bottom: 10
                }}
                >
                {this.props.bannerDate.moduleDetail.map((banner) => {
                    return (
                        <TouchableOpacity key={banner.title} activeOpacity={0.75}
                            onPress={() => { alert('我是banner') } }
                            >
                            <Image
                                style={styles.bannerImage}
                                source={{ uri: banner.image }}
                                />
                        </TouchableOpacity>
                    )
                }) }
            </Swiper>);
    }
}

const styles = StyleSheet.create({
    customDot: {
        backgroundColor: '#ccc',
        height: 1.5,
        width: 15,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
    },
    customActiveDot: {
        backgroundColor: 'white',
        height: 1.5,
        width: 15,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
    },
    bannerImage: {
        height: 150,
        width: Common.window.width,
    },
});


