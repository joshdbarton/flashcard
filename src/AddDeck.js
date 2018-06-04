import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './AddDeck.css';

class AddDeck extends Component {
    constructor (props) {
        super(props)
        this.state = {
            deckName: "",
            deckId: null
        }
        
    }
    handleChange = function (event) {
        this.setState({
            deckName: event.target.value
        })

    }.bind(this)
    handleSubmit() {
        const data = {
            deckName: this.state.deckName,
            card: []
        }
        fetch("http://localhost:8088/decks", 
        {
          headers: {
            'content-type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify(data)
        })
    }
 
  render() {
    return (
      <div className="AddDeck">
        <p>Deck Name:</p>
        <input type="text" id="deckName" onChange={this.handleChange}></input>
        <Link to={`/${this.state.deckName}/addcards`} onClick={this.handleSubmit} >Add Cards</Link>
      </div>
    );
  }
}

export default AddDeck;
