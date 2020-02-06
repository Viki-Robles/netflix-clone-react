import React from 'react';
import './Play.css';


export default function Play(props) {
    return (
        <div>
    <iframe src={`https://www.youtube.com/embed/${props.videoId}` }></iframe>
        </div>
    );
}

/*<iframe src={`${props.movietitle.videoId} videoId`} 
"https://www.youtube.com/embed/nSDviEdvw4U"
*/