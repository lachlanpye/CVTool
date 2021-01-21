import React, { Component } from 'react';
import './FindPage.css';

import TagSearchBar from './../TagSearchBar/TagSearchBar';
import FindTableRow from './FindTableRow/FindTableRow';

class FindPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'selectValue': 'tag',
            'searchType': 'inc',
            'filter': []
        }

        this.onSelectChange = this.onSelectChange.bind(this);
        this.onSearchTypeChange = this.onSearchTypeChange.bind(this);
        this.onTagChange = this.onTagChange.bind(this);
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
        // TODO: Add axios GET request in here
        return [
            {
                "name": "Lachlan Pye",
                "tags": ["React", "NodeJS"]
            }, 
            {
                "name": "Lachlan Pye 2",
                "tags": ["React"]
            },
            {
                "name": "Lachlan Pye 3",
                "tags": ["HTML", "CSS"]
            }
        ]  
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

        var tableRows = this.getFiles().map((element) => {
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
                return <FindTableRow viewPage={(page) => this.props.handlePageChange(page)} filename={element.name} taglist={element.tags.toString(", ")} />;
            } else {
                return <></>;
            }
        });

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