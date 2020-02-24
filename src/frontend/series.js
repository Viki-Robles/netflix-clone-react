import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './series.css';


export default function Series() {
    return (
        <div>
            <title>Series</title>
            <Link to='/series'></Link>
            <h3>Choose your favourite movie</h3>
        <div></div>
            <select
                type="text" required>
                <option>Adventure</option>
                <option>Drama</option>
                <option>Romantic</option>
                <option>Documentary</option>
                <option>Fantasy</option>
                <option>Sci-Fi</option>
            </select>
            <br />
            <Link to='/'><button className="buttonHome">Home</button></Link>


        </div>
    );
}

/*

import getMovietitle from...


export default class ChooseMovie extends React.Component {
    constructor(props)
    super(props); {
        this.state = {

        option: 'Adventure',
        option: 'Drama',
        option: 'Anime',
        option: 'SciFy',
        option: 'Documentary',
        option: 'Fantasy',
   }
}
    chooseMovie(e) {
       this.setState({ option: e.target.value});

        let option = ['Adventure', 'Drama', 'Anime'];
        this.setState {

        if ( select.option === 'Adventure') {
            return movietitle.id.bleach;
        }

        if ( select.option === 'Drama') {
            return movietitle.id.theWitcher;
        }
    }

    }
)}

render () {
    return (
        <div>
            <div>{this.state.chooseMovie()}</div>
            <select
                type="text" required>
                <option>`${props.option}Adventure`</option>
                <option>`${props.option}Drama`</option>

            </select>
            <Link to= '/:movietitleId'></Link>
        </div>
    );
}

}





*/