import React, {Component} from 'react';
import {connect} from 'react-redux';

import List from '@material-ui/core/List';

import {setStorageChanges, storageChangesSelector} from '../../ducks/search';
import Storage from '../../utils/storage';
import ListItem from '../common/list-item/'

import  '../../styles/index.css'

class SavedTournamentsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            savedTournamentsList: []
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.storageChangesListener !== this.props.storageChangesListener) {
            this.setState({savedTournamentsList: Storage.getElement('tournaments')})
        }
    }

    //TODO fix :: set length 
    componentDidMount() {
        Storage.getElement('tournaments') && this.props.setStorageChanges(Storage.getElement('tournaments'));
    }

    deleteTournamentItem = (element) => {
        const savedTournaments = Storage.getElement('tournaments');
        const updatedList = savedTournaments.filter(item => item.id !== element.id);

        this.setState({savedTournamentsList: updatedList}, () => {
            Storage.addElement('tournaments', this.state.savedTournamentsList);
            this.props.setStorageChanges(Storage.getElement('tournaments'));
        })
    };

    render() {
        const {savedTournamentsList} = this.state;
        return (
            <div className='saved-list-container'>
                {
                    savedTournamentsList.map((item) => {
                        return (
                            <div key={item.id} className="saved-tournaments-item">
                                <List >
                                    <ListItem 
                                        clickHandler={this.deleteTournamentItem}
                                        item={item}
                                        withRemoveIcon
                                        className="item"
                                    />
                                </List>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default connect((state) => ({
    storageChangesListener: storageChangesSelector(state)
}), {setStorageChanges})(SavedTournamentsList);






