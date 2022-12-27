import styled from 'styled-components';

export const StyledSignup = styled.div`
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  width: 400px;
  margin: 100px auto;
`;

export const SignupForm = styled.form`
  padding: 30px 40px;

  h2 {
    color: #4e91da;
    text-align: center;
    margin: 0 0 20px;
  }

  div {
    margin-bottom: 10px;
    padding-bottom: 20px;
    position: relative;
  }

  label {
    color: #777;
    display: block;
    margin-bottom: 5px;
  }

  input {
    border: 2px solid #f0f0f0;
    border-radius: 4px;
    display: block;
    width: 93%;
    padding: 10px;
    font-size: 14px;

    &:focus {
      outline: 0;
      border-color: #777;
    }

    &:invalid {
      border: 1px solid red;
    }

    &:invalid ~ span {
      display: block;
    }
  }

  span {
    font-size: 12px;
    padding: 3px;
    color: red;
    display: none;
  }

  button {
    cursor: pointer;
    background-color: #4e91da;
    border: 2px solid #4e91da;
    border-radius: 4px;
    color: #fff;
    display: block;
    font-size: 16px;
    padding: 10px;
    margin-top: 20px;
    width: 100%;
    outline: none;
  }
`;