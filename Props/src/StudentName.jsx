import Single from "./Single";

let StudentName = ({ student }) => {
  return (
    <ul>
      {student.map((item) => (
        <Single item={item} />
      ))}
    </ul>
  );
};

export default StudentName;
