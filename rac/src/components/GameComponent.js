import React, { Component } from 'react';
import "./styles.css"


class Game extends Component{
    render(){
        return (
            <div className="mainGame">
                {/* Make map into own component */}
                <div className="map"
                style={{
                    width: 64 * 8,
                    height: 64 * 8
                }}
                ></div>
                <div className="tiles"></div>
            </div>
        )
    }
};

export default Game;