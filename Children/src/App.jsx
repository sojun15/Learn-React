import Container from "./Container";
function App() {
  let discipline = ["cse", "archi", "bad", "ece"];
  return (
    <>
      <Container discipline={discipline}>
        Discipline of Khulna University <br />
        check for new line
      </Container>
    </>
  );
}

export default App;
