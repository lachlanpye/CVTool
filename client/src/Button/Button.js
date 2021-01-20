import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <input 
                id={this.props.id}
                type="button"
                className="button-class"
                value={this.props.value}
                onClick={this.props.onClick}
                key={this.props.key}
                disabled={this.props.disabled}
            />
        );
    }
}

export default Button;