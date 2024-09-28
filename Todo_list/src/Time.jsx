let Time = () => {
  let time = new Date();
  return (
    <div>
      <p>Today's : {time.toLocaleString()}</p>
    </div>
  );
};

export default Time;
