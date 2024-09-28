import Component from "./Component";

let Components = ({ item }) => {
  return (
    <div className="items">
      {item.map((element, index) => (
        <Component key={index} task={element.task} date={element.date} />
      ))}
    </div>
  );
};

export default Components;
