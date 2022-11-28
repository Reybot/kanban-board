import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Board from "./components/Board/Board";
import Ticket from "./components/Ticket/Ticket";

function App() {
  return (
    <div className="App">
      <main>
        <Sidebar />
        <Board />
      </main>
    </div>
  );
}

export default App;
