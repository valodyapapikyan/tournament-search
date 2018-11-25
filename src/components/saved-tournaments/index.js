import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import List from '@material-ui/core/List';

import {setStorageChanges, storageChangesSelector} from '../../ducks/search';
import { setModalStatus } from '../../ducks/shared'

import Storage from '../../utils/storage';
import ListItem from '../common/list-item/';
import ConfirmDialog from '../common/modal';

import  '../../styles/index.css'

class SavedTournamentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            savedTournamentsList: []
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.storageChangesListener !== this.props.storageChangesListener) {
            this.setState({savedTournamentsList: Storage.getElement('tournaments')})
        }
    }

    componentDidMount() {
        Storage.getElement('tournaments') && this.props.setStorageChanges(Storage.getElement('tournaments'));
    }

    getSelectedItem = (element) => {
        this.props.setModalStatus(true);
        this.setState({ selected: element})
    }

    deleteTournamentItem = () => {
        const {selected} = this.state;
        const savedTournaments = Storage.getElement('tournaments');
        const updatedList = savedTournaments.filter(item => item.id !== selected.id);

        this.setState({savedTournamentsList: updatedList}, () => {
            Storage.addElement('tournaments', this.state.savedTournamentsList);
            this.props.setStorageChanges(Storage.getElement('tournaments'));
        })
    };

    render() {
        const {savedTournamentsList} = this.state;
        return (
            <Fragment>
            <ConfirmDialog  confirm = {this.deleteTournamentItem}/>
                {
                    savedTournamentsList.map((item) => {
                        return (
                            <div className='saved-tournaments-container' key={item.id}>
                                <List>
                                    <ListItem 
                                        clickHandler={this.getSelectedItem}
                                        item={item}
                                        withRemoveIcon
                                        className="item"
                                    />
                                </List>
                            </div>
                        )
                    })
                }
            </Fragment>
        )
    }
}

export default connect((state) => ({
    storageChangesListener: storageChangesSelector(state)
}), {setStorageChanges,setModalStatus})(SavedTournamentsList);






