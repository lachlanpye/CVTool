import React, { Component } from 'react';
import './LoadingComponent.css';

class LoadingComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var loading =   <div className="loading-component-div">
                            <p>Loading...</p><div class="spinner-div"/>
                        </div>

        if (this.props.loading === true) {
            return loading;
        } else {
            return <React.Fragment>{this.props.children}</React.Fragment>
        }
    }
}

export default LoadingComponent;