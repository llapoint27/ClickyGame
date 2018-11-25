import React, {Component} from 'react';
import Card from './Card';
import { defaultFriendsArray } from '../../friends';
import './CardManager.css';
import _ from 'lodash';

export class CardManager extends Component {

    constructor(props) {
        super(props);
        this.state = {

            currentCardState: defaultFriendsArray,
            lastCardchosen: null,
        };

        this.cardClickHandler = this.cardClickHandler.bind(this);
    }

    cardClickHandler(id){

        //pull the id from the picture
        console.log(id)
        //destructuring 
        const {currentCardState, lastCardchosen} = this.state;
        console.log('Hi I work'); //testing click function

        if (lastCardchosen) {
            if(lastCardchosen === id) {
                //they lost
             console.log("you lose");
            }
            else {
                //then won
                //call the shuffle function and render
                this.shuffleAllCards();
            }
        }
        //Check to see if we have a saved last click in state
        //if not set it
        //if so compare and give feedback
        //then rearrange array and re-render

        const shuffledArray = this.shuffleAllCards(currentCardState);
        this.setState({ currentCardState: shuffledArray });
    }
    //shuffle function from lodash to return shuffled array
    shuffleAllCards(arr) {
        return _.shuffle(arr);
    }
    //This div is wrapper of all cards
    render() {
        const {currentCardState} = this.state;

        return (
            <div className="flex-container">{currentCardState.map((friend, i) => <Card key={i} cardClickHandler={this.cardClickHandler}  configData={friend} />)}</div>
        )
    }
}