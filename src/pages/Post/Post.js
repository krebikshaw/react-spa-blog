import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../../contexts";
import { postArticle } from "../../WebAPI";

const PostPageContainer = styled.div``;

const Wrapper = styled.div`
  margin: 80px 100px;
  text-align: center;
`;

const Title = styled.div`
  color: ${props => props.theme.colors.primary};
  letter-spacing: 0.1rem;
  font-size: ${props => props.theme.font_size.title};
  font-weight: normal;
  margin: 50px 0;
`;

const PostForm = styled.form`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & input[type="text"] {
    height: 30px;
  }
  & input[type="text"], & textarea {
    width: 500px;
    margin: 10px 0;
    line-height: 28px;
    box-shadow: 0px 0px 5px 0px #00000063;
    background: #faebd700;
    border-radius: 8px;
    padding: 20px;
    &::placeholder {
      color: #e2dcdc;
    }
    &:focus {
      box-shadow: 0px 0px 5px 0px #245277;
    }
  }
  & div {
    display: flex;
    height: 80px;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
  & button {
    width: 60px;
    margin: 0 15px;
    padding: 5px 0;
    text-shadow: 0 0 1px rgba(0,0,0,0.5);
    text-align: center;
    text-decoration: none;
    background: rgba(0,0,0,0);
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.font_size.text};
    &:hover {
      font-size: ${props => props.theme.font_size.hover};
    }
  }
`;

const ErrorMessage = styled.div`
  color: ${props => props.theme.colors.error};
  margin: -20px;
`;

const Post = () => {
  const history = useHistory();
  const [user, setUser] = useContext(AuthContext)
  const [apiError, setApiError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState({
    title: '',
    content: ''
  });
  const handleChangeInput = e => {
    const name = e.target.name;
    setData({
      ...data,
      [name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    postArticle(data.title, data.content)
      .then(res => {
        if (res.ok === 0) return setErrorMessage(res.message);
        history.push('/');
      })
  }

  const handleBackToLastPage = () => {
    history.push('/');
  }

  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  }, [])

  return (
    <PostPageContainer>
      <Wrapper>
        <Title>發佈文章</Title>
        { errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage> }
        <PostForm>
          <input value={data.title} onChange={handleChangeInput} type="text" name="title" placeholder="標題" />
          <textarea value={data.content} onChange={handleChangeInput} rows="10" name="content" placeholder="請輸入內容..."></textarea>
          <div>
            <button onClick={handleSubmit}>送出</button>
            <button onClick={handleBackToLastPage}>返回</button>
          </div>
        </PostForm>
      </Wrapper>
    </PostPageContainer>
  )
}

export default Post;