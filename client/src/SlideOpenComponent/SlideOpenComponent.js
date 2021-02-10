import React, { Component } from 'react';
import './SlideOpenComponent.css';

class SlideOpenComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="slide-open-div">
                {this.props.children}
            </div>
        );
    }
}

export default SlideOpenComponent;