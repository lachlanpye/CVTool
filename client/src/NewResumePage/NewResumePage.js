import React, { Component } from 'react';
import './NewResumePage.css';

import axios from 'axios';

import PDFViewer from './../PDFViewer/PDFViewer';
import FileChooser from './FileChooser/FileChooser';
import TagSearchBar from './../TagSearchBar/TagSearchBar';
import TextInput from './../TextInput/TextInput';
import Button from '../Button/Button';

class NewResumePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resumeFileName: "",
            resumeFile: "",
            tags: [],
            warnText: "",

            showSubmitOption: false
        };

        this.onResumeFileNameChange = this.onResumeFileNameChange.bind(this);
        this.onResumeUploadSuccess = this.onResumeUploadSuccess.bind(this)
        this.onResumeUploadFailure = this.onResumeUploadFailure.bind(this);

        this.onResumeFileChange = this.onResumeFileChange.bind(this);
        this.onTagChange = this.onTagChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onResumeFileNameChange(event) {
        this.setState({
            resumeFileName: event.target.value
        });
    }
    onResumeFileChange(file) {
        this.setState({
            resumeFile: file,
        });
    }
    onTagChange(newTags) {
        this.setState({
            tags: newTags
        });
    }

    onResumeUploadSuccess() {
        this.setState({
            showSubmitOption: true
        });
    }
    onResumeUploadFailure() {
        this.setState({
            showSubmitOption: false
        });
    }

    onSubmit() {
        if (this.state.resumeFileName.length === 0) {
            this.setState({
                warnText: "Enter a name for this resume."
            });
        } else {
            if (this.state.tags.length === 0) {
                this.setState({
                    warnText: "Enter at least one tag for this resume."
                });
            } else {
                const data = new FormData();
                data.append('name', this.state.resumeFileName);
                data.append('content', this.state.resumeFile);
                data.append('tags', JSON.stringify(this.state.tags));
                axios({
                    method: "post",
                    url: '/api/v1/submit-resume',
                    data: data
                }).then(res => {
                    this.props.returnHome();
                }).catch(err => {
                    console.log(err.response.data) 
                });
            }
        }
    }

    render() {
        var submit = <></>;
        var warnText = <></>;
        if (this.state.warnText.length !== 0) { 
            warnText = <p id="warning-text">{this.state.warnText}</p>
        }
        if (this.state.showSubmitOption) {
            submit =    <div className="inputDiv">
                            <label>Add tags: </label>
                            <TagSearchBar onTagChange={this.onTagChange} />
                            <br/>
                            { warnText }
                            <Button value="Submit" onClick={this.onSubmit}/>
                        </div>;
        }

        return (
            <div>
                <h1>New resume page</h1>

                <div className="inputDiv">
                <TextInput placeholder="Save resume as" id="resume-file-name" value={this.state.resumeFileName} onChange={this.onResumeFileNameChange}/>
                </div>

                <div className="inputDiv">
                <label>Select resume: </label><br/>
                <FileChooser handleFile={this.onResumeFileChange}/><br/>
                <PDFViewer id="pdf-view" pdf={this.state.resumeFile} onSuccess={this.onResumeUploadSuccess} onFailure={this.onResumeUploadFailure}/><br/>
                </div>
                
                { submit }
            </div>
        );
    }
}

export default NewResumePage;