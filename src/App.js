  import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Tabs from "./components/Mytabs";
import Mycard from './components/Mycard';
import './index.css';
import { Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import Planetloader from './planetloader.svg';

const App = () => {
  // return (
  //     <div className="App">
  //       <Header/>
  //       <Tabs/>
  //       <Mycard/>
  //       <Planetsidebar/>
  //     </div>  
  // )
const [isAppLoading, setIsAppLoading] = useState(true)

useEffect(() => {
  setTimeout(() => {
    setIsAppLoading(false)
  }, 300);
}, [])

  return (
    <div className="App">
      {isAppLoading && <>
        <Container>
          <Header />
          <div className="planet-loader-div w-100 d-flex justify-content-center align-items-center">
            <img src={Planetloader} alt="planet-loader" />
          </div>
        </Container>
      </>}

      {!isAppLoading &&
      <Container>
        <Header />
        <Tabs />
        <Mycard />
      </Container>
      }
      
    </div>
    );
      
}

export default App;