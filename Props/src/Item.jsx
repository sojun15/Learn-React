let Item = (props) => {
  return (
    <li key={props.element}>
      Student Id: {props.sid} , Name : {props.name}
    </li>
  );
};

export default Item;
