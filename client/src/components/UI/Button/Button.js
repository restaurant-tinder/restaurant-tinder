import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    width: '250px',
    height: '50px',
    margin: '20px 50px',
    fontSize: '18px',
    backgroundColor: '#ff6b6b',
    '&:hover': {
        backgroundColor: '#fc2d2d'
    }
  }

  
};

const button = (props) => (
    <Button className={props.classes.button} variant="contained" color="primary" onClick={props.onButtonClick}>
        {props.children}
    </Button>
);

export default withStyles(styles)(button);