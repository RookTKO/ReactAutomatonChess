import React, { Component } from 'react';

class Game extends Component{
    render(){
        return (
            <div className="mainGame">
                <div className="map"
                style={{
                    width: 32 * 8,
                    height: 32 * 8
                }}
                ></div>
                <div className="tiles"></div>
            </div>
        )
    }
};

export default Game;