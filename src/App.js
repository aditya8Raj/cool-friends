// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
// import 'tachyons';


// const [first, setfirst] = useState(second)

export default function App() {
  return (
    <>
      <div>
        <header className="white-80 tc pv1 avenir">
          <h1 className="mt2 mb0 fw1 f1">COOL FRIENDS</h1>
          <br />
          <Searchbox />
        </header>
        <Cardlist />
      </div>
    </>
  )
}

