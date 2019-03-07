import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native';

import { StyleSheet } from 'react-native';

export const Button = props => (
    <TouchableOpacity
        style={[styles.button, { backgroundColor: props.backgroundColor }]}
        onPress={props.onPress}
        disabled={props.isLoading}>
        { props.isLoading ?
            <ActivityIndicator size="large" color={styles.text.color} /> :
            <Text style={styles.text}>{props.text}</Text> }
    </TouchableOpacity>
)

Button.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    backgroundColor: PropTypes.string,
    isLoading: PropTypes.bool,
}
Button.defaultProps = {
    text: 'Button',
    backgroundColor: 'black',
    isLoading: false,
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 16,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 5,
        height: 50
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
})