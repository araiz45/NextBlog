"use client";
import styled from "styled-components";
import CommentCard from '@/component/CommentCard';

const BlogId = ({ params }) => {
  return (
    <CustomBlogContainer>
      <div className="card-container">
        <h1>Build an Email Validator with HTML, CSS, and JavaScript</h1>
        <h4 className="author">Araix - <div> September 12, 2023</div></h4>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            maiores omnis, in vitae ratione corporis animi odit, unde, similique
            impedit sequi repellendus nulla neque a eius officiis optio? Porro
            enim consequatur animi amet laboriosam veritatis maiores
            necessitatibus mollitia inventore, delectus nesciunt quam eius
            officia! Odit aperiam error unde perferendis illo mollitia
            reiciendis ducimus vero quibusdam nobis libero perspiciatis, esse
            dolorum minima consequuntur, rem exercitationem numquam autem hic,
            itaque harum nulla? Asperiores veritatis, expedita fuga inventore
            nisi beatae ea suscipit maxime! Expedita ipsum quasi quidem est,
            laudantium dolores atque voluptatibus illum nam neque explicabo
            repellat nesciunt modi optio pariatur sunt quo ab vitae rerum
            consectetur doloribus. Id sed ad laudantium! Dicta enim numquam modi
            blanditiis odio atque saepe exercitationem voluptatem praesentium!
            Provident sequi quia culpa quisquam nostrum ullam vel ducimus odio
            aspernatur explicabo sapiente quam recusandae illum repellat animi
            repudiandae, eius laborum tempore ab sint nam officiis? Quasi totam
            odit hic aliquam fugit esse suscipit, quibusdam voluptatibus enim
            sed? Animi ducimus ex nesciunt sunt blanditiis dignissimos eos odit
            modi accusamus fuga obcaecati aliquid culpa autem nemo eligendi
            dolorum est nisi fugit, nobis nulla laboriosam! Dolorem ratione
            distinctio provident beatae optio impedit earum labore quisquam, id
            ut nam odio culpa explicabo dicta laudantium saepe, maxime quam
            nostrum adipisci, mollitia omnis! Omnis, ratione deleniti. Omnis
            culpa, pariatur dolores earum enim voluptate libero sed recusandae
            aliquam.
          </p>
        </div>
      </div>
      <div className="comment-container">
        <h2>Add Comment</h2>
        <form action="">
            <div className="form-input form-input-1">
                <label htmlFor="user">Enter your name</label>
                <input type="text" name="user" id="user" required/>
            </div>
            <div className="form-input form-input-2">
                <label htmlFor="comment">Enter your comment</label>
                <textarea name="comment" id="comment" cols={10} rows={10} required></textarea>
            </div>
            <button type="submit">Comment</button>
        </form>
      </div>
      <div className="added-comment-container">
        <h2>Comments (4)</h2>
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
        <CommentCard />
      </div>
    </CustomBlogContainer>
  );
};

const CustomBlogContainer = styled.div`
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
    p{
        line-height: 2rem;
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
    margin-top: .4rem;
    font-weight: 600;
    display: flex;
    justify-content: center;
    color: #435334;
  }
  .description{
    margin-top: 2rem;
  }
  .comment-container{
    width: 80%;
    background-color: #CEDEBD;
    padding: 2rem 4rem;
    border-radius: 12px;
    box-shadow: 2px 2px 10px #435334;
    h2{
        font-size: 1.2rem;
        font-weight: 800;
        color: #435334;
        font-family: "Lato", sans-serif;
    }
    form{
        margin-top: 1rem;
        display:flex;
        gap: 1rem;
        flex-direction: column;
        align-items: center;
        .form-input{
            display: flex;
            width: 100%;
            gap: .5rem;
            flex-direction: column;
            label{
                font-family: "Open Sans", sans-serif;
                font-size: .8rem;
                color: #435334;
            }
            input{
                padding: .6rem;
                outline: none;
                border-radius: 12px;
                
            }
            textarea{
                padding: .6rem;
                max-height: 5rem;
                outline: none;
                border-radius: 12px;
            }
        }
        button{
            background: #435334;
            border-radius: .4rem;
            width: 7rem;
            padding: .4rem .7rem;
            color: #FAF1E4;
        }

    }
}
    .added-comment-container{
        width: 80%;
        padding: 0 .4rem;
        h2{
            font-size: 1.4rem;
            color: #435334;
            font-weight: 700;
        }
    }
  
`;
export default BlogId;
