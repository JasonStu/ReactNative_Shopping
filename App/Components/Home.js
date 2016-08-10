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
    View
} from 'react-native';

import SearchHeader from '../Components/SearchHeader';
import ScrollableTabView, {DefaultTabBar, ScrollableTabBar} from 'react-native-scrollable-tab-view';
import Home_Main from '../Components/Home_Main';


export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                <SearchHeader
                    searchAction={() => {

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
                        <Home_Main {...this.props}/>
                    </View>

                    <View tabLabel="海外购" style={styles.center}>
                        <Text >内容：海外购</Text>
                    </View>
                    <View tabLabel="分享购" style={styles.center}>
                        <Text >内容：分享购</Text>
                    </View>

                </ScrollableTabView>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: '#F5FCFF',
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
    },
});
