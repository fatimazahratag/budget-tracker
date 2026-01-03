import { useState } from "react";
import Title from "./components/title/Title";
import style from "./components/title/title.module.css";

const App = () => {
  const [num, setNum] = useState(1);
  const Titles = ["titre 1", "titre 2", "titre 3"];

  return (
    <div className={style.container}>
      {Titles.map((title, index) => (
        <Title key={index} text={title} />
      ))}
    </div>
  );
};

export default App;
