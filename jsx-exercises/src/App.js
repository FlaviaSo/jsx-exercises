import './App.css';

function App() {
  function sum(a, b) {
    return a + b;
  }
  const somma = <h2>{sum(1, 2)}</h2>

  return (
    <>
      {somma}
    </>
  );
}

export default App;
