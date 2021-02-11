import React, { Component } from 'react';
import './LoginPage.css';

import axios from 'axios';
import TextInput from './../TextInput/TextInput';
import Button from './../Button/Button';
import LoadingComponent from './../LoadingComponent/LoadingComonent';

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "email": "",
            "password": "",
            "warningText": "",

            "confirmLoginLoading": false
        }

        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
    }

    onEmailChange(event) {
        this.setState({
            email: event.target.value
        });
    }
    onPasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }
    onLogin() {
        let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!emailRegex.test(this.state.email)) {
            this.setState({
                warningText: "Please enter a valid email."
            });
        } else {
            if (this.state.password === "") {
                this.setState({
                    warningText: "Please enter a password."
                });
            } else {
                this.setState({
                    warningText: "",
                    confirmLoginLoading: true
                });
                axios({
                    method: "post",
                    url: "/api/v1/confirm-login",
                    data: {
                        email: this.state.email,
                        password: this.state.password
                    }
                }).then(res => {
                    if (res.data.foundAccount) {
                        this.props.changeLoggedStatus(this.state.email, this.state.password);
                        this.props.handlePageChange("home");
                    } else {
                        this.setState({
                            warningText: "Account not found. You have the wrong email or password.",
                            confirmLoginLoading: false
                        });
                    }
                });
            }
        }
    }

    render() {
        return (
            <div>
                <h1>Login page</h1>

                <div className="inputDiv">
                <TextInput placeholder="Email" value={this.state.email} onChange={this.onEmailChange} />
                </div>

                <div className="inputDiv">
                <TextInput placeholder="Password" type="password" value={this.state.password} onChange={this.onPasswordChange} />
                </div>

                <div className="inputDiv">
                <LoadingComponent loading={this.state.confirmLoginLoading}>
                    <p className="warning-text">{this.state.warningText}</p>
                    <Button value="Login" onClick={this.onLogin}/>

                    <hr/>
                    <p>New here?</p>
                    <Button value="Create account" onClick={() => this.props.handlePageChange("create-account")}/>
                </LoadingComponent>
                </div>
            </div>
        );
    }
}

export default LoginPage;