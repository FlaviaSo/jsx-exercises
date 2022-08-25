import './App.css';

function App() {
  const name = <span>Flavia</span>;
  function greetings(name) {
    return <h1>Hello, {name} </h1>;
  }
  
 
  return (
    <>
     {greetings(name)}
    </>
  );
}

export default App;

//L'espressione JSX verrà compilata come codice JavaScript