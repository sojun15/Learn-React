let Timing = () => {
  let date = new Date();
  return (
    <div>
      <p>Current Time:{date.toLocaleTimeString()}</p>
      <p>Today's Date:{date.toLocaleDateString()}</p>
    </div>
  );
};

export default Timing;
