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

        { id: "blackMirror", name: "Black Mirror", logo: BlackMirror, details: "An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.", videoId: "nSDviEdvw4U"},
        { id: "bleach", name: "Bleach", logo: bleach, details: "High school student Kurosaki Ichigo is unlike any ordinary kid because he can see ghosts. After an accident with a hollow, he got a power.So begins Kurosaki Ichigo's training and duty as a Shinigami, Soul Reaper.", videoId:"oZ67d9XSjFs"},
        { id: "suits", name: "Suits", logo: Suits, details: "On the run from a drug deal gone bad, brilliant college dropout Mike Ross, finds himself working with Harvey Specter, one of New York City's best lawyers.", videoId:"85z53bAebsI"},
        { id: "theWitcher", name: "The Witcher", logo: TheWitcher, details: "Geralt of Rivia, a solitary monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.", videoId:"ndl1W4ltcmg"},
        { id: "lacasadepapel", name: "La Casa De Papel", logo: casadepapel, details: "A group of unique robbers assault the Factory of Moneda and Timbre to carry out the most perfect robbery in the history of Spain and take home 2.4 billion euros.", videoId:"hMANIarjT50"},
        { id: "fairytail", name: "FairyTail", logo: FairyTail, details: "Lucy, a 17 year old girl, sets out on journey to become a full-fledged wizard and joins the strongest and most (in) famous guild FAIRY TAIL where she meets Natsu, Happy, Gray and Erza, who treat her more like family than friends. This epic series takes us through all the dangers that the members of fairy tail face and eventually overcome through mutual love and friendship.", videoId:"L8HxKTty1WU"}



    ];

}


