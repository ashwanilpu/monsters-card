import React from 'react';
import '../css/Cardlist.css';
import Card from './Card.js';

export default function Cardlist(props) {
    return (
        <div className='card-list'>
             { props.monsters.map(monster=>(
             <Card key={monster.id} monster={monster}/>
        ))}
        </div>
    )
}
