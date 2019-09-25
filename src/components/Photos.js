import React, { useState, useEffect } from "react";
import axios from "axios";


export default function Photos() {
    const [nasaPic, setNasaPic] = useState({});

    useEffect(() => {
      const fetchData = () => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=rDsFnnQhukcOTcoU9ZwPXyud5sT3vMRcOTjG8C6d')
          .then(results => {
            console.log(results);
            setNasaPic(results.data);
          })
          .catch((err) => console.log(err));
      }
      fetchData();
    }, []);

    return (
        <div className="Photos">
            <h1>{nasaPic.title}</h1>
            <img src={nasaPic.url}></img>
            <p>{nasaPic.explanation}</p>
        </div>
    )
}