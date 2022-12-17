import React from "react";


export default function Movie({ movie }) {
    return (
        <div style={{margin:'70px'}}>
            <h1>{movie.name}</h1>
            <img src={movie.image} style={{ height: '150px', width: '150px' }} />
            <div className="flex-container">
                <div className="w-100">
                    <p>Ratings: {movie.Ratings}</p>
                </div>
                <div className="w-100 m-1">
                    <p>Quality</p>
                    <select>
                        {movie.Quality.map(Quality =>{
                             return <option value={Quality}>{Quality}</option>
                        })} 
                        </select>
                </div>
            </div>
            <div className="m-1" w-100>
                <h1 style={{fontWeight:'400'}}>Category: {movie.category}</h1>
            </div>
            <div>
                <button style={{fontSize:'20px',marginRight:'20px', backgroundColor:'red', border:'none'}} >Delete</button>
                <button style={{fontSize:'20px',marginRight:'20px', backgroundColor:'blue', border:'none'}}>Edit</button>
            </div>
        </div>
    )
}