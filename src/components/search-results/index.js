import React, {Component} from 'react';
import {connect} from 'react-redux';

import {tournamentsSelector, setStorageChanges } from '../../ducks/search';
import ListItem from '../common/list-item';
import Preloader from '../common/preloader'

import Storage from '../../utils/storage'


class searchResult extends Component {
    constructor(props){
        super(props);
        this.state = {
            hideSearchResults: true,
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.tournaments) {
            this.setState({hideSearchResults: false});
        }
    }

    saveTournament = (item) => {
        let tournaments = [];
        this.setState({hideSearchResults: true});

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
           !this.state.hideSearchResults ?
            <div className='search-result-item'>
                <Preloader/>
                    {
                        Array.isArray(this.props.tournaments ) ?
                        this.props.tournaments.map((item) =>
                            <ListItem
                                key={item.id}
                                clickHandler={this.saveTournament}
                                item={item}/>
                            )
                            : this.props.tournaments
                    }
            </div> 
            : null
        )
    }
}


export default connect((state) => ({
    tournaments: tournamentsSelector(state)
}), {setStorageChanges})(searchResult);
