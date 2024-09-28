let Button = ({ element }) => {
  return (
    <p>
      {element.map((item, index) =>
        index % 4 == 0 && index != 0 ? (
          <>
            <br />
            <button>{item}</button>
          </>
        ) : (
          <button>{item}</button>
        )
      )}
    </p>
  );
};

export default Button;
