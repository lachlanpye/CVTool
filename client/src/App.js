import React, { Component } from 'react';
import './App.css';

import Sidebar from './Sidebar/Sidebar';
import HomePage from './HomePage/HomePage';
import FindPage from './FindPage/FindPage';
import NewResumePage from './NewResumePage/NewResumePage';
import NewCoverLetterPage from './NewCoverLetterPage/NewCoverLetterPage';
import ViewPage from './ViewPage/ViewPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      current: "home",
      page: ""
     };

    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleViewFile = this.handleViewFile.bind(this);
  }

  handlePageChange(message) {
    this.setState({
      current: message,
      page: ""
    });
  }

  handleViewFile(file) {
    this.setState({
      current: "view-page",
      page: file
    })
  }

  render() {
    let page = <div/>
    switch (this.state.current) {
      case "home":
        page = <HomePage />
        break;
      case "find":
        page = <FindPage />;
        break;
      case "new-resume":
        page = <NewResumePage />;
        break;
      case "new-cover-letter":
        page = <NewCoverLetterPage />;
        break;
      case "view-page":
        page = <ViewPage page={this.state.page}/>;
        break;
      default:
        break;
    }

    return (
      <div id="page-background">
        <Sidebar changePage={ this.handlePageChange }/>
        { page }
      </div>
    );
  }
}

export default App;