import './App.css';

function App() {
  function greetings(name) {
     return <h1>Hello, {name}!</h1>;
   }
 
   return (
     <>
      {greetings()}
     </>
   );
 }

export default App;