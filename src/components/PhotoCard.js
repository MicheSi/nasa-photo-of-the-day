import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoData from "./PhotoData";


export default function PhotoCard (props) {
    const [picture, getPicture] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=ZwWLfujY6OMgGUkls4B1eGj5ACTgiIAAbO9fKkv2')
        .then(response => {
            const photo = response.data.hdurl;
            getPicture(photo);
        })
        .catch(err => {
            console.log('Cannot read data', err);
        })
    }, []);

    return (
        <div className="photoContainer">
            <h1>Date</h1>
            

        </div>
    )
}