import logo from '../assets/images/logo.svg';
import '../assets/styles/App.css';

import randomstring from 'randomstring';
import { broj1, broj2, Osoba, pi, imeAplikacije as mojaVarijabla, sum, oduzimanje } from './utilities';

//import Osoba from './Person';
//import { sum, pi, imeAplikacije as mojaVarijabla, num1 as broj1, num2 as broj2} from './Utility'



function App() {
  var zbroj = sum(10, 12) * pi + (broj1 * broj2);
  var rndStr = randomstring.generate({
    length: 8
  });
  console.log("Random string = " + rndStr);
  var od = oduzimanje(broj1, broj2);

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
    </div>
  );
}

export default App;
