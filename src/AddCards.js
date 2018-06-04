import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './AddCards.css';

class AddCards extends Component {
    constructor (props) {
        super(props)
        this.state = {
            deckName: props.match.params.deckName
        }
    }

  render() {
    return (
      <div className="AddCards">
        <Link to={`/deckview/${this.state.deckName}`} >Done Adding Cards</Link>
      </div>
    );
  }
}

export default AddCards;
