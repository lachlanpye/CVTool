import React, { Component } from 'react';
import './FindPage.css';

import TagSearchBar from './../TagSearchBar/TagSearchBar';
import FindTableRow from './FindTableRow/FindTableRow';
import axios from 'axios';

class FindPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'selectValue': 'tag',
            'searchType': 'inc',
            'filter': [],

            'fileList': []
        }

        this.onSelectChange = this.onSelectChange.bind(this);
        this.onSearchTypeChange = this.onSearchTypeChange.bind(this);
        this.onTagChange = this.onTagChange.bind(this);
    }

    componentDidMount() {
        this.getFiles();
    }

    onSelectChange(event) {
        this.setState({
            selectValue: event.target.value
        });
    }
    onTagChange(newTags) {
        this.setState({
            filter: newTags
        });
    }
    onSearchTypeChange(event) {
        this.setState({
            searchType: event.target.value
        });
    }

    getFiles() {
        axios({
            method: "get",
            url: "/api/v1/get-cover-letter-list"
        }).then((res) => {
            var fileNames = res.data.map(file => {
                return { "name": file.name, "tags": file.tags}
            });

            this.setState({
                fileList: fileNames
            })
        }).catch((err) => {
            console.log(err);
        });
    }

    inclusiveFilter(element) {
        var flag = false;
        this.state.filter.forEach(filterEle => {
            if (element.tags.includes(filterEle)) {
                flag = true
            }
        });

        return flag;
    }
    exclusiveFilter(element) {
        var flag = this.state.filter.length;
        var count = 0;
        this.state.filter.forEach(filterEle => {
            if (element.tags.includes(filterEle)) {
                count++;
            }
        });

        if (flag === count) {
            return true;
        }
        else {
            return false;
        }
    }

    render() {
        var searchBar = <div/>;
        switch (this.state.selectValue) {
            case "tag":
                searchBar = <TagSearchBar onTagChange={this.onTagChange} />
                break;
            case "name":
                searchBar = <p>Name search bar</p>
                break;
            default:
                break;
        }

        var tableRows;
        if (this.state.fileList.length > 0) { 
            tableRows = this.state.fileList.map((element) => {
                var flag = null;
                if (this.state.searchType === "inc") {
                    if (this.state.filter.length > 0) {
                        flag = this.inclusiveFilter(element);
                    } else {
                        flag = true;
                    }
                } else {
                    if (this.state.filter.length > 0) {
                        flag = this.exclusiveFilter(element);
                    } else {
                        flag = true;
                    }
                }

                if (flag === true) {
                    const length = element.tags.length;
                    let tagList = element.tags.map((tag, i) => { 
                        let sep = "";
                        if (length !== i + 1) { sep = ", "}
                        if (this.state.filter.includes(tag)) {
                            return <b>{tag}{sep}</b>
                        } else {
                            return <>{tag}{sep}</>
                        }
                    });
                    return <FindTableRow viewPage={(page) => this.props.handleViewFile(page)} filename={element.name} taglist={tagList} />;
                } else {
                    return <></>;
                }
            });
        }

        return (
            <div>
                <h1>Find page</h1>

                <div className="inputDiv">
                    <label>Search by: </label>
                    <select id="search-select" onChange={(e) => this.onSelectChange(e)}>
                        <option value="tag">Tag</option>
                        <option value="name">Name</option>
                    </select>
                    { searchBar }
                    <div onChange={this.onSearchTypeChange}>
                        <input type="radio" value="inc" name="searchType" defaultChecked/><label>Must have at least one tag</label><br/>
                        <input type="radio" value="exc" name="searchType"/><label>Must have all tags</label>
                    </div>
                </div>

                <div className="searchTable">
                    <table>
                        <tr>
                            <th>File name</th>
                            <th>Matching tags</th>
                            <th>Options</th>
                        </tr>
                        { tableRows }
                    </table>
                </div>
            </div>
        );
    }
}

export default FindPage;