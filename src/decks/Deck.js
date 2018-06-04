import React, { Component } from 'react';


class Deck extends Component {
    render() {
        return (
            <div className="deck">
            <p>This is a deck</p>
            <p>Language: {this.props.language}</p>
            </div>
        )
    }
} 

export default Deck