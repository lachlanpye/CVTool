import React, { Component } from 'react';
import './TextInput.css';

class TextInput extends Component {
    render() {
        return (
            <div className="text-input-expand">
                <input 
                    id={this.props.id}
                    type="text"
                    className="text-input-class"
                    value={this.props.value}
                    onChange={this.props.onChange}
                    list={this.props.list}
                    placeholder={this.props.placeholder}
                />
                <div className="text-input-border"/>
            </div>
        );
    }
}

export default TextInput;