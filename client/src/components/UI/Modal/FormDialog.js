import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from "react-router-dom";

export default function FormDialog(props) {
  const [roomID, setRoomID] = React.useState('');

  const history = useHistory();

  const onJoin = () => {
    history.push(`/room/${roomID}/select-restaurant/waiting`);
  }

  return (
    <div>
      <Dialog open={props.open} onClose={props.onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Join Room</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the id of the tournament room that you would like to join
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Room ID"
            fullWidth
            color='secondary'
            onChange={e => {
              setRoomID(e.target.value);
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onClose} color='secondary'>
            Cancel
          </Button>
          <Button onClick={onJoin} color='secondary'>
            Join
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
