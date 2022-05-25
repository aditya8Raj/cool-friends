import React, { useState } from 'react';

export default function Card(props) {
    const [message1, setMessage1] = useState("Make Friend")
    const [message2, setMessage2] = useState("Make Friend")
    const [message3, setMessage3] = useState("Make Friend")
    const [message4, setMessage4] = useState("Make Friend")
    const [message5, setMessage5] = useState("Make Friend")
    const [message6, setMessage6] = useState("Make Friend")
    const [message7, setMessage7] = useState("Make Friend")
    const [message8, setMessage8] = useState("Make Friend")
    const [message9, setMessage9] = useState("Make Friend")
    const [message10, setMessage10] = useState("Make Friend")
    return (
        <div className="flex flex-wrap  justify-center">
            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./first.png')} alt="first-img" />
                <h4 className='ma2'>{props.name1}</h4>
                <button type="button" className="btn btn-outline-success" onClick={() => { setMessage1("Now Friends 🤗") }} >{message1}</button>
            </div>

            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./second.png')} alt="second-img" />
                <h4 className='ma2'>{props.name2}</h4>
                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-outline-success" onClick={() => { setMessage2("Now Friends 🤗") }} >{message2}</button>
            </div>

            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./third.png')} alt="third-img" />
                <h4 className='ma2'>{props.name3}</h4>

                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-outline-success" onClick={() => { setMessage3("Now Friends 🤗") }} >{message3}</button>
            </div>

            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./fourth.png')} alt="fourth-img" />
                <h4 className='ma2'>{props.name4}</h4>

                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-outline-success" onClick={() => { setMessage4("Now Friends 🤗") }} >{message4}</button>
            </div>

            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./fifth.png')} alt="fifth-img" />
                <h4 className='ma2'>{props.name5}</h4>

                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-outline-success" onClick={() => { setMessage5("Now Friends 🤗") }} >{message5}</button>
            </div>

            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./sixth.png')} alt="sixth-img" />
                <h4 className='ma2'>{props.name6}</h4>

                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-outline-success" onClick={() => { setMessage6("Now Friends 🤗") }} >{message6}</button>
            </div>

            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./seventh.png')} alt="seventh-img" />
                <h4 className='ma2'>{props.name7}</h4>

                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-outline-success" onClick={() => { setMessage7("Now Friends 🤗") }} >{message7}</button>
            </div>

            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./eighth.png')} alt="eighth-img" />
                <h4 className='ma2'>{props.name8}</h4>

                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-outline-success" onClick={() => { setMessage8("Now Friends 🤗") }} >{message8}</button>
            </div>

            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./ninth.png')} alt="ninth-img" />
                <h4 className='ma2'>{props.name9}</h4>

                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-outline-success" onClick={() => { setMessage9("Now Friends 🤗") }} >{message9}</button>
            </div>

            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./tenth.png')} alt="tenth-img" />
                <h4 className='ma2'>{props.name10}</h4>

                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-outline-success" onClick={() => { setMessage10("Now Friends 🤗") }} >{message10}</button>
            </div>
        </div>

    )
}


// <---------------->
