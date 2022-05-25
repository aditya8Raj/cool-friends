import React from 'react'

export default function Card(props) {
    return (
        <div class="flex flex-wrap  justify-center">
            <div class="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('/home/aditya8raj/Projects/robofriends/src/images/first.png')} alt="first-img" />
                <h2>{props.name1}</h2>
                <p>{props.email1}</p>
            </div>

            <div class="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('/home/aditya8raj/Projects/robofriends/src/images/second.png')} alt="second-img" />
                <h2>{props.name2}</h2>
                <p>{props.email2}</p>
            </div>

            <div class="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('/home/aditya8raj/Projects/robofriends/src/images/third.png')} alt="third-img" />
                <h2 >{props.name3}</h2>
                <p >{props.email3}</p>
            </div>

            <div class="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('/home/aditya8raj/Projects/robofriends/src/images/fourth.png')} alt="fourth-img" />
                <h2 >{props.name4}</h2>
                <p >{props.email4}</p>
            </div>

            <div class="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('/home/aditya8raj/Projects/robofriends/src/images/fifth.png')} alt="fifth-img" />
                <h2 >{props.name5}</h2>
                <p >{props.email5}</p>
            </div>

            <div class="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('/home/aditya8raj/Projects/robofriends/src/images/sixth.png')} alt="sixth-img" />
                <h2 >{props.name6}</h2>
                <p >{props.email6}</p>
            </div>

            <div class="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('/home/aditya8raj/Projects/robofriends/src/images/seventh.png')} alt="seventh-img" />
                <h2 >{props.name7}</h2>
                <p >{props.email7}</p>
            </div>

            <div class="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('/home/aditya8raj/Projects/robofriends/src/images/eighth.png')} alt="eighth-img" />
                <h2 >{props.name8}</h2>
                <p >{props.email8}</p>
            </div>

            <div class="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('/home/aditya8raj/Projects/robofriends/src/images/ninth.png')} alt="ninth-img" />
                <h2 >{props.name9}</h2>
                <p >{props.email9}</p>
            </div>

            <div class="br4 ma3 ba bw1 w-25 pa3 bg-black grow shadow-2 tc">
                <img src={require('/home/aditya8raj/Projects/robofriends/src/images/tenth.png')} alt="tenth-img" />
                <h2 >{props.name10}</h2>
                <p >{props.email10}</p>
            </div>
        </div>

    )
}


// <---------------->
