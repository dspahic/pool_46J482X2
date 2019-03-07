import React, { Component } from 'react';
import Button from './../../components/Button';
import Checkbox from './../../components/Checkbox';
import logo from './../../img/covideo-logo-dark.svg';
import './style.css';

export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            remember: true,
            isLoading: true,
        }
    }
    handleChangeUsername(event) {
        this.setState({
            username: event.target.value
        });
    }
    handleChangePassword(event) {
        this.setState({
            password: event.target.value
        });
    }
    handleChangeRemember(event) {
        this.setState({
            remember: event.target.checked
        });
    }

    handleLogin(){
        this.props.onLogin();
    }

    render() {
        return (
            <div className="login-container">
                <div className="login-wrap">
                    <img src={logo} className="login-logo" alt="logo" />
                    <input
                        type="text"
                        className="margin-top30 text"
                        placeholder="Email address"
                        onChange={this.handleChangeUsername.bind(this)} />
                    <input
                        type="password"
                        className="margin-top15 text"
                        placeholder="Password"
                        onChange={this.handleChangePassword.bind(this)} />
                    <Button
                        className="margin-top15 primary"
                        onClick={this.handleLogin.bind(this)} 
                        isLoading={this.state.isLoading}>
                        <strong>LOGIN</strong>
                    </Button>
                    <div className="margin-top15 row">
                        <Checkbox
                            value={this.state.remember}
                            onChange={this.handleChangeRemember.bind(this)}>
                            Remember
                        </Checkbox>
                        <span>Forgot your password?</span>
                    </div>
                    <Button
                        className="margin-top30 secondary"
                        onClick={() => alert('Sign up')} >
                        <strong>New user? Sign up.</strong>
                    </Button>
                    <span className="margin-top30">Need help? Call 1-800-306-1445 </span>
                </div>

            </div>
        );
    }
}

