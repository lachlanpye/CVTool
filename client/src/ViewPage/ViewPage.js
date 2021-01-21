import React, { Component } from 'react';
import './ViewPage.css';

class ViewPage extends Component {
    render() {
        return (
            <p>
                {this.props.page}
            </p>
        );
    }
}

export default ViewPage;