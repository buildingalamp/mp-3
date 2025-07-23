import React, { useState } from 'react';
import styled from "styled-components";

function useCalculator() {
  const [numOne, setNumOne] = useState('');
  const [numTwo, setNumTwo] = useState('');
  const [result, setResult] = useState('');

  const doAdd = () => setResult(Number(numOne) + Number(numTwo));
  const doSubtract = () => setResult(Number(numOne) - Number(numTwo));
  const doMultiply = () => setResult(Number(numOne) * Number(numTwo));
  const doDivide = () => setResult(Number(numOne) / Number(numTwo));
  const doPower = () => {
    let answer = Number(numOne);
    for (let i = 1; i < Number(numTwo); i++) {
      answer = answer * Number(numOne);
    }
    setResult(answer);
  };
  const doClear = () => {
    setNumOne('');
    setNumTwo('');
    setResult('');
  };

  return {numOne,numTwo,result,setNumOne,setNumTwo,doAdd,
    doSubtract,doMultiply,doDivide,doPower,doClear};
}

const StyledCalculator=styled.div`
  max-width: 350px;
  margin: 40px auto;
  padding: 20px;
  border: 2px solid #ffffff;
  border-radius: 20px;
  background-color: #CCE3DE;
`

const StyledInput=styled.input`
  width: calc(50%);
  padding: 10px;
  margin: 5px;
  border: 2px solid #ffffff;
  border-radius: 5px;
  font-size: 16px;
`

const StyledButton=styled.button`
  width: 50px;
  height: 50px;
  margin: 5px;
  border: 2px solid #ffffff;
  border-radius: 50%;
  background-color: #4CAF50;
  color: white;
`

const StyledButtonDiv=styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const StyledOutput=styled.h4<{result: number}>`
  margin-top: 15px;
  text-align: center;
  color: ${({ result }) => (result < 0 ? 'red' : 'black')};
`

export default function Calculator() {
  const {numOne,numTwo,result,setNumOne,setNumTwo,doAdd,
    doSubtract,doMultiply,doDivide,doPower,doClear} = useCalculator();

  return (
    <>
      <h2>Projects</h2>
      <StyledCalculator>
        <h3>Calculator</h3>
        <StyledInput value={numOne} onChange={(n) => setNumOne(n.target.value)}/>
        <StyledInput value={numTwo} onChange={(n) => setNumTwo(n.target.value)}/>
        <StyledButtonDiv>
          <StyledButton onClick={doAdd}>+</StyledButton>
          <StyledButton onClick={doSubtract}>-</StyledButton>
          <StyledButton onClick={doMultiply}>x</StyledButton>
          <StyledButton onClick={doDivide}>÷</StyledButton>
          <StyledButton onClick={doPower}>^</StyledButton>
        </StyledButtonDiv>
        <StyledOutput result={result}>{result}</StyledOutput>
        <StyledButton onClick={doClear}>Clear</StyledButton>
      </StyledCalculator>
    </>
  );
}