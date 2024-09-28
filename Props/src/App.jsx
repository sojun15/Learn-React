import StudentName from "./StudentName";
import "./App.css";
function App() {
  let obj = [
    { id: 15, name: "sojun", district: "brahmanbaria" },
    { id: 31, name: "mogammel", district: "satkhira" },
    { id: 1, name: "rahad", district: "khulna" },
    { id: 2, name: "partho", district: "norail" },
  ];

  return (
    <section className="student-box">
      <div className="student">
        <h1>Student Information:</h1>
        <StudentName student={obj} />
      </div>
    </section>
  );
}

export default App;
