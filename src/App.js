// import logo from './logo.svg';
import './App.css';

function Header(props) {
  console.log(props)
  return (
    <header>
      <h1>{props.name}`s Kitchen</h1>
    </header>
  )
}

function Main(props) {
  return (
    <section>
      <p> we serve  An {props.adjactive}  food </p>
    </section>
  )
}

function Footer(props) {
  return(
    <footer>
      <p>&copy;{props.year}</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
    
    <Header name="bakr" />
    <Main adjactive="amazing" />
    <Footer year={new Date().getFullYear()}/> 
    </div>
  );
}

export default App;
