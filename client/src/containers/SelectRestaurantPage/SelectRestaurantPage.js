import React, { useState, useEffect } from 'react';
import * as api from '../../api/api';
import classes from './styles.module.css';
import Button from '../../components/UI/Button/Button';
function SelectRestaurantPage(props) { 
    const [terms, setterms] = useState('');
    const [location, setLocaion] = useState('');

    const categories = ['Acai Bowls', 'Bagels', 'Bakeries', 'Beer, Wine & Spirits', 'Beverage Store', 'Breweries', 'Brewpubs', 'Bubble Tea', 'Butcher', 'CSA', 'Chimney Cakes', 'Cideries', 'Coffee & Tea', 'Coffee Roasteries', 'Convenience Stores', 'Cupcakes', 'Custom Cakes', 'Desserts', 'Distilleries', 'Do-It-Yourself Food', 'Donuts', 'Empanadas', 'Farmers Market', 'Food Delivery Services', 'Food Trucks', 'Gelato', 'Grocery', 'Honey', 'Ice Cream & Frozen Yogurt', 'Imported Food', 'International Grocery', 'Internet Cafes', 'Juice Bars & Smoothies', 'Kombucha', 'Meaderies', 'Organic Stores', 'Patisserie/Cake Shop', 'Piadina', 'Poke', 'Pretzels', 'Shaved Ice', 'Shaved Snow', 'Smokehouse', 'Specialty Food', 'Candy Stores', 'Cheese Shops', 'Chocolatiers & Shops', 'Fruits & Veggies', 'Health Markets', 'Herbs & Spices', 'Macarons', 'Meat Shops', 'Olive Oil', 'Pasta Shops', 'Popcorn Shops', 'Seafood Markets', 'Street Vendors', 'Tea Rooms', 'Water Stores', 'Wineries', 'Wine Tasting Room'];

    const handleGetRestaurant = () => {
        let query = {id: props.match.params.id, term: terms, location: location};
        api.getRestaurants(query);
    }

    useEffect(() => {
        api.onGameStarted((result) => {
            console.log(result);
        });
    }, []);

    return (
        <div className={classes.selectRestaurantContainer}>
            <div className={classes.searchContainer}>
            <input className={classes.terms} list="categories" placeholder="pizza, sushi, chicken..." onChange={(e) => setterms(e.target.value)}/>
            <datalist id="categories" style={{height: "100px"}}>
                {categories.map(category => {
                    return <option value={category} key={category}/>
                })}
            </datalist>
            <input className={classes.location} placeholder="address, neighborhood, city, state, or zip" onChange={(e) => setLocaion(e.target.value)}/>
            </div>
            <Button className={classes.button} onButtonClick={handleGetRestaurant}>Get Restaurants</Button>
        </div>
    )
}

export default SelectRestaurantPage;