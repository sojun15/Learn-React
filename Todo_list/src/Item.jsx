import Components from "./Components";

let Item = () => {
  let list = [
    { task: "Go to university", date: "12/09/2024" },
    { task: "Go to home", date: "15/09/2024" },
  ];
  return <Components item={list} />;
};

export default Item;
