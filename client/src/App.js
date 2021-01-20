import React, { Component } from 'react';
import './App.css';

import Sidebar from './Sidebar/Sidebar';
import HomePage from './HomePage/HomePage';
import FindPage from './FindPage/FindPage';
import NewResumePage from './NewResumePage/NewResumePage';
import NewCoverLetterPage from './NewCoverLetterPage/NewCoverLetterPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { current: "home" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(message) {
    this.setState({
      current: message
    });
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
      default:
        break;
    }

    return (
      <div id="page-background">
        <Sidebar changePage={ this.handleClick }/>
        { page }
      </div>
    );
  }
}

export default App;