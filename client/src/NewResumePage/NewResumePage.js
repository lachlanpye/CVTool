import React, { Component } from 'react';
import './NewResumePage.css';

import axios from 'axios';

class NewResumePage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            resumeFileName: "",
            resumeFile: ""
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
        this.setState({
            resumeFile: event.target.files[0]
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
                <input type="text" id="resume-file-name" value={this.state.resumeFileName} onChange={this.onResumeFileNameChange}/>
                <input type="file" id="resume-file" onChange={this.onResumeFileChange}/>
                <input type="button" onClick={this.onSubmit}/>
            </div>
        );
    }
}

export default NewResumePage;