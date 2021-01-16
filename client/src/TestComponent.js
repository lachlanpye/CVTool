import React, { Component } from 'react';
import './TestComponent.css';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {response: {}};
  }
  
  componentDidMount() {
    axios({
        method: "post",
        url: '/api/v1/say-post',
        data: {
          message: ":)"
        }
      }).then((res) => {
        const response = res.data;
        this.setState({response});
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello from the frontend!</h1>
        <h1>{this.state.response.body}</h1>
      </div>
    );
  }
}

export default TestComponent;