import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';

import randomstring from 'randomstring';
import { broj1, broj2, Osoba, pi, imeAplikacije as mojaVarijabla, sum, oduzimanje } from './utilities';

//import Osoba from './Person';
//import { sum, pi, imeAplikacije as mojaVarijabla, num1 as broj1, num2 as broj2} from './Utility'


//5.5
import { Komponenta1 } from './Komponenta1';
import { Komponenta2 } from './Komponenta2';
import Komponenta3 from './Komponenta3';

import { GlavnaKomponenta } from './GlavnaKomponenta';
//import React from 'react';
import { WelcomeFunkcija } from './WelcomeFunkcija';
import { WelcomeKlasa } from './WelcomeKlasa';
import React from 'react';
import KorisnikKlasa from './KorisnikKlasa';
import KorisnikFunckija from './KorisnikFunckija';
import KorisnikDijete from './KorisnikDijete';
import Korisnik from './Korisnik'

export default class App extends React.Component {
    state = {
      korisnici: [
        {id:1, name:"Goran", years: 30},
        {id:2, name: "Lovro", years: 30},
        {id:3, name:"Lovro", years: 30},
        {id:4, name:"Lovro", years: 30},
        {id:5, name:"Lovro", years: 30},
      ]
    }

    handleNameChanged = (event, index) => {
      console.log("handleNameChanged");
      const {korisnici} = this.state;
      const noviKorisnici = [...korisnici];
      noviKorisnici[index].name = event.target.value;
      this.setState({korisnici: noviKorisnici})

    };

    render() {
      const {korisnici} = this.state
      return (
        <div className='App'>
          {korisnici.map((korisnik, index) => (
            <Korisnik
            key={korisnik.id}
            name={korisnik.name}
            years={korisnik.years}
            onNameChanged={event => this.handleNameChanged(event, index)}
            />
          ),
          )};
        </div>
      );

    };
  };


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


// function App() {

//   const [korisnici, setKorisnici] = React.useState([
//     { ime: "Marko", godine: 27 },
//     { ime: "Katarina", godine: 21 },
//     { ime: "Nataša", godine: 20 },
//     { ime: "Sunčica", godine: 5 }
//   ]);

//   const promijeniGodine = () => {
//     //console.log("kliknuli smo na button...");
//     //const {korisnici} = this.state;
//     const novikorisnici = korisnici.map(korisnik => {
//       return { ...korisnik, godine: korisnik.godine + 1 }
//     }
//     );
//     setKorisnici(novikorisnici);
//   };

//   const promijeniIme = event => {
//     const novikorisnici = korisnici.map(korisnik => {
//       var rndName = randomstring.generate({
//         length: 8
//       });
//       return { ...korisnik, ime: rndName }
//     }
//     );
//     setKorisnici(novikorisnici);
//   };




//   //const {korisnici, dodatni_tekst} = this.state;



//   var zbroj = sum(10, 12) * pi + (broj1 * broj2);
//   var rndStr = randomstring.generate({
//     length: 8
//   });
//   console.log("Random string = " + rndStr);
//   var od = oduzimanje(broj1, broj2);

//   //5.5
//   var prva = "prvi text";
//   var druga = "drugi text";

//   //return <Komponenta1>;
  

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {mojaVarijabla}, {rndStr}, {Osoba.name}, Godine: {Osoba.godine}, {zbroj}, {od}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//       <Komponenta1 />
//       <Komponenta2 podatak1={prva} />
//       <Komponenta3 podatak1={prva} podatak2={druga} />

//       <GlavnaKomponenta />
//       <WelcomeFunkcija />
//       <WelcomeKlasa />

//       <KorisnikKlasa ime={korisnici[0].ime} godine={korisnici[0].godine} onButtonClick={promijeniGodine} />
//       <KorisnikKlasa ime={korisnici[1].ime} godine={korisnici[1].godine} onButtonClick={promijeniGodine} />

//       <KorisnikFunckija ime={korisnici[2].ime} godine={korisnici[2].godine} onNameChange={promijeniIme} />

//       <KorisnikDijete ime={korisnici[3].ime} godine={korisnici[3].godine} >
//         Voli plivati i roniti
//       </KorisnikDijete>



//     </div>);
// };


// export default App;
