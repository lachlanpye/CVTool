import React, { Component } from 'react';
import './HomePage.css';

class HomePage extends Component {
    render() {
        let content = <div/>
        if (this.props.loggedIn) {
            content =   <div>
                            <p>Welcome to CV Tool!</p>
                            <br/>
                            <p><b>Home</b> - home page</p>
                            <p><b>Log Out</b> - log out of your account</p>
                            <p><b>Find</b> - search for saved resumes and cover letters</p>
                            <p><b>New Resume</b> - upload your resume and save it</p>
                            <p><b>New Cover Letter</b> - write your cover letter and tag it</p>
                        </div>;
        } else {
            content =   <div>
                            <p>Welcome to CV Tool! To access the site's features, please log in to your account or create a new account.</p>
                            <br/>
                            <p><b>Home</b> - home page</p>
                            <p><b>Log In</b> - log in to your account or create a new account</p>
                        </div>
        }

        return (
            <div>
                <h1>Home page</h1>
                { content }
            </div>
        );
    }
}

export default HomePage;