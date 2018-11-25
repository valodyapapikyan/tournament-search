import React, {Component} from 'react';
import { connect } from 'react-redux';

import {onSearchRequest} from '../ducks/search';

import SearchInput from './search-input';
import SearchResult from './search-results/index';
import SavedTournamentsList from './saved-tournaments';

import './../styles/index.css';
const containerHeight= window.innerHeight;


class App extends Component {

    onSearch = (pattern) =>  this.props.onSearchRequest(pattern);

    render() {
        return (
            <div className='app-container' style={{height: containerHeight}}>
                <h1>Type here to search tournaments</h1>
                <div className='search-block'>
                    <SearchInput onSearch={this.onSearch}/>
                    <SearchResult/>
                </div>
                <div className='saved-tournaments-block'>
                    <SavedTournamentsList/>
                </div>
            </div>
            
        );
    }
}

export default connect(state => state , {onSearchRequest})(App);
