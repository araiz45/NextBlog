"use client"
import styled from "styled-components";
import Link from "next/link"
import {BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoLinkedinSquare} from "react-icons/bi"

const Footer = () => {
    return (
        <FooterContainer>
            <div className="text-container">
                <h2>Inspireme</h2>
                <div>|</div>
                <h3>Copyright &copy; 2023 Inspireme.com</h3>
            </div>
            <div className="icons-container">
              <Link href={"/"}><BiLogoFacebookCircle /></Link>  
               <Link href={"/"}><BiLogoInstagramAlt /></Link> 
                <Link href={"/"}><BiLogoLinkedinSquare /></Link>
            </div>

        </FooterContainer>
    )
}
const FooterContainer = styled.div`
background: #435334;
width: 100%;
justify-content: space-between;
display: flex;
align-items: center;
padding: .5rem 1.5rem;
h2{
    background: #435334;
    font-family: "Lato", sans-serif;
    font-weight: 900;
    font-size: 1.4rem;
    color: #FAF1E4;
}
h3{
    font-family: "Open Sans", sans-serif;
    font-weigth: 400;
    color: #FAF1E4;
}
.icons-container{
    display: flex;
    gap: .4rem;
    a{
        color: #FAF1E4;
        font-size: 1.7rem;
        
    }
}
.text-container{
    display: flex;
    align-items: center;
    gap: 1.2rem;
    color: #FAF1E4;
    
}

`

export default Footer;