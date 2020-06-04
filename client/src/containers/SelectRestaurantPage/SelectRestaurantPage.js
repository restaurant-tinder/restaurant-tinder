import React, { useState, useEffect } from 'react';
import * as api from '../../api/api';
import classes from './styles.module.css';
import Button from '../../components/UI/Button/Button';
import { useHistory } from "react-router-dom";

function SelectRestaurantPage(props) { 
    const [terms, setterms] = useState('');
    const [location, setLocaion] = useState('');

    const history = useHistory();

    const categories = ['Acai Bowls', 'Bagels', 'Bakeries', 'Beer, Wine & Spirits', 'Beverage Store', 'Breweries', 'Brewpubs', 'Bubble Tea', 'Butcher', 'CSA', 'Chimney Cakes', 'Cideries', 'Coffee & Tea', 'Coffee Roasteries', 'Convenience Stores', 'Cupcakes', 'Custom Cakes', 'Desserts', 'Distilleries', 'Do-It-Yourself Food', 'Donuts', 'Empanadas', 'Farmers Market', 'Food Delivery Services', 'Food Trucks', 'Gelato', 'Grocery', 'Honey', 'Ice Cream & Frozen Yogurt', 'Imported Food', 'International Grocery', 'Internet Cafes', 'Juice Bars & Smoothies', 'Kombucha', 'Meaderies', 'Organic Stores', 'Patisserie/Cake Shop', 'Piadina', 'Poke', 'Pretzels', 'Shaved Ice', 'Shaved Snow', 'Smokehouse', 'Specialty Food', 'Candy Stores', 'Cheese Shops', 'Chocolatiers & Shops', 'Fruits & Veggies', 'Health Markets', 'Herbs & Spices', 'Macarons', 'Meat Shops', 'Olive Oil', 'Pasta Shops', 'Popcorn Shops', 'Seafood Markets', 'Street Vendors', 'Tea Rooms', 'Water Stores', 'Wineries', 'Wine Tasting Room'];

    useEffect(() => {
        api.onGameStarted((result) => {
            history.push({
                pathname: `/room/${props.match.params.roomId}/${props.match.params.playerId}/tournament`, 
                state: result
            });
        });
    }, []);
    
    const handleGetRestaurant = () => {
        let query = {id: props.match.params.roomId, term: terms, location: location};
        api.getRestaurants(query);
    }

    return (
        <div className={classes.selectRestaurantContainer}>
            <div className={classes.idContainer}>
                <h2 style={{margin: '0'}}>Your room ID is: {props.match.params.roomId}</h2>
                <h3>Share the room ID with others to participate in the tournament</h3>
            </div>
            <div className={classes.searchContainer}>
                <div className={classes.termsContainer}>
                    <label>Find</label>
                    <input className={classes.terms} list="categories" placeholder="pizza, sushi, chicken..." onChange={(e) => setterms(e.target.value)}/>
                </div>
                <datalist id="categories">
                    {categories.map(category => {
                        return <option value={category} key={category}/>
                    })}
                </datalist>
                <div className={classes.locationContainer}> 
                    <label>Near</label>
                    <input className={classes.location} placeholder="address, neighborhood, city, state, or zip" onChange={(e) => setLocaion(e.target.value)}/>
                </div>
            </div>
            <Button className={classes.button} onButtonClick={handleGetRestaurant}>Get Restaurants</Button>
        </div>
    )
}

export default SelectRestaurantPage;