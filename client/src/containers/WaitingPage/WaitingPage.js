import React, { useState, useEffect } from 'react';
import * as api from '../../api/api';
import classes from './styles.module.css';
import { useHistory } from "react-router-dom";

function WaitingPage(props) { 
    const history = useHistory();

    useEffect(() => {
        api.joinTournament(props.match.params.id);
    });

    useEffect(() => {
        api.onGameStarted((result) => {
            history.push({
                pathname: `/room/${props.match.params.id}/tournament`, 
                state: result
            });
        });
    }, []);

    return (
        <div className={classes.waitingPageContainer}>
            <h1>
                Waiting for host to select restaurants...
            </h1>
        </div>
    )
}

export default WaitingPage;