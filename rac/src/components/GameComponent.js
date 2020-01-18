import React, { Component } from 'react';
import "./styles.css"
import {DECK} from '../constants/deck';


class Game extends Component{
    render(){
        return (
            <div className="mainGame">
                {/* Make map into own component */}
                <div className="board"
                style={{
                    width: 64 * 8,
                    height: 64 * 8
                }}
                ></div>
                <div className="infoContext"></div>
                <div className="cards">
                    {DECK.map((card) =>(
                    <div className='cards'>  ID: {card.id} Name: {card.name} Mana Cost: {card.cost} Image Url: {card.image} </div>
                    ))
                    }
                </div>
            </div>
        )
    }
};

export default Game;