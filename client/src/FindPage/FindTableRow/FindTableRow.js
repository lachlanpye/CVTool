import React, { Component } from 'react';
import './FindTableRow.css';

import Button from './../../Button/Button';

class FindTableRow extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.filename}</td>
                <td>{this.props.taglist}</td>
                <td>
                    <Button value="View" onClick={() => this.props.viewPage(this.props.filename)} />
                    <Button value="Download" />
                    <Button value="Delete" />
                </td>
            </tr>
        );
    }
}

export default FindTableRow;