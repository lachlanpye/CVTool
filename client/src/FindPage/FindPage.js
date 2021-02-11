import React, { Component } from 'react';
import './FindPage.css';

import TagSearchBar from './../TagSearchBar/TagSearchBar';
import FindTableRow from './FindTableRow/FindTableRow';
import axios from 'axios';
import LoadingComponent from '../LoadingComponent/LoadingComonent';

class FindPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'selectValue': 'tag',
            'searchType': 'inc',
            'filter': [],

            'fileList': [],
            'loadingTable': true
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
        var promises = [];
        promises.push(new Promise((resolve, reject) => {
            axios({
                method: "post",
                url: "/api/v1/get-cover-letter-list",
                data: { email: this.props.email }
            }).then((res) => {
                var fileNames = res.data.map(file => {
                    return { "name": file.name, "tags": file.tags, "type": "cover-letter", "email": this.props.email }
                });
                resolve({ fileList: fileNames });
            });
        }));
        promises.push(new Promise((resolve, reject) => {
            axios({
                method: "post",
                url: "/api/v1/get-resume-list",
                data: { email: this.props.email }
            }).then((res) => {
                var fileNames = res.data.map(file => {
                    return { "name": file.name, "tags": file.tags, "type": "resume" }
                });
                resolve({ fileList: fileNames });
            });
        }));

        Promise.all(promises).then(values => {
            this.setState({
                fileList: values[0].fileList.concat(values[1].fileList),
                loadingTable: false
            });
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

    onDelete(filename, type) {
        if (type === "cover-letter") {
            axios({
                method: "post",
                url: "/api/v1/delete-cover-letter",
                data: { name: filename, email: this.props.email },
            }).then(res => {
                this.getFiles();
            });
        }
        if (type === "resume") {
            axios({
                method: "post",
                url: "/api/v1/delete-resume",
                data: { name: filename, email: this.props.email }
            }).then(res => {
                this.getFiles();
            });
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
                    return <FindTableRow 
                                viewPage={(page, type) => this.props.handleViewFile(page, type)} 
                                deleteFile={(file, type) => this.onDelete(file, type)}
                                filename={element.name} 
                                filetype={element.type} 
                                taglist={tagList} 
                                email={this.props.email}
                            />;
                } else {
                    return <></>;
                }
            });
        }

        return (
            <div>
                <h1>Find page</h1>

                <div className="inputDiv">
                    <label>Filter by tag: </label>
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
                            <th>File type</th>
                            <th>Matching tags</th>
                            <th>Options</th>
                        </tr>
                        <LoadingComponent loading={this.state.loadingTable}>
                            { tableRows }
                        </LoadingComponent>
                    </table>
                    <br/>
                </div>
            </div>
        );
    }
}

export default FindPage;