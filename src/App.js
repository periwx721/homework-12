import "./App.css";
import Forum from "./Components/Forum";


function App() {
  const people = [
  
    {
      id: 3,
      name: "Perizat",
      email: "perizat@gmail.com",
      password: "1234",
    },
  
  ];
  return (
    <div>
      <Forum store={people} />
    </div>
  );
}

export default App;
