import React, { Component } from 'react';
import './App.css';

import Sidebar from './Sidebar/Sidebar';
import HomePage from './HomePage/HomePage';
import FindPage from './FindPage/FindPage';
import NewResumePage from './NewResumePage/NewResumePage';
import NewCoverLetterPage from './NewCoverLetterPage/NewCoverLetterPage';
import ViewPage from './ViewPage/ViewPage';
import LoginPage from './LoginPage/LoginPage';
import CreateAccount from './CreateAccount/CreateAccount';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      current: "home",
      page: "",
      loggedIn: false,
     };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleViewFile = this.handleViewFile.bind(this);
    this.changeLoggedStatus = this.changeLoggedStatus.bind(this);
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

  changeLoggedStatus() {
    this.setState({
      loggedIn: !this.state.loggedIn
    });
  }

  render() {
    let page = <div/>
    switch (this.state.current) {
      case "login":
        page = <LoginPage handlePageChange={this.handlePageChange} changeLoggedStatus={this.changeLoggedStatus}/>
        break;
      case "create-account":
        page = <CreateAccount handlePageChange={this.handlePageChange}/>
        break;
      case "home":
        page = <HomePage />
        break;
      case "find":
        page = <FindPage handleViewFile={this.handleViewFile} />;
        break;
      case "new-resume":
        page = <NewResumePage returnHome={() => {this.handlePageChange("home")}} />;
        break;
      case "new-cover-letter":
        page = <NewCoverLetterPage returnHome={() => {this.handlePageChange("home")}} />;
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