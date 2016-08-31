









import React, {Component, PropTypes} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import NavBar, { NavButton, NavButtonText, NavTitle } from 'react-native-nav'

const propTypes = {
    onPress2Left: PropTypes.func,
    onPress2Right: PropTypes.func,
    RightTitle:PropTypes.string
};


export default class ShoppingNavBar extends Component {
    render() {
        return (
            <NavBar style={styles}>
                <NavButton onPress={this.props.onPress2Left }>
                    <NavButtonText style={styles.buttonText1} >
                        {"编辑"}
                    </NavButtonText>
                </NavButton>
                <NavTitle style={styles.title}>
                    {"购物车"}
                </NavTitle>
                <NavButton onPress={this.props.onPress2Right }>
                    <NavButtonText style={styles.buttonText}>
                        {this.props.RightTitle}
                    </NavButtonText>
                </NavButton>
            </NavBar>
        )
    }
}
const styles = StyleSheet.create({
    statusBar: {
        backgroundColor: 'white',
        // marginTop:-20,
        // height: -20,
    },
    navBar: {
        backgroundColor: 'white',
    },
    title: {
        color: '#rgba(0, 0, 0, 1)',
    },
    buttonText: {
        color: '#rgba(0, 0, 0, 1)',
    },
       buttonText1: {
        color: '#rgba(0, 0, 0, 0)',
    },
})