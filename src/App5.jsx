import { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");

  return (
    <div>
      <h1>{value}</h1>
      <input
        type="text"
        id="testid"
        onChange={(e) => 
            {setValue(e.target.value);
                
            }}
      />
    </div>
  );
};

export default App;
