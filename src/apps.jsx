
// export default function App() {
//   return (
//     <div> App</div>
//   );

import { Children } from "react";

// }
function Title({ Children,text ,color}) {
  const titleStyle = {
    color: color,
    textAlign: 'center',
    marginTop: '20px',
    fontSize: '30px',
    fontWeight: 'bold'
  };
{Children}
  return <h1 style={titleStyle}>{text}</h1>;
}

const App = () => {
  return (
    <div className="app">
      <Title text="Hello World!" color="red" />
      <Title text="React Components" color="blue" />
      <Title text="Dynamic Styling" color="purple" />
      <Title text="Welcome to My App" color="navy" />
      <Title text="Enjoy Your Stay" color="green"/>
      <Title text="React is Awesome!" color="purple"/>
      <Title text="Have a Great Day!" color="orange"/>
      <Title text="Coding is Fun!" color="teal"/>
      <Title text="Stay Positive!" color="pink"/>
      <Title text="Keep Learning!" color="brown"/>
      <Title text="Build Something Amazing!" color="gray"/>
    </div>
  );
};

export default App;
