import HelloCard from "./HelloCard";

function App() {
  const users = [
    {
      id: crypto.randomUUID(),
      name: "Joey",
      likesCats: true,
      favColor: "green",
    },
    {
      id: crypto.randomUUID(),
      name: "Poshin",
      likesCats: true,
    },
    {
      id: crypto.randomUUID(),
      name: "Amrita",
      likesCats: true,
    },
    {
      id: crypto.randomUUID(),
      name: "Shiva",
      likesCats: false,
    },
  ];

  return (
    <div>
      <h1>hello</h1>
      <h2>world</h2>
      {users.map((user) => (
        <HelloCard
          key={user.id}
          name={user.name}
          likesCats={user.likesCats}
          favColor={user.favColor}
        />
      ))}
    </div>
  );
}

export default App;
