import "./App.scss";
import Sidebar from "./components/Sidebar/Sidebar";
import Board from "./components/Board/Board";
import Navbar from "./components/Navbar/Navbar";
import Dropdown from "./components/Dropdown/Dropdown";
import { useState } from "react";
import CreateTicket from "./components/CreateTicket/CreateTicket";
import Links from "./components/Links/Links";

function App() {
  const [showAddTicket, setShowAddTicket] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Navbar toggleDropdown={setShowAddTicket} />
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
