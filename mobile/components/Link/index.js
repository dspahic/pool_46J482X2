import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text } from 'react-native';

import { StyleSheet } from 'react-native';

export const Link = props => (
    <TouchableOpacity
        style={[styles.link, props.styles]}
        onPress={props.onPress}>
        <Text style={[styles.text, { color: props.color, fontSize: props.fontSize }]}>{props.text}</Text>
    </TouchableOpacity>
)

Link.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    color: PropTypes.string,
    fontSize: PropTypes.number,
    styles:PropTypes.any
}
const styles = StyleSheet.create({
    link: {
        textAlign: 'center'
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
