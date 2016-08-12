/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    WebView
} from 'react-native';

import SearchHeader from '../Components/SearchHeader';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Home_Main from '../Components/Home_Main';
import Common from '../Commom/constants';


export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <SearchHeader
                    searchAction={() => {
                        alert('search')
                    } }
                    scanAction={() => alert('scan') }
                    />
                <ScrollableTabView

                    renderTabBar={() => <DefaultTabBar underlineHeight={2} textStyle={{ fontSize: 13, marginTop: 6 }} style={{ height: 30 }}
                        />}
                    tabBarBackgroundColor="#fcfcfc"
                    tabBarUnderlineColor="red"
                    tabBarActiveTextColor="red"
                    tabBarInactiveTextColor="gray"
                    tabBarPosition='top'
                    >
                    <View tabLabel="首页" style={styles.center}>
                        {/* 1 -> 就是代表首页的意思*/}
                        <Home_Main {...this.props} type ={1}/>
                    </View>

                    <View tabLabel="海外购" style={styles.center}>
                        {/* 2 -> 就是代表海外购的意思*/}

                        <Home_Main {...this.props} type ={2}/>
                    </View>
                    <View tabLabel="分享购" style={styles.center}>
                        <WebView style={styles.webview_style}
                            source={{ url: 'http://m.yougou.com/p-7864a7fa0bd24384b8871c8375a08060' }}                     
                                //    startInLoadingState={true}
                            domStorageEnabled={true}
                            javaScriptEnabled={true}
                            >
                        </WebView>
                    </View>

                </ScrollableTabView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: 'rgb(240, 240, 240)'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(240, 240, 240)'

    },
    webview_style:{
        height:Common.window.height-90-60,
        width:Common.window.width,
    }
});
