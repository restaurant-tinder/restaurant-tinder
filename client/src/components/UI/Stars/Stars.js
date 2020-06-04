import React from 'react';
import classes from './styles.module.css';
import {ReactComponent as EmptyStar} from '../../../assets/empty-star.svg';
import {ReactComponent as HalfStar} from '../../../assets/half-star.svg';
import {ReactComponent as FullStar} from '../../../assets/full-star.svg';

export default function Stars(props) {
    let stars;
    switch (props.rating) {
        case 0.5:
            stars = (
                <div>
                    <HalfStar></HalfStar>
                </div>
            );
            break;
        case 1:
            stars = (
                <div>
                    <FullStar></FullStar>
                    <EmptyStar></EmptyStar>
                    <EmptyStar></EmptyStar>
                    <EmptyStar></EmptyStar> 
                    <EmptyStar></EmptyStar>
                </div>
            );
            break;
        case 1.5:
            stars = (
                <div>
                    <FullStar></FullStar>
                    <HalfStar></HalfStar>
                    <EmptyStar></EmptyStar>
                    <EmptyStar></EmptyStar>
                    <EmptyStar></EmptyStar> 
                </div>
            );
            break;
        case 2:
            stars = (
                <div>
                    <FullStar></FullStar> 
                    <FullStar></FullStar>   
                    <EmptyStar></EmptyStar>
                    <EmptyStar></EmptyStar>
                    <EmptyStar></EmptyStar>     
                </div>
            );
            break;
        case 2.5:
            stars = (
                <div>
                    <FullStar></FullStar> 
                    <FullStar></FullStar> 
                    <HalfStar></HalfStar>
                    <EmptyStar></EmptyStar>
                    <EmptyStar></EmptyStar>
                </div>
            );
            break;
        case 3:
            stars = (
                <div>
                    <FullStar></FullStar> 
                    <FullStar></FullStar> 
                    <FullStar></FullStar>
                    <EmptyStar></EmptyStar>
                    <EmptyStar></EmptyStar>
                </div>
            );
            break;
        case 3.5:
            stars = (
                <div>
                    <FullStar></FullStar> 
                    <FullStar></FullStar> 
                    <FullStar></FullStar>
                    <HalfStar></HalfStar>
                    <EmptyStar></EmptyStar>
                </div>
            );
            break;
        case 4:
            stars = (
                <div>
                    <FullStar></FullStar> 
                    <FullStar></FullStar> 
                    <FullStar></FullStar>
                    <FullStar></FullStar>
                    <EmptyStar></EmptyStar>
                </div>
            );
            break;
        case 4.5:
            stars = (
                <div>
                    <FullStar></FullStar> 
                    <FullStar></FullStar> 
                    <FullStar></FullStar>
                    <FullStar></FullStar>
                    <HalfStar></HalfStar>
                </div>
            );
            break;
        case 5:
            stars = (
                <div>
                    <FullStar></FullStar> 
                    <FullStar></FullStar> 
                    <FullStar></FullStar>
                    <FullStar></FullStar>
                    <FullStar></FullStar>
                </div>
            );
            break;
        default:
            stars = (
                <div>
                    <EmptyStar></EmptyStar>
                    <EmptyStar></EmptyStar>
                </div>
            );
    }
    return (
        stars
    );
};
