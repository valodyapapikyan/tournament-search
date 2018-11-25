import React, {Component} from 'react';
import {connect} from 'react-redux';
// import List from '@material-ui/core/List';

import {setStorageChanges ,storageChangesSelector   } from '../../ducks/search';
import Storage from '../../utils/storage'

class  SavedTournamentsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            savedTournamentsList: []
        };
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.storageChangesListener !== this.props.storageChangesListener) {
            this.setState({savedTournamentsList: Storage.getElement('tournaments')})
        }
    }

    componentDidMount() {
        Storage.getElement('tournaments') && this.props.setStorageChanges(Storage.getElement('tournaments'));
    }

    deleteTournamentItem = (element) => {
       const savedTournaments = Storage.getElement('tournaments');
       const updatedList = savedTournaments.filter(item => item.id !== element.id);

       this.setState({savedTournamentsList: updatedList}, () => {
            Storage.addElement('tournaments', this.state.savedTournamentsList)
       })
    };

    render() {

        const {savedTournamentsList} = this.state;
        return (
             <ul>
                 {
                     savedTournamentsList.map((item) =>{
                         return (
                             <li key={item.id}> {item.title} <span onClick={() =>this.deleteTournamentItem(item)}>x</span></li>
                         )
                     })
                 }
             </ul>
        )
    }
}

export default connect((state) => ({
    storageChangesListener: storageChangesSelector(state)
}), {setStorageChanges})(SavedTournamentsList);





