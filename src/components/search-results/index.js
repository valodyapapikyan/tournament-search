import React, {Component} from 'react';
import List from '@material-ui/core/List';
import {connect} from 'react-redux';

import {tournamentsSelector, setStorageChanges } from '../../ducks/search';
import SearchItem from './result-item';
import Storage from '../../utils/storage'


class searchResult extends Component {


    saveTournament = (item) => {
        let tournaments = [];

        if (!Storage.getElement('tournaments')) {
            tournaments.unshift(item);
            Storage.addElement('tournaments', tournaments);

        } else {
            const savedTournaments = Storage.getElement('tournaments');
            const hasSomeTornaments = savedTournaments.some(tournament => tournament.id === item.id);

            if (hasSomeTornaments) {
                console.warn('can`t save some tournamenst')
            } else {
                savedTournaments.unshift(item);
                Storage.addElement('tournaments', savedTournaments);
            }
        }

        this.props.setStorageChanges(Storage.getElement('tournaments'));
    };

    render() {
        return (
            <div className="search-result-container">
                <List>
                    {
                        Array.isArray(this.props.tournaments ) ?
                        this.props.tournaments.map((item) =>
                            <SearchItem key={item.id} clickHandler={this.saveTournament} item={item}/>)
                            : this.props.tournaments
                    }
                </List>
            </div>

        )
    }
}


export default connect((state) => ({
    tournaments: tournamentsSelector(state)
}), {setStorageChanges})(searchResult);
