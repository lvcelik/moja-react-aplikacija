import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';

import randomstring from 'randomstring';
import { broj1, broj2, Osoba, pi, imeAplikacije as mojaVarijabla, sum, oduzimanje } from './utilities';

//import Osoba from './Person';
//import { sum, pi, imeAplikacije as mojaVarijabla, num1 as broj1, num2 as broj2} from './Utility'


//5.5
import { Komponenta1} from './Komponenta1';
import { Komponenta2} from './Komponenta2';
import  Komponenta3 from './Komponenta3';

import {GlavnaKomponenta} from './GlavnaKomponenta';
//import React from 'react';
import {WelcomeFunkcija} from './WelcomeFunkcija';
import {WelcomeKlasa} from './WelcomeKlasa';

// function WelcomeFunkcija() {
//   return (
//     <h2>Weolcome! Komponenta definirana funckijom.</h2>
//   );
// }


// class WelcomeKlasa extends React.Component{
//   render(){
//     return(
//       <h6>Welcome! Komponenta definriana klasom.</h6>
//     )
//   }
// }


function App() {
  var zbroj = sum(10, 12) * pi + (broj1 * broj2);
  var rndStr = randomstring.generate({
    length: 8
  });
  console.log("Random string = " + rndStr);
  var od = oduzimanje(broj1, broj2);

  //5.5
  var prva = "prvi text";
  var druga = "drugi text";

  //return <Komponenta1>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {mojaVarijabla}, {rndStr}, {Osoba.name}, Godine: {Osoba.godine}, {zbroj}, {od}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
            <Komponenta1/>
            <Komponenta2 podatak1={prva}/>
            <Komponenta3 podatak1={prva} podatak2={druga}/>

            <GlavnaKomponenta/>
            <WelcomeFunkcija/>
            <WelcomeKlasa/>

     </div>
   );
}

export default App;
