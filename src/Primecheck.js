import React,{useState} from 'react'
import { Route, Routes } from 'react-router-dom';
import TextForm from './Textform';

export default function Primecheck() {
    const [num,isPrime] = useState(0);
    const handleOnChange = (event)=>{
        isPrime(event.target.value);
    }
    const [reference,setReference] = useState('https://freepngimg.com/download/icon/1000453-thinking-emoji-[free-download-ios-emojis]-icon-file-hd.png');
    const [result,setResult] = useState("Checking the number...");
    const checks = ()=>{
        let cnt = 0;
        if(num == 1 || num == 0){
            setResult("Unique !!!");
            setReference("https://clipart.world/wp-content/uploads/2020/08/hush-emoji-png-transparent.png");
            return;
        }
        for(let i=2;i < num;i++){
            if(num%i === 0){
                cnt++;
            }
        }
        if(cnt == 0){
            setResult("Prime !! :)");
            setReference("http://www.pngmart.com/files/8/Sunglasses-Emoji-PNG-Transparent-Background.png");
        }
        else{
            setResult("Not Prime :(");
            setReference("https://clipground.com/images/sad-emoji-png-7.png");
        }
    }
  return (
    <>
    <div className='primehead'>
        <h1 className='primeh1'>Prime Checker</h1>
    </div>
    <div className='primecontent'>
        <div>
            <label style={{fontSize:'24px'}} htmlFor="primenumid">Enter the number you want to check: </label>
            <input id="primenumid" value={num} onChange={handleOnChange} type="number"/>
        </div>
        <button style={{fontSize:'24px'}} onClick={checks} type="button" class="btn btn-primary">Check</button>
        <div>
            <label style={{fontSize:'24px'}}>Result: </label>
            <p className='primeresult'>{result}</p>
        </div>
    </div>
    <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
        <img id="img1" src={reference}/>
    </div>
    </>
  )
}
