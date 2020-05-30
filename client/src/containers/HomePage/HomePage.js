import React, { useState, useEffect } from 'react';
import Button from '../../components/UI/Button/Button';
import * as api from '../../api/api';
import classes from './styles.module.css';
import foodFightImage from '../../assets/food_fight.jpg';
import { useHistory } from "react-router-dom";

function HomePage(props) {
    const [roomID, setRoomID] = useState('');
    const history = useHistory();

    const handleHostTournament = () => {
        api.startTournament((roomID) => {
            setRoomID(roomID);
            history.push(`/room/${roomID}/select-restaurant`);
        });
    }

    const handleJoinTournament = () => {
        api.joinTournament(roomID);
    }

    return (
        <div className={classes.homePageContainer}>
            <div className={classes.title}>
                <h1>Restaurant Tournament</h1>
                <h2>Host or join a room!</h2>
            </div>
            <div className={classes.buttonContainer}>
                <Button onButtonClick={handleHostTournament}>
                    Host
                </Button>
                <Button onButtonClick={handleJoinTournament}>
                    Join
                </Button>
            </div>
            <img className={classes.foodFightImage} src={foodFightImage} alt="Food Fight"></img>
        </div>
    )
}

export default HomePage;