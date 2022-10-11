import UserContainer from "./components/Users/UserContainer";
import UserList from "./components/Users/UserList";
import { useState } from "react";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevState) => {
      return [
        ...prevState,
        { id: Math.random() + 1000, name: uName, age: uAge },
      ];
    });
  };

  return (
    <div>
      <UserContainer onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
