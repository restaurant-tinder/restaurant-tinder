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
    const [showDesktopView, setShowDesktopView] = useState(true);

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

        function handleResize() {
            setShowDesktopView(window.innerWidth > 768);
        }
      
        window.addEventListener('resize', handleResize);
    }, []);

    const vote = (restaurantId) => {
        console.log("VOTING");
        let query = {}
        query.roomId = room._id;
        query.playerId = `${props.match.params.playerId}`;
        query.restuarantId = restaurantId;
        api.vote(query);
    }

    const desktopView = (restaurant) => {
        return (
            <div className={classes.descriptionContainer}>
                <div className={classes.starsContainer}>
                        <Stars rating={restaurant.rating}></Stars>
                    </div>
                    <div className={classes.locationButtonsContainer}>
                        <div className={classes.location}> 
                            {restaurant.address}, {restaurant.city}, {restaurant.state}, {restaurant.zip}
                        </div>
                        <div className={classes.buttonsContainer}>
                            <button className={classes.reviewsButton} onClick={() => {window.open(restaurant.url, "_blank")}}>Reviews</button>
                            <div className={classes.voteButton} onClick={() => vote(restaurant._id)}>
                                <img src={Heart}></img>
                            </div>
                        </div>
                    </div>
            </div>
        );
    }

    const mobileView = (restaurant) => {
        return (
            <div className={classes.descriptionContainer}>
                <div className={classes.location}> 
                        {restaurant.address}, {restaurant.city}, {restaurant.state}, {restaurant.zip}
                </div>
                <div className={classes.locationButtonsContainer}>
                    <div className={classes.starsContainer}>
                    <Stars rating={restaurant.rating}></Stars>
                </div>
                    <div className={classes.buttonsContainer}>
                        <button className={classes.reviewsButton} onClick={() => {window.open(restaurant.url, "_blank")}}>Reviews</button>
                        <div className={classes.voteButton} onClick={() => vote(restaurant._id)}>
                            <img src={Heart}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className={classes.tournamentPageContainer}>
            {tournamentStarted ? 
            <div className={classes.restaurantContainer}>
                <div className={classes.restaurant}>
                    <div className={classes.imageContainer}>
                        <img className={classes.image} src={room.option1.imageLink}></img>
                    </div>
                    <div className={classes.titleContainer}>
                        <p className={classes.title}>{location.state.option1.name}</p>
                        <p className={classes.priceRange}>{room.option1.priceRange}</p>
                    </div>
                    {showDesktopView ? 
                        desktopView(room.option1)
                        :
                        mobileView(room.option1)
                    }
                </div>
                <div className={classes.restaurant}>
                    <div className={classes.imageContainer}>
                        <img className={classes.image} src={room.option2.imageLink}></img>
                    </div>
                    <div className={classes.titleContainer}>
                        <p className={classes.title}>{room.option2.name}</p>
                        <p className={classes.priceRange}>{room.option2.priceRange}</p>
                    </div>
                    {showDesktopView ? 
                        desktopView(room.option2)
                        :
                        mobileView(room.option2)
                    }
                </div>
            </div> 
            : <h1 style={{color: "white"}}>Sorry, the tournament has already started</h1>
            }
        </div>
    )
}

export default TournamentPage;