import React from "react";
import Card from "./Card";
import data from "../data.json";


export default function Body(){
    const { newReleases, hindiMovies, horrorMovies, actionThriller } = data;

    const renderMovies = (movies) => {
      return movies.map((item) => (
        <Card key={item.id} {...item} />
      ));
    };
    return(
        <>
        <div className="section">
          <p className="card-section-title">New Releases</p>
          <section className="card-collection">
            {renderMovies(newReleases)}
          </section>
        </div>
  
        <div className="section">
          <p className="card-section-title">Hindi-Language Movies</p>
          <section className="card-collection">
            {renderMovies(hindiMovies)}
          </section>
        </div>

        <div className="section">
          <p className="card-section-title">Horror Movies</p>
          <section className="card-collection">
            {renderMovies(horrorMovies)}
          </section>
        </div>

        <div className="section">
          <p className="card-section-title">Action Thriller</p>
          <section className="card-collection">
            {renderMovies(actionThriller)}
          </section>
        </div>
        </>
    )
}