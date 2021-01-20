import React, { Component } from 'react';
import './TextInput.css';

class TextInput extends Component {
    render() {
        return (
            <input 
                id={this.props.id}
                type="text"
                className="text-input-class"
                value={this.props.value}
                onChange={this.props.onChange}
                list={this.props.list}
                placeholder={this.props.placeholder}
            />
        );
    }
}

export default TextInput;