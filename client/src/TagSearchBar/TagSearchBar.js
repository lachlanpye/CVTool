import React, { Component } from 'react';
import axios from 'axios';

import TagListBar from './TagListBar/TagListBar';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';

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
        this.removeTag = this.removeTag.bind(this);
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
        if (this.state.tagInputValue.length > 0) {
            this.setState(prevState => ({
                currentTagList: [...prevState.currentTagList, prevState.tagInputValue],
                tagInputValue: ""
            }), () => {
                this.props.onTagChange(this.state.currentTagList);
            });
        }
    }

    removeTag(tag) {
        let newTagList = [...this.state.currentTagList];
        let index = newTagList.indexOf(tag);
        if (index !== -1) {
            newTagList.splice(index, 1);
            this.setState({currentTagList: newTagList});
        }
    }

    render() {
        var html = <div/>;
        if (this.state.fullTagList.data !== undefined) {
            html =  <div>
                        <div id="tag-search-bar">
                            <TextInput id="tag-search" list="tag-datalist" placeholder="Search..." value={this.state.tagInputValue} onChange={this.onTagInputChange}/>
                                <datalist id="tag-datalist">
                                    {this.state.fullTagList.data.map((item, key) => {
                                        return <option key={key} value={item}/>
                                    })}
                                </datalist>
                            <Button value="Add tag" onClick={this.addTag}/>
                        </div>
                        <TagListBar tagList={this.state.currentTagList} onRemoveTag={this.removeTag}/>
                    </div>;
        }
        else {
            html =  <div>
                        <div id="tag-search-bar">
                            <TextInput id="tag-search"/>
                            <Button value="Add tag"/>
                        </div>
                        <TagListBar tagList={this.state.currentTagList}/>
                    </div>;
        }

        return html;
    }
}

export default TagSearchBar;