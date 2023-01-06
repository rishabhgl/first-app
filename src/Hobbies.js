import React from "react";
import { useState, useEffect } from 'react';
import useFetch from "./useFetch";
import { Link } from 'react-router-dom';



const Hobbies = () => {
    
    const { data : hobbies, error, loading } = useFetch('http://localhost:8000/hobbies');
  
    return (

        <div className="hobby">
        {error && <div>Could not fetch data from the resource!!</div> }
        { loading && <div> Loading...</div> }
        {hobbies &&  <div className="hobbyList">
            <h1>My hobbies include:</h1>
            <p>
                {hobbies.map((hobbies) => (
                    <div className="hobbyItem" key={hobbies.id}>
                        <h2>{hobbies.name}</h2>
                        <p>{hobbies.brief}</p>
                        <button className="click_event"><Link to = {`/details/${hobbies.id}`}>View Details</Link></button>
                    </div>
                ))}
            </p>
        </div>}
      </div>

       

    );
}

export default Hobbies;