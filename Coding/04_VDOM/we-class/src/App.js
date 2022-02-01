import logo from "./logo.svg";
import "./App.css";

//Parent
function App() {
  return (
    <div className="App">
      <First />
    </div>
  );
}

//Child
function First() {
  return <div>First</div>;
}

export default App;
