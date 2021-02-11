import React, { Component } from 'react';
import './ViewPage.css';

import Button from './../Button/Button';
import PDFViewer from './../PDFViewer/PDFViewer';
import axios from 'axios';
import LoadingComponent from '../LoadingComponent/LoadingComonent';

class ViewPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "fileName": "",
            "fileContent": "",
            "fileTags": [],
            "fileType": "",

            "plainContent": "",
            "mode": "view",
            "loadingFile": true
        }

        this.swapMode = this.swapMode.bind(this);
        this.onViewSuccess = this.onViewSuccess.bind(this);
        this.onViewFailure = this.onViewFailure.bind(this);
        this.onDownload = this.onDownload.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    componentDidMount() {
        if (this.props.type === "cover-letter") {
            axios({
                method: "post",
                url: "/api/v1/get-cover-letter",
                data: { filename: this.props.page, email: this.props.email }
            }).then(res => {
                this.setState({
                    fileName: res.data.name,
                    fileContent: res.data.content,
                    fileTags: res.data.tags,
                    fileType: "cover-letter",
                    plainContent: res.data.content,
                    loadingFile: false
                });
            });
        }

        if (this.props.type === "resume") {
            axios({
                method: "post",
                url: "/api/v1/get-resume-file-data",
                data: { filename: this.props.page, email: this.props.email }
            }).then(dataRes => {
                axios({
                    method: "post",
                    url: "/api/v1/get-resume",
                    responseType: "arraybuffer",
                    data: { filename: this.props.page, email: this.props.email }
                }).then(fileRes => {
                    this.setState({
                        fileName: dataRes.data.name,
                        fileContent: fileRes.data,
                        fileTags: dataRes.data.tags,
                        fileType: "resume",
                        plainContent: null,
                        loadingFile: false
                    });
                });
            });
        }
    }
    swapMode() {
        if (this.state.mode === "view") {
            this.setState({
                mode: "edit"
            });
        } else {
            axios({
                method: "post",
                url: "/api/v1/submit-cover-letter",
                data: {
                    name: this.state.fileName,
                    content: this.state.plainContent,
                    tags: this.state.fileTags,
                    email: this.props.email
                }
            });

            this.setState({
                mode: "view",
                fileContent: this.state.plainContent
            });
        }
    } 

    onTextChange(event) {
        this.setState({
            plainContent: event.target.value
        });
    }
    onViewSuccess() {
        console.log("SUCESS");
    }
    onViewFailure() {
        console.log("FAILURE");
    }

    onDownload() {
        axios({
            method: "post",
            url: "/api/v1/download-resume",
            data: { filename: this.props.page, email: this.props.email },
            responseType: 'blob'
        }).then(res => {
            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', this.state.fileName + '.pdf');
            document.body.appendChild(link);
            link.click();
        });
    }
    onDelete() {
        if (this.state.fileType === "cover-letter") {
            axios({
                method: "post",
                url: "/api/v1/delete-cover-letter",
                data: { name: this.state.fileName, email: this.props.email }
            });
        }

        if (this.state.fileType === "resume") {
            axios({
                method: "post",
                url: "/api/v1/delete-resume",
                data: { name: this.state.fileName, email: this.props.email }
            });
        }

        this.props.returnHome();
    }

    render() {
        let content = <div/>;
        let modeButton = <div/>;
        let saveButton = <div/>
        if (this.state.fileType === "cover-letter") {
            saveButton = <Button value="Copy" onClick={() => navigator.clipboard.writeText(this.state.plainContent)}/>;
            if (this.state.mode === "view") {
                content = <p id="file-content-view">{this.state.fileContent.split("\n").map(function(item, idx) {
                    return (<span key={idx}>{item}<br/></span> );
                })}</p>;
                modeButton = <Button value="Edit" onClick={this.swapMode} />;
            }
            else if (this.state.mode === "edit") {
                content = <textarea id="file-content-edit" value={this.state.plainContent} onChange={this.onTextChange} rows="20" cols="100"/>;
                modeButton = <Button value="Save" onClick={this.swapMode} />;
            }
        }
        if (this.state.fileType === "resume") {
            saveButton = <Button value="Download" onClick={this.onDownload} />
            content = <PDFViewer pdf={this.state.fileContent} onSuccess={this.onViewSuccess} onFailure={this.onViewFailure}/>;
        }

        let tags = <div/>;
        if (this.state.fileTags.length > 0) {
            let len = this.state.fileTags.length;
            tags = this.state.fileTags.map(function(tag, i) {
                let sep = "";
                if (len !== i + 1) { sep = ", "}
                return (<b>{tag}{sep}</b>);
            });
        }

        return (
            <div>
                <LoadingComponent loading={this.state.loadingFile}>
                    <h1 id="file-name">{this.state.fileName}</h1>
                    { content }
                    <p id="file-tags">Tags: {tags}</p>

                <div id="view-page-options">
                    { modeButton }
                    { saveButton }
                    <Button value="Delete" onClick={this.onDelete} />
                </div><br/>
                </LoadingComponent>
            </div>
        );
    }
}

export default ViewPage;