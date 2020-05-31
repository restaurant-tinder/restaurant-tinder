import React, { useState, useEffect } from 'react';
import * as api from '../../api/api';
import classes from './styles.module.css';
import Heart from '../../assets/heart.svg';
import EmptyStar from '../../assets/empty-star.svg';
import HalfStar from '../../assets/half-star.svg';
import FullStar from '../../assets/full-star.svg';

import { useLocation } from "react-router-dom";

function TournamentPage(props) { 
    const location = useLocation();

    useEffect(() => {
        console.log(location.state)
     }, [location]);

    return (
        <div className={classes.tournamentPageContainer}>
            TOURNAMENT PAGE
        </div>
    )
}

export default TournamentPage;