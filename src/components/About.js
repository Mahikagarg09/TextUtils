import React  from 'react'

export default function About(props) {

    
    
    return (
        
        <div className="container" style={{color:props.mode==='light' ? 'black' : 'white'}} >
            <h1 className='my-3'>About Us...</h1>
            <p> TextUtils can help you change your entered text into uppercase or lowercase. It can help you remove the extra sapces within the text.
                You can copy the text you have modified using these functions with single click which will copy the text to your clipboard.</p>
            
            
        </div>
    )
}
