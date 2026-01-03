import User from "./components/user/User";
import style from "./components/user/user.module.css";

const App = () => {
  const users = [
    { name: "Fatima", age: 21 },
    { name: "Omar", age: 19 },
    { name: "Hassan", age: 45 },
    { name: "Aisha", age: 34 },
    { name: "Youssef", age: 17 },
    { name: "Khadija", age: 52 },
    { name: "Ali", age: 29 },
    
  ];

  return (
    <div className={style.container} >
      {users.map((user,index) => (
        <User  key={index}  name={user.name} age={user.age} />
      ))}
    </div>
  );
};

export default App;
