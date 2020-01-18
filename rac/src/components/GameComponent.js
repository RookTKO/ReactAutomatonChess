import React, { Component } from 'react';
import Board from './BoardComponent';
import Deck from './DeckComponent';
import {DECK} from '../constants/deck';
import InfoContext from './InfoContextComponent';
import "./styles.css"


class Game extends Component{
    constructor(props){
        super(props);
        this.state = {
            deck : DECK
        };
    };

    render(){
        return (
            <div className="mainGame">
                <Board />
                <InfoContext />
                <Deck currentDeck={this.state.deck}/>
            </div>
        )
    }
};

export default Game;