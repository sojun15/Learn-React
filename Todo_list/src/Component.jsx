let Component = ({ task, date }) => {
  return (
    <div className="item-container">
      <div className="row">
        <div className="col-5">{task}</div>
        <div className="col-3">{date}</div>
        <div className="col-2">
          <button>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Component;
