import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default function Series() {
    return (
        <div>
            <title>Series</title>
            <Link to='/series'></Link>
            <h3>Choose your favourite movie</h3>


            <select
                type="text" required>
                <option>Adventure</option>
                <option>Drama</option>
                <option>Romantic</option>
                <option>Documentary</option>
                <option>Fantasy</option>
                <option>Sci-Fi</option>
            </select>
            <br/>

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
            <select
                type="text" required>
                <option>Adventure</option>
                <option>Drama</option>
                <option>Romantic</option>
                <option>Documentary</option>
                <option>Fantasy</option>
                <option>Sci-Fi</option>
            </select>

        }
    }


function choooseMovie(){
    const movies = movietitle.id;
    this.setState{(
    if (select.option === 'Adventure') {
        return movietitle.id.bleach;
}   if (select.option === 'Drama') {
        return movietitle.id.fairytail
    }

)}
        
render () {
    return (
        <div>
            <div>{this.state.chooseMovie()}</div>
            <Link to= '/:movietitleId'></Link>
        </div>
    );
}

}
    




*/