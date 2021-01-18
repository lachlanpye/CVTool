import React, { Component } from 'react';

import './TagListBar.css';

class TagListBar extends Component {
    render() {
        var html = <div/>;
        if (this.props.tagList.length > 0) {
            html =  <div>
                        {this.props.tagList.map((tag, index) => {
                            return <input type="button" classtype="tagListButton" key={index} value={tag} onClick={() => this.props.onRemoveTag(tag)} />;
                        })}
                    </div>
        }
        else { html =  <div><p/></div> }
        return html;
    }
}

export default TagListBar;