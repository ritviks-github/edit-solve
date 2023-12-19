import { useState } from "react"
import React from 'react'

export default function Complement() {
  const [num,setNum] = useState();
  const [target,setTarget] = useState();
    const handleOnChange = (event)=>{
        setNum(event.target.value);
    }
    const convert = ()=>{
        let ans = ~num;
        let mask = 0;
        let m = num;
        while(m > 0){
            mask = (mask << 1) | 1;
            m = m >> 1;
        }
        setTarget(ans&mask);   
    }
    const convert_one = ()=>{
        let ans = ~num;
        let mask = 0;
        let m = num;
        while(m > 0){
            mask = (mask << 1) | 1;
            m = m >> 1;
        }
        let answer = ans&mask;
        answer = answer + 1;
        setTarget(answer);
    }
  return (
    <>
        <h1 className='comphead'>Complement Finder</h1>
        <span className='labelnuminputcomp' htmlFor="numinput">Enter a Number of Your Choice :</span>
        <input id="numinput" placeholder="(Default = 0)" value={num} onChange={handleOnChange} className='numinput' type="number"/>
        <br /><br />
        <button id="complbutton" onClick={convert} type="button">Find 1's Complement</button>
        <button id="complbutton" onClick={convert_one} type="button">Find 2's Complement</button>
        <h1>Result:</h1>
        <span>{target}</span>
    </>
  )
}
