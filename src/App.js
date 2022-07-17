import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Phone Numbers
        </p>
        <ul style={{textAlign: "left"}}>
          <li>
            Add an input that takes a phone number
          </li>
          <li>
            Add a button that submits the phone number
          </li>
          <li>
            After button is pressed, show an unordered list with the phone number displayed X times, where X is the last
            digit of the phone number
          </li>
          <li>
            Add a "Reset" button on the display view that takes you back to the phone number input view
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
