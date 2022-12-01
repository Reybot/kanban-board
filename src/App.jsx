import { useState } from "react";
import "./App.scss";
import Board from "./components/Board/Board";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import Dropdown from "./components/Dropdown/Dropdown";
import CreateTicket from "./components/CreateTicket/CreateTicket";
import Links from "./components/Links/Links";

function App() {
  // state for dropdown
  const [showAddTicket, setShowAddTicket] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Navbar
        setShowAddTicket={setShowAddTicket}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
      <main>
        <Sidebar />
        <Board />
      </main>

      <Dropdown dropdown={showAddTicket} toggleDropdown={setShowAddTicket}>
        <CreateTicket />
      </Dropdown>

      <Dropdown dropdown={isOpen} toggleDropdown={setIsOpen}>
        <Links />
      </Dropdown>
    </div>
  );
}

export default App;
