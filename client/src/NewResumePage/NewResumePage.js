import React, { Component } from 'react';
import './NewResumePage.css';

import axios from 'axios';
import PDFViewer from './../PDFViewer/PDFViewer';

class NewResumePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resumeFileName: "",
            resumeFile: "",
            previewFile: null
        };

        this.onResumeFileNameChange = this.onResumeFileNameChange.bind(this);
        this.onResumeFileChange = this.onResumeFileChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onResumeFileNameChange(event) {
        this.setState({
            resumeFileName: event.target.value
        });
    }
    onResumeFileChange(event) {
        var file = event.target.files[0];
        this.setState({
            resumeFile: file,
            previewFile: file
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
        return (
            <div>
                <h1>New resume page</h1>

                <div className="inputDiv">
                <label>Save resume as: </label>
                <input type="text" id="resume-file-name" value={this.state.resumeFileName} onChange={this.onResumeFileNameChange}/>
                </div>

                <div className="inputDiv">
                <label>Select resume: </label>
                <input type="file" id="resume-file" onChange={this.onResumeFileChange}/>
                <PDFViewer pdf={this.state.previewFile} />
                </div>
                
                <div className="inputDiv">
                <input type="button" value="Submit" onClick={this.onSubmit}/>
                </div>
            </div>
        );
    }
}

export default NewResumePage;