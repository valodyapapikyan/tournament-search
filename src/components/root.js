import React, {Component} from 'react';
import { connect } from 'react-redux';

import {onSearchRequest} from '../ducks/search';

import SearchInput from './search-input';
import SearchResult from './search-results/index';
import SavedTournamentsList from './saved-tournaments';

import './../styles/index.css';
const containerWidth = window.innerWidth;


class App extends Component {

    onSearch = (pattern) =>  this.props.onSearchRequest(pattern);

    render() {
        return (
            <div className="app-container" style={{height:containerWidth}}>
                <h1>Type here to search tournaments</h1>
                <SearchInput onSearch={this.onSearch}/>
                <SearchResult/>
                <SavedTournamentsList/>
            </div>
        );
    }
}

export default connect(state => state , {onSearchRequest})(App);
