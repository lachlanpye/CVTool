import React, { Component } from 'react';
import './App.css';

import Sidebar from './Sidebar/Sidebar';
import HomePage from './HomePage/HomePage';
import FindPage from './FindPage/FindPage';
import NewResumePage from './NewResumePage/NewResumePage';
import NewCoverLetterPage from './NewCoverLetterPage/NewCoverLetterPage';
import ViewPage from './ViewPage/ViewPage';
import LoginPage from './LoginPage/LoginPage';
import LogoutPage from './LogoutPage/LogoutPage';
import CreateAccount from './CreateAccount/CreateAccount';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      current: "home",
      page: "",

      loggedIn: false,
      email: "",
      password: "",
     };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleViewFile = this.handleViewFile.bind(this);
    this.loggedIn = this.loggedIn.bind(this);
  }

  handlePageChange(message) {
    this.setState({
      current: message,
      page: ""
    });
  }

  handleViewFile(filename, filetype) {
    this.setState({
      current: "view-page",
      page: filename,
      type: filetype
    });
  }

  loggedIn(accEmail, accPass) {
    this.setState({
      loggedIn: (accEmail === null && accPass === null) ? false : true,
      email: accEmail,
      password: accPass,
    });
  }

  render() {
    let page = <div/>
    switch (this.state.current) {
      case "login":
        page = <LoginPage handlePageChange={this.handlePageChange} changeLoggedStatus={(email, password) => {this.loggedIn(email, password)}} />
        break;
      case "logout":
        page = <LogoutPage returnHome={() => {this.handlePageChange("home")}} changeLoggedStatus={(email, password) => {this.loggedIn(email, password)}} />
        break;
      case "create-account":
        page = <CreateAccount handlePageChange={this.handlePageChange} />
        break;
      case "home":
        page = <HomePage loggedIn={this.state.loggedIn} />
        break;
      case "find":
        page = <FindPage handleViewFile={this.handleViewFile} email={this.state.email} />;
        break;
      case "new-resume":
        page = <NewResumePage returnHome={() => {this.handlePageChange("home")}} email={this.state.email} />;
        break;
      case "new-cover-letter":
        page = <NewCoverLetterPage returnHome={() => {this.handlePageChange("home")}} email={this.state.email} />;
        break;
      case "view-page":
        page = <ViewPage page={this.state.page} type={this.state.type} returnHome={() => {this.handlePageChange("home")}} />;
        break;
      default:
        break;
    }

    return (
      <div id="page-background">
        <Sidebar changePage={this.handlePageChange} loggedIn={this.state.loggedIn} />
        { page }
      </div>
    );
  }
}

export default App;