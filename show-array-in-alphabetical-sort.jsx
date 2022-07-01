const users = [
  { name: "Akash Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];
const renderList = users.sort((a, b) => a.name.localeCompare(b.name))
.map((item, index) =><li key={index}>{item.name}-{item.id}</li>);

function App() {
  return (
    <>
      <h3>User names</h3>
      <ul>
       {renderList}
      </ul>
    </>
  );
}


/**Output*
User names
Akash Doe-1
Billy Doe-3
Jane Doe-2
**/
