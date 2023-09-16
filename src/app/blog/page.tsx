"use client"
import styled from 'styled-components'
import Card from '@/component/Card'
import Link from "next/link";
const Blog = () =>{
    return (
        <BlogContainer>
            <div className="first-col">
                <h1>Coding Aritcles</h1>
                <Card />
                <Card />
                <Card />
            </div>
        </BlogContainer>
    )
}

const BlogContainer = styled.div`    
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


`

export default Blog;