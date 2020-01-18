import React, { Component } from 'react';

class Board extends Component{
    render(){
        return (
                <div className="board"
                style={{
                    width: 64 * 8,
                    height: 64 * 8
                }}
                ></div>
        )
    }
};

export default Board;