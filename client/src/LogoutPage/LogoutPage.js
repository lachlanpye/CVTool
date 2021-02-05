import React, { Component } from 'react';
import './LogoutPage.css';

import Button from './../Button/Button';

class LogoutPage extends Component {
    constructor(props) {
        super(props);

        this.onLogout = this.onLogout.bind(this);
    }

    onLogout() {
        this.props.changeLoggedStatus(null, null);
        this.props.returnHome();
    }

    render() {
        return (
            <div>
                <div className="inputDiv">
                <p>Are you sure you would like to log out?</p>
                <Button value="Log out" onClick={this.onLogout}/>
                </div>
            </div>
        );
    }
}

export default LogoutPage;