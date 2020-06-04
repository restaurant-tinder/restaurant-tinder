import React, { useState, useEffect } from 'react';
import * as api from '../../api/api';
import classes from './styles.module.css';
import Heart from '../../assets/heart.svg';
import Stars from '../../components/UI/Stars/Stars';
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

function TournamentPage(props) { 
    const location = useLocation();
    const [tournamentStarted, setTournamentStarted] = useState(false);
    const [room, setRoom] = useState(null);

    const history = useHistory();

    useEffect(() => {
        if (location.state != null) {
            setTournamentStarted(true);
            setRoom(location.state);
            console.log(location.state);
        }

        api.onRoundFinished((updatedRoom) => {
            setRoom(updatedRoom);
            console.log(updatedRoom);
            if (updatedRoom.state == "FINISHED") {
                history.push({
                    pathname: `/room/${props.match.params.roomId}/winner`, 
                    state: updatedRoom.winner
                });
            }
        });

        api.onVoted((player) => {
            console.log(player)
        });
    }, []);

    const vote = (restaurantId) => {
        console.log("VOTING");
        let query = {}
        query.roomId = room._id;
        query.playerId = `${props.match.params.playerId}`;
        query.restuarantId = restaurantId;
        api.vote(query);
    }

    return (
        <div className={classes.tournamentPageContainer}>
            {tournamentStarted ? 
            <div className={classes.restaurantContainer}>
                <div className={classes.restaurant} style={{borderRight: 'solid 1px black'}}>
                    <div className={classes.imageContainer}>
                        <img className={classes.image} src={room.option1.imageLink}></img>
                    </div>
                    <div className={classes.titleContainer}>
                        <p className={classes.title}>{location.state.option1.name}</p>
                        <p className={classes.priceRange}>{room.option1.priceRange}</p>
                    </div>
                    <div className={classes.starsContainer}>
                        <Stars rating={room.option1.rating}></Stars>
                    </div>
                    <div className={classes.location}> 
                        {room.option1.address}, {room.option1.city}, {room.option1.state}, {room.option1.zip}
                    </div>
                    <div className={classes.buttonsContainer}>
                        <button className={classes.reviewsButton} onClick={() => {window.open(room.option1.url, "_blank")}}>Reviews</button>
                        <div className={classes.voteButton} onClick={() => vote(room.option1._id)}>
                            <img src={Heart}></img>
                        </div>
                    </div>
                </div>
                <div className={classes.restaurant}>
                    <div className={classes.imageContainer}>
                        <img className={classes.image} src={room.option2.imageLink}></img>
                    </div>
                    <div className={classes.titleContainer}>
                        <p className={classes.title}>{room.option2.name}</p>
                        <p className={classes.priceRange}>{room.option2.priceRange}</p>
                    </div>
                    <div className={classes.starsContainer}>
                        <Stars rating={room.option2.rating}></Stars>
                    </div>
                    <div className={classes.location}> 
                        {room.option2.address}, {room.option2.city}, {room.option2.state}, {room.option2.zip}
                    </div>
                    <div className={classes.buttonsContainer}>
                        <button className={classes.reviewsButton} onClick={() => {window.open(room.option2.url, "_blank")}}>Reviews</button>
                        <div className={classes.voteButton} onClick={() => vote(room.option2._id)}>
                            <img src={Heart}></img>
                        </div>
                    </div>
                </div>
            </div> 
            : <h1 style={{color: "white"}}>Sorry, the tournament has already started</h1>
            }
        </div>
    )
}

export default TournamentPage;