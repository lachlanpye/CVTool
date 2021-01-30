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
            "tags": [],

            "warnText": ""
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
        if (this.state.cvNameValue.length === 0) {
            this.setState({
                warnText: "Enter a name for this cover letter."
            });
        } else {
            if (this.state.cvTextValue.length === 0) {
                this.setState({
                    warnText: "Enter some text for this cover letter."
                });
            } else {
                if (this.state.tags.length === 0) {
                    this.setState({
                        warnText: "Enter at least one tag for this cover letter."
                    });
                } else {
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
            }
        }
    }

    render() {
        var warnText = <></>;
        if (this.state.warnText.length !== 0) {
            warnText = <p id="warning-text">{this.state.warnText}</p>;
        }
        return (
            <div>
                <h1>New cover letter page</h1>

                <div className="inputDiv">
                <TextInput id="cv-name" placeholder="Cover letter name" value={this.state.cvNameValue} onChange={this.onNameChange}/>
                </div>

                <div className="inputDiv">
                <textarea id="cv-text" placeholder="Cover letter content" rows="20" columns="30" value={this.state.cvTextValue} onChange={this.onTextChange}/>
                </div>

                <div className="inputDiv">
                <TagSearchBar onTagChange={this.onTagChange}/>
                </div>

                <div className="inputDiv">
                { warnText } 
                <Button id="submit-button" value="Submit" onClick={this.onSubmit}/>
                </div>
            </div>
        );
    }
}

export default NewCoverLetterPage;