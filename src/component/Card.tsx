"use client";
import styled from "styled-components";
import Link from "next/link";
const Card = () => {
  
  return (
    <>
      <Container className="card">
        <h2>
          How to deploy flask app on Ubuntu 22.04 VPS using Nginx and gunicorn
        </h2>
        <h5>
          Araix . <em>July 1, 2023</em>
        </h5>
        <p>
          In this post, we will see how to deploy flask applications using
          gunicorn WSGI server and nginx as a reverse proxy and static files
          server.
        </p>
        <Link href={"/blog/3"}>Read More</Link>
      </Container>
    </>
  );
};

const Container = styled.div`
      padding: 1rem;
      margin: 1rem 0rem;
      border: 2px solid #cedebd;
      border-radius: 9px;
      background: #cedebd;
      box-shadow: 2px 2px 10px #435334;
      h2 {
        font-size: 1.2rem;
        font-weight: 700;
        color: #435334;
        background: #cedebd;
      }
      p {
        color: #545452;
        margin-bottom: 1rem;
        background: #cedebd;
      }
      h5 {
        color: #9eb384;
        background: #cedebd;
        em {
          background: #cedebd;
        }
      }
      a {
        background: #435334;
        color: #faf1e4;
        border-radius: 4px;
        margin-bottom: 1rem;
        padding: 0.5rem 1rem;
      }
  `;

export default Card;
