import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {
    const [text,setText] = useState("");
    const handleOnChange = (event)=>{
        setText(event.target.value);
    }
    let ontop = {
        position:'fixed',
        top:'2px',
        right:'2px'
    }
    const upper = ()=>{
        let newtext = text.toUpperCase();
        setText(newtext);
    } 
    const lower = ()=>{
        let newtext = text.toLowerCase();
        setText(newtext);
    }
    const clear = ()=>{
        let newtext = '';
        setText(newtext);
    }
    let textStyle={
        backgroundColor: ' #CAF0F8',
        color:'#0077B6'
    }
    let inverse = ()=>{
        let arr = [];
        let arrays = text.split();
        for(let i=0;i < arrays.length;i++){
            for(let j=0;j < arrays[i].length;j++){
                arr.push(arrays[i][j]);
            }
        }
        for(let i=0;i < arr.length;i++){
            if(i%2 != 0){
                arr[i] = arr[i].toUpperCase();
            }
            else{
                arr[i] = arr[i].toLowerCase();
            }
        }
        let newtext = '';
        for(let i=0;i < arr.length;i++){
            newtext += arr[i];
        }
        setText(newtext);
    }
    const sentencify = ()=>{
        let arr = [];
        let newar = text.split();
        for(let i=0;i < newar.length;i++){
            for(let j=0;j < newar[i].length;j++){
                arr.push(newar[i][j]);
            }
        }
        arr[0] = arr[0].toUpperCase();
        for(let i=1;i < arr.length;i++){
            if(arr[i] != '.' && i+1 < arr.length){
                if(arr[i-1] != '.'){
                    arr[i] = arr[i].toLowerCase();
                }
            }
            if(arr[i] == '.' && i+1 < arr.length){
                arr[i+1] = arr[i+1].toUpperCase();
            }
            if(i == arr.length-1){
                if(arr[i-1] != '.'){
                    arr[i] = arr[i].toLowerCase();
                }
            }
        }
        let newtext = '';
        for(let i=0;i < arr.length;i++){
            newtext += arr[i];
        }
        setText(newtext);
    };
    const title = ()=>{
        let arr = [];
        let newar = text.split();
        for(let i=0;i < newar.length;i++){
            for(let j=0;j < newar[i].length;j++){
                arr.push(newar[i][j]);
            }
        }
        arr[0] = arr[0].toUpperCase();
        let newtext = '';
        for(let i=1;i < arr.length;i++){
            arr[i] = arr[i].toLowerCase();
        }
        for(let i=0;i < arr.length;i++){
            newtext += arr[i];
        }
        setText(newtext);
    }
    const reverse = ()=>{
        let arr = [];
        let newar = text.split();
        for(let i=0;i < newar.length;i++){
            for(let j=0;j < newar[i].length;j++){
                arr.push(newar[i][j]);
            }
        }
        let i = 0;
        let j = arr.length-1;
        while(i <= j){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
        let newtext = '';
        for(let i=0;i < arr.length;i++){
            newtext += arr[i];
        }
        setText(newtext);
    }
    document.body.style.height='100vh';
  return (
    <>
        <div>
            <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea id="myBox" rows="8"  value={text} style={textStyle} onChange={handleOnChange} className="form-control"></textarea>
            </div>
            <div></div>
                <button style={textStyle} className="btn btn-warning mx-1" onClick={upper}>UPPERCASE</button>
                <button style={textStyle} className="btn btn-warning mx-1" onClick={lower}>lowerCase</button>
                <button style={textStyle} className="btn btn-warning mx-1" onClick={clear}>clearText</button>
                <button style={textStyle} className='btn btn-warning mx-1' onClick={inverse}>iNvErSeCaSe</button>
                <button style={textStyle} className='btn btn-warning mx-1' onClick={sentencify}>Sentence . Case</button>
                <button style={textStyle} className='btn btn-warning mx-1' onClick={title}>Title case</button>
                <button style={textStyle} className='btn btn-warning mx-1' onClick={reverse}>Reverse (esreveR)</button>
            </div>
            <div className="container">
                <h1 className='my-4'>Summary</h1>
                <p>{text.split(" ").length} words {text.length} characters</p>
            </div>
        </div>
    </>
  )
}
