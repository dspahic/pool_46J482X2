import React, { Component } from 'react'
import { Text, View, Image, TextInput, ScrollView } from 'react-native';
import { Link } from '../../components/Link';
import { Button } from '../../components/Button';

import styles from './styles.js'

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isAttempting: false,
            isFailedAttempt: false,
            failedLoginMsg: ""
        }
        this.handleFailedLogin = this.handleFailedLogin.bind(this);
    }

    handlePressLogin = () => {
        const { username, password } = this.state;
        const isValid = this.isEmailValid(username);
        if(!isValid){
            this.setState({ isAttempting: false, isFailedAttempt: false, failedLoginMsg: "Invalid username, please enter valid email" })
            return;
        }
        var data = { username: "demo@example.com", password: "example" };
        this.setState({ isAttempting: true });
        //post data
        setTimeout(function () {
            var success = data.username == username && data.password == password;
            this.setState({ isFailedAttempt: !success });
            if (!success) {
                this.handleFailedLogin();
            } else {
                this.setState({ isAttempting: false });
                this.props.onLogin();
            }

        }.bind(this), 1500);

    }
    isEmailValid(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    handleFailedLogin() {
        var waitTime = 10;
        var counter = 0
        var interval = setInterval(function () {
            counter++;
            var msg = "Failed to login. Please wait " + (waitTime - counter) + " seconds";
            this.setState({ failedLoginMsg: msg });
            if (counter == waitTime) {
                this.setState({ isAttempting: false, isFailedAttempt: false, failedLoginMsg: "" });
                clearInterval(interval);
            }
        }.bind(this), 1000)

    }


    render() {
        const isEditable = !this.state.isAttempting;
        return (
            <ScrollView style={[{ backgroundColor: '#e8ebef' }]} keyboardShouldPersistTaps='always'>
                <View style={styles.container}>
                    <Image
                        style={[styles.stretch, { resizeMode: 'center', width: 240, height: 220, alignSelf: 'center', marginTop: 20 }]}
                        source={require('../../images/covideo-logo-dark.png')} />

                    <Text style={styles.instructions}>{this.state.failedLoginMsg}</Text>
                    <TextInput
                        placeholder={"Username"}
                        style={styles.input}
                        onChangeText={(input) => this.setState({ username: input })}
                        value={this.state.username}
                        editable={isEditable}
                        autoCorrect={false}
                        autoCapitalize='none'
                        returnKeyType='next'
                        onSubmitEditing={() => this.refs.password.focus()} />
                    <TextInput
                        ref='password'
                        placeholder={"Password"}
                        style={styles.input}
                        onChangeText={(input) => this.setState({ password: input })}
                        value={this.state.password}
                        editable={isEditable}
                        secureTextEntry
                        autoCorrect={false}
                        autoCapitalize='none'
                        returnKeyType='go'
                        onSubmitEditing={() => this.handlePressLogin()} />
                    <Button
                        text="Sign In"
                        backgroundColor='#ff9021'
                        onPress={this.handlePressLogin}
                        isLoading={this.state.isAttempting} />

                    <View style={styles.signUp}>
                        <Button
                            text="Sign Up"
                            backgroundColor='#001c5e' />
                        <Link
                            styles={{ marginTop: 16, marginBottom: 16 }}
                            text="Forgot password?"
                            color='#001c5e'
                            fontSize={15} />
                        <Text style={styles.instructions}>
                            By Signing up or Login in you agree with our
                        </Text>
                        <Link
                            text="Terms and Conditions"
                            color='#ed4742'
                            fontSize={12} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}