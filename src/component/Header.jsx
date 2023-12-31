"use client"
import Link from 'next/link'
import React, {useRef} from 'react'
import styled from 'styled-components';
const Header = () => {

    return (
        <HeaderContainer>
            <Link href={"/"} className='logo'>Aaraiz Zahid</Link>
            <nav>
                <Link href={'/'}>Home</Link>
                <Link href={'/blog'}>Blog</Link>
                <Link href={'/work'}>Work</Link>
            </nav>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
box-shadow: 2px 2px 10px #435334;
background-color: #435334;
align-items: center;
color: #FAF1E4;
font-family: 'Open Sans', sans-serif;
padding: .5rem 1.5rem;
.logo{
    font-family: "Lato", sans-serif;
    font-weight: 800;
    background-color: #435334;
    font-size: 1.5rem;
}
nav{
    display: flex;
    gap: 2rem;
    background-color: #435334;
    a{
        background-color: #435334;
        transition: all;
        transition-duration: 1s;
    }
    a:active{
        text-decoration: underline;
    }
}
@media only screen and (max-width: 400px)  {
   flex-direction: column;
   gap: .5rem;

}


`

export default Header;