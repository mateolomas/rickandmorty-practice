import "../src/styles/app.css";

import Card from "./components/Card";
import Header from "./components/Header";
import Modal from "./components/Modal";
import useFetchData from "./hooks/useFetchData";

function App() {

  
  
  return (
    <>
    <div className="App">
      <Header />
      <Card /> 
    </div>
    </>
  );
}

export default App;
