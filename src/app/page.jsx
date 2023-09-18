"use client";
import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";
export default function Home() {
  return (
    <Container>
      <div className="major-container">
        <h1>Aaraiz Zahid</h1>
        <Image src={"/avatar.jpg"} width={233} height={233} alt="avatar" />
        <div className="link-container">
          <Link href={"https://www.instagram.com/araizzahid45/"} target="_blank">Instagram</Link>
          <Link href={"https://www.linkedin.com/in/aaraiz-baig-81015a260/"} target="_blank">Linkden</Link>
          <Link href={"https://github.com/araiz45"} target="_blank">Github</Link>
          <Link href={"https://twitter.com/ZahidAraiz"} target="_blank">Twitter</Link>
        </div>
        <p>
          Aaraiz Zahid is a Karachi, Pakistan based MERN Stack/Next.js developer
          who is doing his Bachelors from Virtual Univerisity of Pakistan
        </p>
      </div>
    </Container>
  );
}

export const Container = styled.div`
  max-width: 100%;
  min-height: 90vh;
  padding: 0rem 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    h1 {
      font-size: 2rem;
      font-family: "Lato", sans-serif;
      font-weight: 900;
      color: #435334;
    }
    img {
      border-radius: 100%;
      border: 4px solid #435334;
    }
    .link-container {
      display: flex;
      gap: 0.4rem;
      flex-direction: row;
      a {
        display: flex;
        background: #435334;
        color: #faf1e4;
        border-radius: 6px;
        font-family: "Open Sans", sans-serif;
        padding: 0.5rem 1rem;
      }
    }
    p {
      font-family: "Open Sans", sans-serif;
      color: #435334;
      font-weight: 500;
      margin-top: 1rem;
    }
  }


@media only screen and (max-width: 500px)  {
  .link-container{
    gap: .3rem !important;
    a{
      padding: 0.5rem 0.4rem !important;
      font-size: .8rem !important;

    }

  }
`;
