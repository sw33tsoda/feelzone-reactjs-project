import React from 'react';
import './App.css';
import Header from './layouts/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Body from './layouts/Body';
import Footer from './layouts/Footer';

function App() {
  // const [scrollHeight,setScrollHeight] = useState(0);
  // useLayoutEffect(() => {
  //   const updateScrollHeight = () => {
  //     const currentScrollHeight = window.scrollY;
  //     setScrollHeight(currentScrollHeight);
  //   }
  //   window.addEventListener('scroll',updateScrollHeight);
  //   updateScrollHeight();
  //   return () => window.removeEventListener('scroll',updateScrollHeight);
  // },[]);

  return (
    <div className="App">
      <Router>
        <Header></Header>

        <Body></Body>

        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
