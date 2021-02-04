import React, { Component } from 'react';
import './CreateAccount.css';

import axios from 'axios';
import TextInput from './../TextInput/TextInput';
import Button from './../Button/Button';

class CreateAccount extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "email": "",
            "password": "",
            "confirmPassword": "",
            "warningText": "",
        }

        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);
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
    onConfirmPasswordChange(event) {
        this.setState({
            confirmPassword: event.target.value
        });
    }
    onLogin() {
        if (this.state.email === "") {
            this.setState({
                warningText: "Please enter a valid email."
            });
        } else {
            if (this.state.password === "") {
                this.setState({
                    warningText: "Please enter a password."
                });
            } else {
                if (this.state.password !== this.state.confirmPassword) {
                    this.setState({ 
                        warningText: "Passwords must match."
                    })
                } else {
                    this.setState({
                        warningText: ""
                    });
                    axios({
                        method: "post",
                        url: "/api/v1/add-account",
                        data: {
                            email: this.state.email,
                            password: this.state.password
                        }
                    }).then(res => {
                        this.props.handlePageChange("home");
                        }
                    );
                }
            }
        }
    }

    render() {
        return (
            <div>
                <h1>Create account</h1>

                <div className="inputDiv">
                <TextInput placeholder="Email" value={this.state.email} onChange={this.onEmailChange} />
                </div>

                <div className="inputDiv">
                <TextInput placeholder="Password" type="password" value={this.state.password} onChange={this.onPasswordChange} />
                </div>
                <div className="inputDiv">
                <TextInput placeholder="Confirm password" type="password" value={this.state.confirmPassword} onChange={this.onConfirmPasswordChange} />
                </div>

                <div className="inputDiv">
                <p className="warning-text">{this.state.warningText}</p>
                <Button value="Create account" onClick={this.onLogin}/>
                </div>
            </div>
        );
    }
}

export default CreateAccount;