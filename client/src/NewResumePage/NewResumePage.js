import React, { Component } from 'react';
import './NewResumePage.css';

import axios from 'axios';

import PDFViewer from './../PDFViewer/PDFViewer';
import FileChooser from './FileChooser/FileChooser';
import TextInput from './../TextInput/TextInput';
import Button from '../Button/Button';

class NewResumePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resumeFileName: "",
            resumeFile: "",

            showSubmitOption: false
        };

        this.onResumeFileNameChange = this.onResumeFileNameChange.bind(this);
        this.onResumeUploadSuccess = this.onResumeUploadSuccess.bind(this)
        this.onResumeUploadFailure = this.onResumeUploadFailure.bind(this);
        this.onResumeFileChange = this.onResumeFileChange.bind(this);
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

    onSubmit(event) {
        const data = new FormData();
        data.append('name', this.state.resumeFileName);
        data.append('content', this.state.resumeFile);
        data.append('tags', JSON.stringify(['React', 'NodeJS', 'Express']));
        axios.post('/api/v1/submit-resume', data).catch( err => { console.log(err.response.data) });
    }

    render() {
        var submit = <div/>;
        if (this.state.showSubmitOption) {
            submit =    <div className="inputDiv">
                            <Button value="Submit" onClick={this.onSubmit}/>
                        </div>;
        }

        return (
            <div>
                <h1>New resume page</h1>

                <div className="inputDiv">
                <label>Save resume as: </label>
                <TextInput id="resume-file-name" value={this.state.resumeFileName} onChange={this.onResumeFileNameChange}/>
                </div>

                <div className="inputDiv">
                <label>Select resume: </label><br/>
                <FileChooser handleFile={this.onResumeFileChange}/><br/>
                <PDFViewer pdf={this.state.resumeFile} onSuccess={this.onResumeUploadSuccess} onFailure={this.onResumeUploadFailure}/>
                </div>
                
                { submit }
            </div>
        );
    }
}

export default NewResumePage;