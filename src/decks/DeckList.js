import React, { Component } from 'react';
import Deck from "./Deck"
import { Link } from "react-router-dom";

class DeckList extends Component {
    render () {
        return (
        <div className="DeckList">

    
        <Deck language="Hebrew"/>
        <Deck language="Greek" />
        <Deck language="Latin" />
        <Deck language="Arabic" />
        <Deck language="Spanish" />
        <Link to="/adddeck"><button>Add Deck</button></Link>
        </div>
         ) }
}

export default DeckList