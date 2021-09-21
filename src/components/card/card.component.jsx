import React from 'react';
import './card.styles.css';
export const Card = (props) => (
    <div className = 'card-container'>
        <img alt="villian" src={`https://robohash.org/${props.villian.id}?set=set2&size=180x180`} />
        <h2> {props.villian.name} </h2>
        <h2> {props.villian.email} </h2>
    </div>
)