import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';

import {modalStatusSelector, setModalStatus} from '../../../ducks/shared'

class ConfirmDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    
      handleClose = () => {
        this.setState({ open: false });
        this.props.setModalStatus(false)
      };

      confirm = () => {
          this.props.confirm();
          this.props.setModalStatus(false)
      }


      componentWillReceiveProps(nextProps) {
          this.setState({ open: nextProps.modalStatusSelector})
      }
    

    render() {
        return (
            <Fragment>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="responsive-dialog-title"
                >
                <DialogTitle id="responsive-dialog-title">{"Remove Tornament from list?"}</DialogTitle>
                <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    Disagree
                </Button>
                <Button onClick={this.confirm} color="primary" autoFocus>
                    Agree
                </Button>
                </DialogActions>
            </Dialog>
        </Fragment>
        )
    }
}


  
export default connect((state) => ({
    modalStatusSelector:modalStatusSelector(state)
}),{setModalStatus})(ConfirmDialog);