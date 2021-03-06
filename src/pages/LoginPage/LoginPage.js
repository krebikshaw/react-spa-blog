import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { login, getMe } from "../../WebAPI";
import { AuthContext } from "../../contexts";

const LoginPageContainer = styled.div``;

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

const LoginForm = styled.form`
  margin: 30px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & input[type="text"], & input[type="password"] {
    width: 280px;
    height: 30px;
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

const LoginPage = () => {
  const [user, setUser] = useContext(AuthContext)
  const [apiError, setApiError] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [data, setData] = useState({
    username: '',
    password: ''
  });
  const history = useHistory();

  const handleChangeInput = e => {
    const name = e.target.name;
    setData({
      ...data,
      [name]: e.target.value
    })
  }
  const handleSubmit = e => {
    e.preventDefault();
    setErrorMessage('');
    login(data.username, data.password)
      .then(res => {
        if (res.ok === 0) return setErrorMessage(res.message);
        localStorage.setItem('token', res.token);
        getMe()
          .then(res => {
            if (res.ok === 0) {
              localStorage.setItem('token', null);
              setErrorMessage(res.message);
            }
            setUser(res.data);
            history.push('/');
          })
      })
      .catch(err => setApiError(err.message));
  }
  const handleBackToLastPage = () => {
    history.push('/');
  }

  return (
    <LoginPageContainer>
      <Wrapper>
        <Title>登入會員</Title>
        { errorMessage && <ErrorMessage>帳號或密碼錯誤</ErrorMessage> }
        <LoginForm>
          <input type="text" name="username" placeholder="帳號" 
            value={data.username}
            onChange={handleChangeInput}
          />
          <input type="password" name="password" placeholder="密碼" 
            value={data.password}
            onChange={handleChangeInput}
          />
          <div>
            <button onClick={handleSubmit}>提交</button>
            <button onClick={handleBackToLastPage}>返回</button>
          </div>
        </LoginForm>
      </Wrapper>
    </LoginPageContainer>
  )
}

export default LoginPage;