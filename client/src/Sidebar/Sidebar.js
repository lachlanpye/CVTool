import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidenav">
                <button onClick={() => this.props.changePage('home') }>Home</button>
                {this.props.loggedIn 
                ?   <div>
                        <button onClick={() => this.props.changePage('logout') }>Log Out</button>
                        <hr/>
                        <button onClick={() => this.props.changePage('find') }>Find</button>
                        <button onClick={() => this.props.changePage('new-resume') }>New Resume</button>
                        <button onClick={() => this.props.changePage('new-cover-letter') }>New Cover Letter</button>
                    </div>
                :  <button onClick={() => this.props.changePage('login') }>Log In</button> 
                }
            </div>
        );
    }
}

export default Sidebar;