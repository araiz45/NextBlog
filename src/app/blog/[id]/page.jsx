"use client";
import { Remarkable } from "remarkable";
import styled from "styled-components";
import CommentCard from "@/component/CommentCard";
import React, { useState, useEffect } from "react";
import xss from "xss";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Image from "next/image";

const BlogId = ({ params }) => {
  const md = new Remarkable();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState("");
  const [username, setUsername] = useState("");
  const [commentArray, setCommentArray] = useState([]);
  const [comment, setCommnet] = useState("");
  const strapiApi = axios.create({
    baseURL: "http://localhost:1337/",
  });
  const fetchArticleById = async () => {
    try {
      const response = await strapiApi.get(`api/articles/${params.id}`);

      if (response.status === 200) {
        setLoading(false);
      }
      const gettingData = response.data.data.attributes;
      setData(gettingData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchArticleById();
  }, []);
  const handleComment = async (e) => {
    e.preventDefault();
    const data = {
      data: {
        user: xss(username),
        comment: xss(comment),
        article: params.id,
      },
    };
    try {
      const response = await strapiApi.post(`api/comments/`, data);
      if (response.status === 200) {
        toast.success("Your comment has been added");
      }
    } catch (error) {
      console.log(error);
      toast.error("your comment not been added");
    }
  };

  const gettingComment = async () => {
    try {
      const response = await strapiApi.get(
        `http://localhost:1337/api/comments?filters[article][$eq]=${params.id}`
      );
      setCommentArray(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gettingComment();
  }, []);
  const html = md.render(data.Description);
  let date = new Date(data.publishedAt);
  let anotherDate = date.toDateString();
  return (
    <>
      {loading ? (
        <CustomLoading>
          <Image src={"/loader.gif"} width={100} height={100} alt="Loading" />
        </CustomLoading>
      ) : (
        <CustomBlogContainer>
          <div className="card-container">
            <h1>{data.Title}</h1>
            <h4 className="author">
              Araix - <div>{anotherDate}</div>
            </h4>
            <div className="description">
              <p dangerouslySetInnerHTML={{ __html: html }}></p>
            </div>
          </div>
          <div className="comment-container">
            <h2>Add Comment</h2>
            <form action="">
              <div className="form-input form-input-1">
                <Toaster />
                <label htmlFor="user">Enter your name</label>
                <input
                  type="text"
                  name="user"
                  id="user"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-input form-input-2">
                <label htmlFor="comment">Enter your comment</label>
                <textarea
                  name="comment"
                  id="comment"
                  cols={10}
                  rows={10}
                  required
                  value={comment}
                  onChange={(e) => setCommnet(e.target.value)}
                ></textarea>
              </div>
              <button type="submit" onClick={handleComment}>
                Comment
              </button>
            </form>
          </div>
          <div className="added-comment-container">
            <h2>Comments ({commentArray.length})</h2>
            {commentArray.map((e) => {
              return <CommentCard data={e.attributes} />;
            })}
          </div>
        </CustomBlogContainer>
      )}
    </>
  );
};

export const CustomBlogContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 3rem 0rem;
  gap: 3rem;
  align-items: center;
  font-family: "Open Sans", sans-serif;
  flex-direction: column;
  .card-container {
    padding: 2rem 4rem;
    width: 80%;
    background-color: #cedebd;
    border-radius: 12px;
    box-shadow: 2px 2px 10px #435334;
    border: 2px solid #cedebd;
    p {
      line-height: 2rem;
      color: #435334;
    }
    h1 {
      font-family: "Lato", sans-serif;
      font-weight: 900;
      font-size: 2rem;
      color: #435334;
      text-align: center;
      margin-bottom: 2rem;
    }
  }
  .author {
    margin-top: 0.4rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    color: #435334;
  }
  .description {
    margin-top: 2rem;
  }
  .comment-container {
    width: 80%;
    background-color: #cedebd;
    padding: 2rem 4rem;
    border-radius: 12px;
    box-shadow: 2px 2px 10px #435334;
    h2 {
      font-size: 1.2rem;
      font-weight: 800;
      color: #435334;
      font-family: "Lato", sans-serif;
    }
    form {
      margin-top: 1rem;
      display: flex;
      gap: 1rem;
      flex-direction: column;
      align-items: center;
      .form-input {
        display: flex;
        width: 100%;
        gap: 0.5rem;
        flex-direction: column;
        label {
          font-family: "Open Sans", sans-serif;
          font-size: 0.8rem;
          color: #435334;
        }
        input {
          padding: 0.6rem;
          outline: none;
          border-radius: 12px;
        }
        textarea {
          padding: 0.6rem;
          max-height: 5rem;
          outline: none;
          border-radius: 12px;
        }
      }
      button {
        background: #435334;
        border-radius: 0.4rem;
        width: 7rem;
        padding: 0.4rem 0.7rem;
        color: #faf1e4;
      }
    }
  }
  .added-comment-container {
    width: 80%;
    padding: 0 0.4rem;
    h2 {
      font-size: 1.4rem;
      color: #435334;
      font-weight: 700;
    }
  }

  .description {
    h1 {
      text-align: left;
      margin-bottom: 1rem;
      font-size: 1.8rem;
    }
    a {
      color: #435334;
      text-decoration: underline;
    }
    img {
      margin: 1rem 0rem;
    }
    pre {
      background: #272822;
      margin: 0.5rem 0;
      padding: 1.2rem;
    }
    code {
      color: white;
    }
  }
`;

export const CustomLoading = styled.div`
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default BlogId;
