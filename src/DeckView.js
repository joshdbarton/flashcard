import React, { Component } from 'react';
import { Link } from "react-router-dom";


class DeckView extends Component  {

    constructor (props, {match}) {
        super(props)

        this.state = {
            deckName: props.match.params.deckName
        }
    }
    
    loadDeck = function () {
        ///fetch call to get the deck I need
    }.bind(this)

    componentDidMount () {
        this.loadDeck() //loads deck into state
    }
    
    render () {
        return (
            <div id="DeckView">
                <h3>{this.state.deckName} Deck</h3>
                <div id ="draw-pile">Draw Pile</div>
                <div id ="discard-pile">Discard Pile</div>
                <div id ="done-pile">Done Pile</div>
                {this.props.name}
            </div>
        )
    }
}

export default DeckView