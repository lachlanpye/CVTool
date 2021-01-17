import React, { Component } from 'react';
import axios from 'axios';

import TagListBar from './../TagListBar/TagListBar';
import './TagSearchBar.css';

class TagSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullTagList: [],
            currentTagList: [],

            tagInputValue: ""
        };

        this.addTag = this.addTag.bind(this);
        this.onTagInputChange = this.onTagInputChange.bind(this);
      }

    componentDidMount() {
        axios({
            method: "get",
            url: "/api/v1/get-tags",
        }).then((res) => {
                let response = res.data;
                this.setState({fullTagList: response});
            }
        );
    }

    onTagInputChange(event) {
        this.setState({
            tagInputValue: event.target.value
        });
    }

    addTag(event) {
        this.setState(state => {
            const currentTagList = state.currentTagList.push(this.state.tagInputValue);
            return { currentTagList }
        });
    }

    render() {
        var html = <div/>;
        if (this.state.fullTagList.data !== undefined) {
            html =  <div>
                        <div id="tag-search-bar">
                            <input id="tag-search" list="tag-datalist" type="text" value={this.state.tagInputValue} onChange={this.onTagInputChange}/>
                                <datalist id="tag-datalist">
                                    {this.state.fullTagList.data.map((item, key) => {
                                        return <option key={key} value={item}/>
                                    })}
                                </datalist>
                            <input type="button" value="Add tag" onClick={this.addTag}/>
                        </div>
                        <TagListBar tagList={this.state.currentTagList}/>
                    </div>;
        }
        else {
            html =  <div>
                        <div id="tag-search-bar">
                            <input id="tag-search" type="text"/>
                            <input type="button" value="Add tag"/>
                        </div>
                        <TagListBar tagList={this.state.currentTagList}/>
                    </div>;
        }

        return html;
    }
}

export default TagSearchBar;