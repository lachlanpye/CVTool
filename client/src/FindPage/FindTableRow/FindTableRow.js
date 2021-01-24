import React, { Component } from 'react';
import './FindTableRow.css';

import axios from 'axios';
import Button from './../../Button/Button';

class FindTableRow extends Component {
    constructor(props) {
        super(props);

        this.onDownload = this.onDownload.bind(this);
    }

    onDownload() {
        axios({
            method: "post",
            url: "/api/v1/download-resume",
            data: { filename: this.props.filename },
            responseType: 'blob'
        }).then(res => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', this.props.filename + '.pdf');
            document.body.appendChild(link);
            link.click();
        });
    }

    render() {
        let type = "";
        let download = <></>;
        if (this.props.filetype === "cover-letter") {
            type = "Cover Letter";
        } else if (this.props.filetype === "resume") {
            type = "Resume";
            download = <Button value="Download" onClick={this.onDownload} />
        }

        return (
            <tr>
                <td>{this.props.filename}</td>
                <td>{type}</td>
                <td>{this.props.taglist}</td>
                <td>
                    <Button value="View" onClick={() => this.props.viewPage(this.props.filename, this.props.filetype)} />
                    { download }
                    <Button value="Delete" onClick={() => this.props.deleteFile(this.props.filename, this.props.filetype)} />
                </td>
            </tr>
        );
    }
}

export default FindTableRow;