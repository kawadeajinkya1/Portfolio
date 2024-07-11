
/*
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Page/Home';
import Intro from './Components/Intro';
import Abt from './Components/Abt';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
<BrowserRouter>
<Routes>
  <Route path ='/' element ={<Home />} />
  <Route path ='/Intro' element ={<Intro />} />
  <Route path ='/About' element ={<Abt />} />
  <Route path ='/Skills' element ={<Skills />} />
  <Route path ='/Projects' element ={<Projects />} />
  <Route path ='/Contact' element ={<Contact />} />
    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
*/


import {HashRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Page/Home';
import Intro from './Components/Intro';
import Abt from './Components/Abt';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
<HashRouter>
<Routes>
  <Route path ='/' element ={<Home />} />
  <Route path ='/Intro' element ={<Intro />} />
  <Route path ='/About' element ={<Abt />} />
  <Route path ='/Skills' element ={<Skills />} />
  <Route path ='/Projects' element ={<Projects />} />
  <Route path ='/Contact' element ={<Contact />} />
    </Routes>
    </HashRouter>

    </div>
  );
}

export default App;