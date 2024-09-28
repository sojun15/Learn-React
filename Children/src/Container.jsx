let Container = ({ children, discipline }) => {
  return (
    <div>
      <h1>{children}</h1>
      {discipline.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default Container;
