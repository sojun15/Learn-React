let Single = ({ item }) => {
  return (
    <li key={item.id}>
      Id : {item.id}, Name : {item.name}
    </li>
  );
};

export default Single;
