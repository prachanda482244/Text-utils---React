import React, { useState } from 'react'

export default function About(props) {

    // const [myStyle, updateMystyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // });
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white',
    }
    console.log(myStyle)
    return (
        <div className='container p-3' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h1 className="my-3">About Us</h1>

            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button"
                            style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong> Analyse your text </strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Text Utils gives you a way to analyse your text quickly and efficiently. Be it word count,character count.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" style={myStyle} aria-expanded="false" aria-controls="collapseTwo">
                            <strong> Free to use </strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Text utils reports the number of words and characters. Thus it is suitable for writing text with words/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" style={myStyle} aria-expanded="false" aria-controls="collapseThree">
                            <strong> Browser Compatiable </strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software works in any browser such as chrome , Firefox ,Internet explorer, safari,opera . It suits to count characters in facebook, blogs,books , excel document, pdf format,essays etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
