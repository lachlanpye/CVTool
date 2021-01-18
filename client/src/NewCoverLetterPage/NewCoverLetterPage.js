import React, { Component } from 'react';
import axios from 'axios';
import './NewCoverLetterPage.css';

import TagSearchBar from '../TagSearchBar/TagSearchBar';

class NewCoverLetterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            "cvNameValue": "",
            "cvTextValue": "",
            "tags": []
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onTagChange = this.onTagChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onTextChange = this.onTextChange.bind(this);
    }

    onTagChange(newTags) {
        this.setState({
            tags: newTags
        });
    }
    onNameChange(event) {
        this.setState({
            cvNameValue: event.target.value
        });
    }
    onTextChange(event) {
        this.setState({
            cvTextValue: event.target.value
        });
    }

    onSubmit(event) {
        axios({
            method: "post",
            url: "/api/v1/submit-cover-letter",
            data: {
                name: this.state.cvNameValue,
                content: this.state.cvTextValue,
                tags: this.state.tags
            }
        });
    }

    render() {
        return (
            <div>
                <h1>New cover letter page</h1>

                <div className="inputDiv">
                <label>Name of cover letter: </label>
                <input id="cv-name" type="text" value={this.state.cvNameValue} onChange={this.onNameChange}/>
                </div>

                <div className="inputDiv">
                <label>Cover letter content: </label>
                <textarea id="cv-text" value={this.state.cvTextValue} onChange={this.onTextChange}/>
                </div>

                <div className="inputDiv">
                <label>Add tags: </label>
                <TagSearchBar onTagChange={this.onTagChange}/>
                </div>

                <div className="inputDiv">
                <input type="button" id="submit-button" value="Submit" onClick={this.onSubmit}/>
                </div>
            </div>
        );
    }
}

export default NewCoverLetterPage;