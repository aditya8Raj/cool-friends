import React from 'react'

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        alert("Thanks for making me your friend", "success")
    })
}
export default function Card(props) {
    return (
        <div className="flex flex-wrap  justify-center">
            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./first.png')} alt="first-img" />
                <h4>{props.name1}</h4>
                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-primary" id="liveAlertBtn">Make Friend</button>
            </div>

            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./second.png')} alt="second-img" />
                <h4>{props.name2}</h4>
                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-primary" id="liveAlertBtn">Make Friend</button>
            </div>

            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./third.png')} alt="third-img" />
                <h4 >{props.name3}</h4>

                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-primary" id="liveAlertBtn">Make Friend</button>
            </div>

            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./fourth.png')} alt="fourth-img" />
                <h4 >{props.name4}</h4>

                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-primary" id="liveAlertBtn">Make Friend</button>
            </div>

            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./fifth.png')} alt="fifth-img" />
                <h4 >{props.name5}</h4>

                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-primary" id="liveAlertBtn">Make Friend</button>
            </div>

            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./sixth.png')} alt="sixth-img" />
                <h4 >{props.name6}</h4>

                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-primary" id="liveAlertBtn">Make Friend</button>
            </div>

            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./seventh.png')} alt="seventh-img" />
                <h4 >{props.name7}</h4>

                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-primary" id="liveAlertBtn">Make Friend</button>
            </div>

            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./eighth.png')} alt="eighth-img" />
                <h4 >{props.name8}</h4>

                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-primary" id="liveAlertBtn">Make Friend</button>
            </div>

            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./ninth.png')} alt="ninth-img" />
                <h4 >{props.name9}</h4>

                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-primary" id="liveAlertBtn">Make Friend</button>
            </div>

            <div className="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('./tenth.png')} alt="tenth-img" />
                <h4 >{props.name10}</h4>

                <div id="liveAlertPlaceholder"></div>
                <button type="button" className="btn btn-primary" id="liveAlertBtn">Make Friend</button>
            </div>
        </div>

    )
}


// <---------------->
