// import logo from './logo.svg';
import './App.css';

function Header() {
  return (
    <header>
      <h1>Kitchen</h1>
    </header>
  )
}

function Main() {
  return (
    <section>
      <p> we serve  A WonderFul  food </p>
    </section>
  )
}

function Footer() {
  return(
    <footer>
      <p>&copy;2022</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
    
    <Header />
    <Main />
    <Footer /> 
    </div>
  );
}

export default App;
