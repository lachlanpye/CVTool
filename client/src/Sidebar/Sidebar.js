import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidenav">
                {this.props.loggedIn 
                ?  <button onClick={() => this.props.changePage('logout') }>Log Out</button>
                :  <button onClick={() => this.props.changePage('login') }>Log In</button> 
                }
                <hr/>
                <button onClick={() => this.props.changePage('home') }>Home</button>
                <button onClick={() => this.props.changePage('find') }>Find</button>
                <button onClick={() => this.props.changePage('new-resume') }>New Resume</button>
                <button onClick={() => this.props.changePage('new-cover-letter') }>New Cover Letter</button>
            </div>
        );
    }
}

export default Sidebar;