import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import FooterImages from './components/FooterImages';
import Experience from './components/Experience';
import Certification from './components/Certification'
import Education from './components/Education'
import MobileHeader from './components/MobileHeader';

function App() {


  return (

    <div className="App">
    <Header/>
    <MobileHeader/>
    <Main/>
    <FooterImages/>
    <Experience/>
    <Education/>
    <Certification/>

    </div>

  );
}

export default App;
