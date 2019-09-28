import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const NasaH1 = styled.h1`
      color: #0b3d91;
`;

const NasaImg = styled.img`
  width: 400px;
  height: 400px;
  object-fit: cover;
`;

const NasaP = styled.p`
  color: #fc3d21;
`;

const PhotoContainer = styled.div`
  width: 400px;
  margin: 0 auto;
`;

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
        <PhotoContainer>
            <NasaH1>{nasaPic.title}</NasaH1>
            <NasaImg src={nasaPic.url}></NasaImg>
            <NasaP>{nasaPic.explanation}</NasaP>
        </PhotoContainer>
    )
}