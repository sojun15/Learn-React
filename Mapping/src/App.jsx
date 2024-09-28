import Items from "./items";
function App() {
  let cities = ["Dhaka", "Khulna", "Cumilla"];

  return (
    <>
      <Items cities={cities} />
    </>
  );
}
export default App;
