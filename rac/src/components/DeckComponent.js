import React, { Component } from 'react';

class Deck extends Component{

    //Add randomness to deck
    //Add clone of deck to muatate
    renderHand(currentDeck){
        return(
            <div className="cards">
                {currentDeck.map((card) =>(
                <div className='cards'>  
                    ID: {card.id} Name: {card.name} Mana Cost: {card.cost} Image Url: {card.image}
                </div>))}
            </div>
        )
    }
    render(){
        return (
            <React.Fragment>
                {this.renderHand(this.props.currentDeck)}
            </React.Fragment>
        )
    }
};

export default Deck;