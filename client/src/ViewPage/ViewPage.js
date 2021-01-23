import React, { Component } from 'react';
import './ViewPage.css';

import Button from './../Button/Button';
import axios from 'axios';

class ViewPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "fileName": null,
            "fileContent": null,
            "fileTags": null,
            "fileType": null,

            "plainContent": null,
            "mode": "view"
        }

        this.swapMode = this.swapMode.bind(this);
    }

    componentDidMount() {
        axios({
            method: "post",
            url: "/api/v1/get-cover-letter",
            data: { filename: this.props.page }
        }).then(res => {
            this.setState({
                fileName: res.data.name,
                fileContent: res.data.content.split("\n").map(function(item, idx) {
                    return (<span key={idx}>{item}<br/></span> );
                }),
                fileTags: res.data.tags.map(function(tag, i) {
                    let sep = "";
                    if (res.data.tags.length !== i + 1) { sep = ", "}
                    return (<b>{tag}{sep}</b>);
                }),
                fileType: res.data.type,
                plainContent: res.data.content
            });
        });
    }
    swapMode() {
        if (this.state.mode === "view") {
            this.setState({
                mode: "edit"
            });
        } else {
            this.setState({
                mode: "view"
            });
        }
    } 

    render() {
        let content = <div/>
        let modeName = "";
        if (this.state.mode === "view") {
            content = <p id="file-content-view">{this.state.fileContent}</p>;
            modeName = "Edit"
        }
        else if (this.state.mode === "edit") {
            content = <textarea id="file-content-edit" rows="20" cols="100">{this.state.plainContent}</textarea>;
            modeName = "Save";
        }

        return (
            <div>
                <h1 id="file-name">{this.state.fileName}</h1>
                { content }
                <p id="file-tags">Tags: {this.state.fileTags}</p>

                <div id="view-page-options">
                    <Button value={modeName} onClick={this.swapMode}/>
                    <Button value="Copy" onClick={() => navigator.clipboard.writeText(this.state.plainContent)}/>
                    <Button value="Delete" />
                </div><br/>
            </div>
        );
    }
}

export default ViewPage;