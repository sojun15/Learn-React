import Time from "./Time";
import Item from "./Item";
import "./App.css";
function App() {
  return (
    <center className="app-jsx">
      <h1>Todo List</h1>
      <div className="row">
        <div className="col-5">
          <input type="text" placeholder="Write your event here" />
        </div>
        <div className="col-3">
          <input type="date" />
        </div>
        <div className="col-2">
          <button
            onClick={() => alert("add button clicked")}
            className="add-button"
          >
            Add event
          </button>
        </div>
      </div>
      <Item />
      <Time />
    </center>
  );
}

export default App;
