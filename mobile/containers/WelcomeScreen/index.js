import React, { Component } from 'react'
import { Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Link } from '../../components/Link';
import { Button } from '../../components/Button';

import styles from './styles.js'

export default class WelcomeScreen extends Component {
  render() {
    const { width } = Dimensions.get('window');
    return (
      <View style={styles.container}>
        <Text style={styles.h}>Welcome!</Text>
        <Text style={styles.h2}>Swipe to start.</Text>
        <ScrollView
          horizontal={true}
          decelerationRate={0}
          snapToInterval={width - 100}
          snapToAlignment={"center"}>
          <View style={[styles.element, { width: width - 100 }]}>
            <Image
              style={styles.image}
              source={require('../../images/picture.png')} />
            <Text style={styles.title}>Its beeing said that a picture is worth a thousand words.</Text>
          </View>

          <View style={[styles.element, { width: width - 100 }]}>
            <Image
              style={styles.image}
              source={require('../../images/video.png')} />
            <Text style={styles.title}>And that we perceive about 24 images in one second watching a video</Text>
          </View>
          
          <View style={[styles.element, { width: width - 100 }]}>
            <Image
              style={styles.image}
              source={require('../../images/video.png')} />
            <Text style={styles.title}>And that we perceive about 24 images in one second watching a video</Text>
          </View>

          <View style={[styles.element, { width: width - 100 }]}>
            <Image
              style={[styles.image, { width: 120, height: 50, marginVertical: 20 }]}
              source={require('../../images/covideo-logo-dark.png')} />
            <Text style={styles.title}>With that in mind, we can help you deliver millions of words in just minutes.</Text>
          </View>

        </ScrollView>
        <TouchableOpacity
          onPress={this.props.onLogout}>
          <Image
            style={{ resizeMode: 'contain', height: 50, width: 50,marginTop:50 }}
            source={require('../../images/logout.png')} />
        </TouchableOpacity>
      </View>

    );
  }
}