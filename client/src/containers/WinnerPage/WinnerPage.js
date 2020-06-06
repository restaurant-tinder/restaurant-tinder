import React, { useState, useEffect } from 'react';
import classes from './styles.module.css';
import Stars from '../../components/UI/Stars/Stars';
import { useLocation } from "react-router-dom";

function WinnerPage(props) { 
    const location = useLocation();
    const [restaurant, setRestaurant] = useState(location.state);

    return (
        <div className={classes.winnerPageContainer}>
            <div className={classes.winnerContainer}>
                <div>
                    <h1 style={{color: 'white'}}>Winner!</h1>
                </div>
                <div className={classes.restaurantContainer}>
                    <div className={classes.restaurant}>
                        <div className={classes.imageContainer}>
                            <img className={classes.image} src={restaurant.imageLink}></img>
                        </div>
                        <div className={classes.titleContainer}>
                            <p className={classes.title}>{restaurant.name}</p>
                            <p className={classes.priceRange}>{restaurant.priceRange}</p>
                        </div>
                        <div className={classes.starsContainer}>
                            <Stars rating={restaurant.rating}></Stars>
                        </div>
                        <div className={classes.location}> 
                            {restaurant.address}, {restaurant.city}, {restaurant.state}, {restaurant.zip}
                        </div>
                        <div className={classes.buttonsContainer}>
                            <button className={classes.reviewsButton} onClick={() => {window.open(restaurant.url, "_blank")}}>Reviews</button>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default WinnerPage;