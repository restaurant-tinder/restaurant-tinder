import React, { useState, useEffect } from 'react';
import Button from '../../components/UI/Button/Button';
import * as api from '../../api/api';
import classes from './styles.module.css';
import foodFightImage from '../../assets/food_fight.jpg';
import FormDialog from '../../components/UI/Modal/FormDialog';
import { useHistory } from "react-router-dom";

function HomePage() {
    const [openDialog, setOpenDialog] = useState(false);

    const history = useHistory();

    const handleHostTournament = () => {
        api.startTournament((roomID) => {
            api.joinTournament(roomID);
            history.push(`/room/${roomID}/select-restaurant`);
        });
    }

    const handleJoinTournament = () => {
        setOpenDialog(true);
    }

    const handleCloseModal = () => {
        setOpenDialog(false);
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
            <FormDialog open={openDialog} onClose={handleCloseModal}></FormDialog>
            <img className={classes.foodFightImage} src={foodFightImage} alt="Food Fight"></img>
        </div>
    )
}

export default HomePage;