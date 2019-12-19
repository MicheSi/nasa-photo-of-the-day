import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./Navigation";
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';



export default function PhotoCard (props) {
    const [picture, setPicture] = useState([]);
    const [date, setDate] = useState('');
    
    const changeDate = newDate => {
        setDate(newDate);
    }


    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=ZwWLfujY6OMgGUkls4B1eGj5ACTgiIAAbO9fKkv2&date=${date}`)
        .then(response => {
            setPicture(response.data);
            setDate(response.data.date);
            
        })
        .catch(err => {
            console.log('Cannot read data', err);
        })
    }, [date]);

    return (
        <div className="photoContainer">
            <Card inverse>
                <CardImg width="100%" src={picture.url} alt="Nasa Space Photo of the Day" />
                <CardImgOverlay>
                    <CardTitle style={{fontSize: "2.4rem", fontWeight: "bold", marginTop: "5%"}}>{picture.title}</CardTitle>
                    <CardText style={{fontSize: "1.6rem", margin: "5% 15%"}}>{picture.explanation}</CardText>
                    <CardText>
                        <small className="text-muted" style={{fontSize: "1.4rem"}}>{picture.date}</small>
                    </CardText>
                    <NavBar />
                </CardImgOverlay>
            </Card>
            
        </div>
    )
}