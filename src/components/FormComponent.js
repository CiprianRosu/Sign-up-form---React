import React from 'react'
import styled from 'styled-components';

const BackgroundBox = styled.div`
    background-color:#beeefb;
    height:50vh;
    width:90%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin: 15rem auto;
    position: relative;
    border-radius:23px;

`;
const Box1 = styled.div`
    background-color:#f1fdcd;
    width:50%;
    height:100%;
    position:absolute;
    left:0;
    top:0;
    // border-radius: 5% 0% 0% 5%;

    &::after,&::before{
        content:"",
        position: absolute;
        width:100%;
        height:100%;
        background-color:black;

    }
    &::before{
        top:3rem;
    }

`;

function FormComponent() {
  return <>
  
  <BackgroundBox>
    <Box1/>
  </BackgroundBox>
  </>
}

export default FormComponent