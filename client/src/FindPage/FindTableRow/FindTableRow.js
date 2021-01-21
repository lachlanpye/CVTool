import React, { Component } from 'react';
import './FindTableRow.css';

class FindTableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.filename}</td>
                <td>{this.props.taglist}</td>
                <td>
                    <button onClick={() => this.props.viewPage(this.props.filename)}>View</button>
                    <button>Download</button>
                    <button>Delete</button>
                </td>
            </tr>
        );
    }
}

export default FindTableRow;