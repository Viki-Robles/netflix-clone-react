import React from 'react';
import Movietitle from './MovieTitle';
import BlackMirror from './images/BlackMirror.jpg';
import bleach from './images/bleach.jpg';
import casadepapel from './images/casadepapel.jpg';
import FairyTail from './images/FairyTail.jpg';
import Suits from './images/Suits.jpg';
import TheWitcher from './images/TheWitcher.jpg';



export default function getMovieTitle() {

    return [

        { id: "blackMirror", name: "Black Mirror", logo: BlackMirror},
        { id: "bleach", name: "Bleach", logo: bleach },
        { id: "suits", name: "Suits", logo: Suits },
        { id: "theWitcher", name: "The Witcher", logo: TheWitcher},
        { id: "lacasadepapel", name: "La Casa De Papel", logo: casadepapel},
        { id: "fairytail", name: "FairyTail", logo: FairyTail }



    ];

}


