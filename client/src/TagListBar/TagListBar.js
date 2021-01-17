import React, { Component } from 'react';

import './TagListBar.css';

class TagListBar extends Component {
    render() {
        var html = <div/>;
        if (this.props.tagList.data !== undefined) {
            html =  <div>
                        {this.props.tagList.data.map((tag) => {
                            return <input type="button" classType="tagListButton" value={tag} />;
                        })}
                    </div>
        }
        else { html =  <div><p/></div> }
        return html;
    }
}

export default TagListBar;