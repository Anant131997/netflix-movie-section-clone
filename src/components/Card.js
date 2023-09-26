import React from "react";

export default function Card(props){
    // console.log(props)
    return(
        <div>
            <div className="card">
                <a href={props.link} className="link">
                    <img src= {props.img} className="card-image" />
                    <p className="card-title">{props.title}</p>
                </a>
            </div>
        </div>
    )
}