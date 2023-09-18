"use client"
import styled from "styled-components";
import Link from "next/link"
import {BiLogoFacebookCircle, BiLogoInstagramAlt, BiLogoLinkedinSquare, BiLogoTwitter} from "react-icons/bi"

const Footer = () => {
    let date = new Date()
    let year = date.getFullYear();
    return (
        <FooterContainer>
            <div className="text-container">
                <h2>Aaraiz Zahid</h2>
                <div>|</div>
                <h3>Copyright &copy; {year} araizzahid.io</h3>
            </div>
            <div className="icons-container">
              <Link href={"https://twitter.com/ZahidAraiz"} target="_blank"><BiLogoTwitter /></Link>  
               <Link href={"https://www.instagram.com/araizzahid45/"} target="_blank"><BiLogoInstagramAlt /></Link> 
                <Link href={"https://www.linkedin.com/in/aaraiz-baig-81015a260/"} target="_blank"><BiLogoLinkedinSquare /></Link>
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
@media only screen and (max-width: 700px)  {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 0;
    .text-container{
        flex-direction: column;
        gap: 0;
    }
}

`

export default Footer;