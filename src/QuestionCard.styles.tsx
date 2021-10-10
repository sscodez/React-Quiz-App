import styled from 'styled-components';

export const Wrapper = styled.div`

   
    width:100%;
    height:520px
  background: #ebfeff;
  padding: 20px;
  margin-left:200px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0);

  p {
    font-size: 1rem;

  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  
  button {
    cursor: pointer;
    user-select: none;
    font-size: 1.2rem;
    
    width: 30%;
    height: 50px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
    userClicked
        ? 'black'
        : '#d9d9d9'};

     
    color: ${({ correct, userClicked }) =>
    userClicked
      ? 'white': 'black'};   
    border: 1px solid black;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    list-style: none;
    text-align: center;
    margin:50px;
    line-height: 60px;
    float: left;
  }
`;