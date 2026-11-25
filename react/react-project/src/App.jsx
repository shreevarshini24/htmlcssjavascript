import Home from "./Home";
import "./App.css";

function Data(prop) {
  console.log(prop);

  return (
    <>
      <h2>Data Component</h2>
      <h2>College Name: {prop.obj}</h2>
    </>
  );
}

function Players(prop) {
  return (
    <>
      <h2>List of Players</h2>

      <div className="players-container">
        {prop.data.map((player) => (
          <div className="player-box" key={player.id}>
            <h3>ID: {player.id}</h3>
            <h3>Name: {player.name}</h3>
            <h3>Team: {player.team}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

function App() {
  let players_data = [
    {
      id: 100,
      name: "Ram",
      team: "India"
    },
    {
      id: 101,
      name: "Abdul",
      team: "India"
    },
    {
      id: 102,
      name: "Adhi",
      team: "India"
    },
    {
      id: 103,
      name: "Dev",
      team: "India"
    }
  ];

  return (
    <>
      <h1>Welcome to React</h1>
      <h2>JS File</h2>
      <p>This is a simple React application.</p>

      <Home />

      <Data obj="SECE College" />

      <Players data={players_data} />
    </>
  );
}

export default App;