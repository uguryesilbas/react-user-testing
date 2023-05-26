import { useState } from "react";

const defaultUsers = [
  {
    name: "User 1",
  },
  {
    name: "User 2",
  },
  {
    name: "User 3",
  },
];

function Users() {
  const [user, setUser] = useState("");
  const [users, setUsers] = useState(defaultUsers);

  const addUser = () => {
    if (user !== "") {
      setUsers((prev) => [...prev, { name: user }]);
    }
    setUser("");


  };
  return (
    <div>
      <input
        data-testid="input"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <button onClick={addUser}>Add</button>

      <br />
      <br />

      {users.map((item, key) => (
        <div key={key}>{item.name}</div>
      ))}
    </div>
  );
}

export default Users;
