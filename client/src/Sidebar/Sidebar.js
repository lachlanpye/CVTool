import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
    render() {
        return (
            <div className="sidenav">
                <button onClick={() => this.props.changePage('home') }>Home</button>
                <button onClick={() => this.props.changePage('find') }>Find</button>
                <button onClick={() => this.props.changePage('upload') }>Upload</button>
            </div>
        );
    }
}

export default Sidebar;