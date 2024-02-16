import './App.css';
import Bloque1 from './Components/Bloque1';
import Bloque3 from './Components/Bloque3';
import Bloque2 from './Components/Bloque2';
import  Menu  from './Components/Menu';
import { Home } from "./Components/Home";
import { Home2 } from "./Components/Home2";
import Footer from './Components/footer';

function App() {
  return (
    <div className="App">
    <Menu></Menu>
    <Bloque1></Bloque1>
    <Bloque2></Bloque2>
    <Bloque3></Bloque3>
    <Home></Home>
    <Home2></Home2>
    <Footer></Footer>
    </div>
  );
}

export default App;
