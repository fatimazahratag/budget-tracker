import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./components/pages/Home";
import BudgetTracker from "./components/pages/Budget";

const App = () => {

  return (
    <div>
      

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/budget" element={<BudgetTracker />} />
      </Routes>

     

    </div>
  );
};

export default App;
