import styled from 'styled-components'
const CommentCard = ({data}) =>{
    let date = new Date(data.publishedAt);
    let anotherDate = date.toDateString();
    return (
        <CommentWrapper>
            <CommentContainer className="comment-card">
                <h3>{data.user} <div>{anotherDate}</div></h3>
                <p>{data.comment}</p>
            </CommentContainer>
        </CommentWrapper>
    )
}

const CommentContainer = styled.div`
background-color: #CEDEBD;
display: inline-block;    
padding: 1.3rem;
border-radius: 12px;
box-shadow: 2px 2px 10px #435334;
margin-top: 1.4rem;
h3{
    display: flex;
    font-weight: 800;
    color: #435334;
    gap: .5rem;
    div{
        font-weight: 500;
        font-size: .9rem;
    }
}

`
const CommentWrapper = styled.div`


`


export default CommentCard;