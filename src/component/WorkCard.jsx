"use client"
import styled from "styled-components";
import React, {useEffect, useState} from 'react'
import axios from 'axios'

const WorkCard = ({data}) => {
    const [image, setImage] = useState('');
    const strapiApi = axios.create({
        baseURL: "http://localhost:1337/"
    });

    const fetchCover = async () => {
        try {
            const response = await strapiApi.get(`api/upload/files/${data.cover}`)            
          
            setImage("http://localhost:1337"+ response.data.url)
          
        } catch (error) {
          console.log(error)
        }
    }

    useEffect(() => {
        fetchCover()
    }, [])
  return (
    <Container>
      <a href={data.link} target="_blank">
        <div className="card-container">
          <img
            src={image}
            alt=""
          />
          <div className="text-card-container">
            <h2>{data.name}</h2>
            <p>{data.description}</p>
          </div>
        </div>
      </a>
    </Container>
  );
};
const Container = styled.div`
a {
    .card-container{
        transition: all;
        transition-duration: 1s;
        display: flex;
        flex-direction: column;
        background: #CEDEBD;
        border-radius: 12px;    
        border: 2px solid #9EB384;
        box-shadow: .2rem .2rem .5rem #9EB384;
        img{
            border-radius: 12px;
        }
    }
    h2 {
        font-family: "Lato", sans-serif;
        color: #435334;
        font-weight: 900;
        font-size: 1.4rem;
        margin-bottom: .3rem;
        font-family: 1.4rem;
      }
    p {
        color: #435334;
    }
    .text-card-container{
        padding: 1.3rem;
        padding-bottom: 3rem;
    }
}

.card-container:hover{
    margin: -.5rem;
    box-shadow: .4rem .4rem 1rem #9EB384;
    .text-card-container{
        padding: 1.2rem;
        padding-bottom: 3rem;
    }
}
  



`;
export default WorkCard;
