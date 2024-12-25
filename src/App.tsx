import {  Outlet } from "react-router-dom";

import Navbar from "./components/Navbar";

const App:React.FC=()=> {
  

  return (
    <main>
      <Navbar />
     <Outlet/>
    </main>
  );
}

export default App
