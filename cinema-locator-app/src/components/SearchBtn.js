import{useState} from 'react';


export default function SearchBtn() {
    const [text, setText] =useState('')



    return <>
    <div>
        <input
        type = {text}
        onChange={e=>setText(e.target.value)}/>
        <button>Locate Cinema</button>




    </div>
    
    
    
    </>
}