import React, { Component } from 'react';
import axios from 'axios';
import './NewCoverLetterPage.css';

import TagSearchBar from '../TagSearchBar/TagSearchBar';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

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
        }).then(res => {
            this.props.returnHome();
        });
    }

    render() {
        return (
            <div>
                <h1>New cover letter page</h1>

                <div className="inputDiv">
                <label>Name of cover letter: </label>
                <TextInput id="cv-name" value={this.state.cvNameValue} onChange={this.onNameChange}/>
                </div>

                <div className="inputDiv">
                <label>Cover letter content: </label>
                <textarea id="cv-text" rows="20" columns="30" value={this.state.cvTextValue} onChange={this.onTextChange}/>
                </div>

                <div className="inputDiv">
                <label>Add tags: </label>
                <TagSearchBar onTagChange={this.onTagChange}/>
                </div>

                <div className="inputDiv">
                <Button id="submit-button" value="Submit" onClick={this.onSubmit}/>
                </div>
            </div>
        );
    }
}

export default NewCoverLetterPage;