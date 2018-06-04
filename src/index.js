import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NavBar from "./nav/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DeckList from "./decks/DeckList"
import AddDeckForm from "./AddDeck"
import DeckView from "./DeckView"
import AddCards from './AddCards';

ReactDOM.render((<Router>
    <div>
        <NavBar/>
        <Route exact path="/" component={App} />
        <Route exact path="/decks" component={DeckList} />
        <Route exact path="/adddeck" component={AddDeckForm} />
        <Route path="/deckview/:deckName" component={DeckView} />
        <Route path="/:deckName/addcards" component={AddCards} />
    </div>
</Router>), document.getElementById('root'));
registerServiceWorker();
