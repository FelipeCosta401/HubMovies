import { Outlet } from "react-router-dom";

import Navbar from "./components/nav-bar/nav-bar";

const App = () => {
  return (
    <div className="h-full min-h-screen bg-[#f5f5f5]">
      <header className="p-4">
        <Navbar />
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </div>
  );
};

export default App;
