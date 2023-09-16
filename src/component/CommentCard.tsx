import styled from 'styled-components'
const CommentCard = () =>{
    return (
        <CommentWrapper>
            <CommentContainer className="comment-card">
                <h3>Admin <div>23-3-2</div></h3>
                <p>Create an E-commerce website please 🥰</p>
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
    }
}

`
const CommentWrapper = styled.div`


`


export default CommentCard;