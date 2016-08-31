






import React from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
} from 'react-native';

export default class StatusBarIOS extends React.Component {
    render() {
        return (
            <View >
                <StatusBar {...this.props}/>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    statusBar: {
        flex: 1,
        height: 20,
        
    }
})