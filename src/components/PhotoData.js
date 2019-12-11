import React from "react";
import PhotoCard from "./PhotoCard";

export default function PhotoData(props) {

    const {date, hdurl, title, info} = props;
    
    return (
        <div className="photoData">
            <div>
                <h1>{date}</h1>
                <img src={hdurl} />
                <h3>{title}</h3>
            </div>
            <div>
                <p>{info}</p>
            </div>
            
        </div>
    )

}
