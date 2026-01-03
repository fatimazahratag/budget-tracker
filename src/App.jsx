import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/pages/Home";
import { useContext } from "react";
import Budget from "./pages/Budget";
import { Button } from "@/components/ui/button";

const App = () => {

  return (
    <div>
      

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/budget" element={<Budget />} />
      </Routes>

     

    </div>
  );
};

export default App;
