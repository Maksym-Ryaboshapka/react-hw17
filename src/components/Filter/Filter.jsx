const Filter = ({ onInput }) => {
  return (
    <>
      <p>Filter</p>
      <input type="text" onInput={(e) => onInput(e.currentTarget.value)} />
    </>
  );
};

export default Filter;
