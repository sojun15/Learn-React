import Item from "./Item";
import style from "./Items.module.css";
let Items = ({ cities }) => {
  return (
    <div>
      <h1>Cities Name:</h1>
      {cities.length === 0 ? (
        <p>cities are empty</p>
      ) : (
        <div className={style["all-thing"]}>
          {cities.map((item) => (
            <Item
              key={item}
              item={item}
              Handle={() => console.log(`${item} is clicked`)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Items;

// if we want to write those with indexing
// <ul>
//         {cities.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
