import React, { useState, useEffect } from "react";
import axios from "axios";


export default function PhotoCard (props) {
    const [picture, getPicture] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=ZwWLfujY6OMgGUkls4B1eGj5ACTgiIAAbO9fKkv2')
        .then(response => {
            getPicture(response.data);
        })
        .catch(err => {
            console.log('Cannot read data', err);
        })
    }, []);

    return (
        <div className="photoContainer">
            <h1>{picture.date}</h1>
            <img className="image" src={picture.url} alt="Nasa Space Photo of the Day" />
            <h3 className="title">{picture.title}</h3>
            <p className="description">{picture.explanation}</p>
        </div>
    )
}