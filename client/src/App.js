import React, { Component } from 'react';
import './App.css';

import Sidebar from './Sidebar/Sidebar';
import HomePage from './HomePage/HomePage';
import FindPage from './FindPage/FindPage';
import UploadPage from './UploadPage/UploadPage';

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
      case "upload":
        page = <UploadPage />;
        break;
      default:
        break;
    }

    return (
      <div className="App">
        <Sidebar changePage={ this.handleClick }/>
        { page }
      </div>
    );
  }
}

export default App;