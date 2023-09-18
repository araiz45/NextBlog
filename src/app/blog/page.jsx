"use client"
import styled from 'styled-components'
import Card from '@/component/Card'
import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Image from 'next/image'
import Link from "next/link";
import { any } from 'prop-types'
const Blog = () =>{
    let [page, setPage] = useState(1);
    const [pagination, setPagination] = useState(0);
    const [articlesArray, setArticles] = useState([]);
    const strapiApi = axios.create({
        baseURL: "http://localhost:1337/"
    });
    const fetchArticles = async () =>{
       try{ 
           const response = await strapiApi.get(`api/articles?pagination[page]=${page}&pagination[pageSize]=4&sort[0]=publishedAt:desc`);
           const data = response.data.data
           setArticles((e) => [...e, ...data]);
           let addPage = page + 1
           setPage(addPage);
        }
        catch(err) {
            console.log("This is an error"+err);
        }
    }
    useEffect(() =>{
        fetchArticles();

    }, [])
    useEffect(() =>{
        const handleScroll = () =>{
           if(window.innerHeight + window.scrollY >= document.body.offsetHeight){
                fetchArticles();
           }
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [page])
    return (
        <BlogContainer>
            <div className="first-col">
                <h1>Coding Aritcles</h1>
                {articlesArray.length !== 0? 
                <>
                {articlesArray.map((e) =>{
                    return (
                        <Card data={e.attributes} id={e.id}/>
                    )
                })}
                </>
            : <div className="loading">
            <Image src={"/loader.gif"} width={100} height={100} alt='loading'/>
            <p>Loading...</p>    
        </div>}
            </div>
        </BlogContainer>
    )
}

export const BlogContainer = styled.div`    
font-family: 'Lato', sans-serif;
width: 100%;
padding: 2rem 2rem;;
h1{
    font-family: "Lato", sans-serif;
    font-size: 1.4rem;
    color: #435334;
    font-weight: 600;
}

.first-col{
    max-width: 70%;
}

.loading{
    text-align: center;
    height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    p{
        color: #435334;
    }
}

@media only screen and (max-width: 500px)  {
    .first-col{
    max-width: 70%;
}
}



`

export default Blog;