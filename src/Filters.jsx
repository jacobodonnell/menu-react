const Filters = ({ categories, filter }) => {
  return (
    <div className="btn-container">
      {categories.map(category => {
        return (
          <button
            key={category}
            type="button"
            className="btn"
            onClick={() => {
              filter(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
export default Filters;
