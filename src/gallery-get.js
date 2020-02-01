import React from 'react';
import Movietitle from './MovieTitle';
import BlackMirror from './images/BlackMirror.jpg';
import bleach from './images/bleach.jpg';
import casadepapel from './images/casadepapel.jpg';
import FairyTail from './images/Fairytail.jpg';
import Suits from './images/Suits.jpg';
import TheWitcher from './images/TheWitcher.jpg';



export default function getMovieTitle() {

    return [

        { id: "blackMirror", name: "BlackMirror", logo: BlackMirror},
        { id: "bleach", name: "bleach", logo: bleach },
        { id: "suits", name: "Suits", logo: Suits },
        { id: "theWitcher", name: "TheWitcher", logo: TheWitcher},
        { id: "lacasadepapel", name: "casadepapel", logo: casadepapel},
        { id: "fairytail", name: "FairyTail", logo: Fairytail },



    ];

}


