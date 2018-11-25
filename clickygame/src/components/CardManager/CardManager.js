import React, {Component} from 'react';
import Card from './Card';
import { defaultFriendsArray } from '../../friends';
import './CardManager.css';
import _ from 'lodash';

export class CardManager extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentCardState:defaultFriendsArray,
            lastCardhosen:null,
        };

        this.cardClickHandler = this.cardClickHandler.bind(this);
    }

    cardClickHandler(id){

        console.log(id)
        const {currentCardState, lastCardhosen} = this.state;
        console.log('Hi I work');

        if (lastCardhosen) {
            if(lastCardhosen === id) {
                //they lost
             console.log("you lose");
            }
            else {
                //then won
                this.shuffleAllCards();
            }
        }
        //Check to see if we have a saved last click in state
        //if not set it
        //if so compare and give feedback
        //then rearrange array and re-render
        const shuffledArray = this.shuffleAllCards(currentCardState);
        this.setState({currentCardState:shuffledArray});
    }

    shuffleAllCards(arr) {
        return _.shuffle(arr);
    }
    //This div is wrapper of all cards
    render() {
        const {currentCardState} = this.state;

        return (
            <div className="card-container">{currentCardState.map((friend, i) => <Card key={i} cardClickHandler={this.cardClickHandler}  configData={friend} />)}</div>
        )
    }
}