import styled, { createGlobalStyle } from 'styled-components';
export const Wrapper = styled.div`

display: flex;
flex-direction: column;
align-items:center;
.next {
    cursor: pointer;
    user-select: none;
    font-size: 1.2rem;

    width: 20%;
    height: 40px;
    margin: 5px 0;
    background:  '#d9d9d9';
    border: 1px solid black;
    box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: black;
    text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
  }
  

  
  
  
  `;
 export  const Track = styled.div`{

    width:100%;
    height:20px;
    background-color:#222;
    border-radius:0px;
    box-shadow: inset 0 0 5px #0000;
}`;
export  const Score = styled.div`{

    width:50%;
    height:35px;
    flex-direction:row;
    border-radius:4px;
    background-color:white;
    border: 1px solid black;
    display:inline-block;
    float:left;
    box-shadow: inset 0 0 5px #0000;
}`;
