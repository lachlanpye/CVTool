import React, { Component } from 'react';
import './NewCoverLetterPage.css';

import TagSearchBar from '../TagSearchBar/TagSearchBar';

class NewCoverLetterPage extends Component {
    render() {
        return (
            <div>
                <h1>New cover letter page</h1>

                <div className="inputDiv">
                <label>Name of cover letter: </label>
                <input id="cv-name" type="text"/>
                </div>

                <div className="inputDiv">
                <label>Cover letter content: </label>
                <textarea id="cv-text"/>
                </div>

                <div className="inputDiv">
                <label>Add tags: </label>
                <TagSearchBar />
                </div>
            </div>
        );
    }
}

export default NewCoverLetterPage;