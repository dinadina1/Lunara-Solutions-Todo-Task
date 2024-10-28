const Filter = ({ handleFilter, setFilter, filter }) => {
  return (
    <>
      <section className="p-4 px-8">
        <div className="text-end">
          <p className="inline-block mr-2">Filter by status:</p>
          <select
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              handleFilter(e.target.value);
            }}
            className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="" disabled>
              Select Status
            </option>
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </section>
    </>
  );
};

export default Filter;
