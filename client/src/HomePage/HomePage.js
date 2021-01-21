import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Home page</h1>

                <p>Welcome to CV Tool!</p>
                <br/>
                <p><b>Home</b> - home page</p>
                <p><b>Find</b> - search for saved resumes and cover letters</p>
                <p><b>New Resume</b> - upload your resume and save it</p>
                <p><b>New Cover Letter</b> - write your cover letter and tag it</p>
            </div>
        );
    }
}

export default HomePage;