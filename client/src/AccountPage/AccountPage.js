import React, { Component } from 'react';
import './AccountPage.css';

import axios from 'axios';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import SlideOpenComponent from '../SlideOpenComponent/SlideOpenComponent';

class AccountPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logoutDivOpen: false,
            deleteAccountDivOpen: false,

            passwordInputValue: ""
        }

        this.onLogout = this.onLogout.bind(this);
        this.onDeleteAccount = this.onDeleteAccount.bind(this);
        this.toggleLogoutDiv = this.toggleLogoutDiv.bind(this);
        this.onPasswordVerifierChange = this.onPasswordVerifierChange.bind(this);
        this.toggleDeleteAccountDiv = this.toggleDeleteAccountDiv.bind(this);
    }

    onPasswordVerifierChange(event) {
        this.setState({
            passwordInputValue: event.target.value
        });
    }

    onLogout() {
        this.props.changeLoggedStatus(null, null);
        this.props.returnHome();
    }
    onDeleteAccount() {
        axios({
            method: "post",
            url: "/api/v1/delete-account",
            data: { email: this.props.email, password: this.state.passwordInputValue }
        }).then(res => {
            this.props.changeLoggedStatus(null, null);
            this.props.returnHome();
        });
    }

    toggleLogoutDiv() {
        this.setState({
            logoutDivOpen: !this.state.logoutDivOpen
        });
    }
    toggleDeleteAccountDiv() {
        this.setState({
            deleteAccountDivOpen: !this.state.deleteAccountDivOpen
        });
    }

    render() {
        var logoutDiv = <div/>;
        var deleteAccountDiv = <div/>;

        if (this.state.logoutDivOpen) {
            logoutDiv = <div className="openDiv">
                            <SlideOpenComponent>
                                <p>Are you sure you would like to log out?</p>
                                <Button value="Confirm logout" onClick={this.onLogout}/>
                            </SlideOpenComponent>
                        </div>;
        }
        if (this.state.deleteAccountDivOpen) {
            deleteAccountDiv =  <div className="openDiv">
                                    <SlideOpenComponent>
                                        <p>Are you sure you would like to delete your account?</p>
                                        <TextInput value={this.state.passwordInputValue} onChange={this.onPasswordVerifierChange} placeholder="Confirm password" type="password" />
                                        <Button value="Confirm deletion" onClick={this.onDeleteAccount}/>
                                    </SlideOpenComponent>
                                </div>;
        }

        return (
            <div>
                <div className="inputDiv">
                <h2>Log out</h2>
                <Button value="Log out" onClick={this.toggleLogoutDiv}/>
                { logoutDiv }
                </div>

                <div className="inputDiv">
                <h2>Delete account</h2>
                <Button value="Delete account" onClick={this.toggleDeleteAccountDiv}/>
                { deleteAccountDiv }
                </div>
            </div>
        );
    }
}

export default AccountPage;