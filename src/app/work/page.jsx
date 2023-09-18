"use client";
import WorkCard from "@/component/WorkCard";
import styled from "styled-components";
import React, {useEffect, useState} from 'react'
import Image from "next/image"
import axios from 'axios'

const Work = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const strapiApi = axios.create({
        baseURL: "http://localhost:1337/"
    });
    const fetchWork = async () => {
        try {
            const response = await strapiApi.get('/api/works')
            setData(response.data.data)
            if(response.status === 200){
                setLoading(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchWork();
    },[])
  return (
    <>
    {!loading?
    
    <LoadingWork>
    <Image src={"/loader.gif"} width={100} height={100} alt='loading'/>
    </LoadingWork>:
    <WorkContainer>
    <h1>My Work</h1>
    {data.length <= 0? <p className="nothing">Nothing to show</p>:
    <div className="work-card-container">
    {
     data.map((e) => {
         return (
             <>
                 <WorkCard data={e.attributes}/>
             </>
         )
     })
    }
    
   </div>
    }
    
  </WorkContainer>

    }
    </>
  );
};

export const WorkContainer = styled.div`
    width: 100%;
    padding: 3rem;
    min-height: 90vh;
    h1{
        font-size: 2rem;
        font-weight: 700;
        font-family: "Lato", sans-serif;
        color: #435334;
        margin-bottom: 2rem;
    }
    .work-card-container{
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
    .nothing{
        color: #435334;
        text-align: center;
    }
    @media only screen and (max-width: 1000px) and (min-width: 800px)  {
        .work-card-container{
            grid-template-columns: 1fr 1fr 1fr;
        }
    }
    @media only screen and (max-width: 800px) and (min-width: 500px)  {
        .work-card-container{
            grid-template-columns: 1fr 1fr;
        }
    }
    @media only screen and (max-width: 500px)  {
        .work-card-container{
            grid-template-columns: 1fr;
        }
    }

`;

export const LoadingWork = styled.div`

width: 100%;
height: 90vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;


`;


export default Work;
