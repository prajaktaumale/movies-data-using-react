import React from "react";
import Movie from "./Movie";
import movies from './moviesData'
 export default function Homescreen(){
    return(
        <div>
            <div className="row">

                {movies.map(movie=>{

                    return <div className="col-md-4">
                        <div>
                            <Movie movie={movie} />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
 }