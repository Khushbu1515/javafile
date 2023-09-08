import React, { useEffect, useState } from "react";
import "./File.css";
import book from "../assets/book.jpg";
import moment from "moment";

import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [sortedColumn, setSortedColumn] = useState("Book_name");
  const [sortOrder, setSortOrder] = useState("asc"); // Initial sort order is ascending
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    // Create a new array without the item with the specified ID
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    localStorage.setItem("crudData", JSON.stringify(updatedData));
  };

  const toggleSortOrder = () => {
    // Toggle between ascending and descending order
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortOrder(newOrder);
  };

  const sortedData = [...filteredBooks].sort((a, b) => {
    const aValue = a[sortedColumn];

    const bValue = b[sortedColumn];
    if (sortOrder === "asc") {
      return aValue.localeCompare(bValue);
    } else {
      return bValue.localeCompare(aValue);
    }
  });
  const handleSortByName = () => {
    setSortedColumn("Book_name");
    toggleSortOrder();
  };
  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    // Retrieve data from localStorage and parse it as JSON
    const bookdata = localStorage.getItem("crudData");
    if (bookdata) {
      const parsedData = JSON.parse(bookdata);
      // Filter the data based on the search query
      const filteredData = parsedData.filter((book) =>
        book.Book_name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      // Update the filteredBooks state
      setFilteredBooks(filteredData);

      // Optionally, you can also update the data state to keep the original data
      setData(parsedData);
    }
  }, [searchQuery]);
  //console.log("gghjghh", currentItems);
  return (
    <div className="homepage">
      <div className="logo">
        <img src={book} alt="" />
      </div>
      <div className="login">
        <h1>BOOK MANAGEMENT APP</h1>
      </div>
      <button className="button" onClick={() => navigate("/Create")}>
        create book
      </button>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by book name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {
          <button onClick={() => setSearchQuery("")} className="clear-button">
            Search
          </button>
        }
      </div>
      <br />

      <hr />

      <div className="tabletwo">
        <table className="table">
          <tr>
            <th>id</th>
            <th onClick={handleSortByName} className="sortable-header">
              Book Name
              {sortedColumn === "Book_name" && (
                <span className="sort-arrows">
                  <span
                    className={`asc-arrow ${
                      sortOrder === "asc" ? "active" : ""
                    }`}
                  >
                    ▲
                  </span>
                  <span
                    className={`desc-arrow ${
                      sortOrder === "desc" ? "active" : ""
                    }`}
                  >
                    ▼
                  </span>
                </span>
              )}
            </th>

            <th>Book-author</th>
            <th>Publish-date</th>
            <th>Action</th>
          </tr>
          <tbody>
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item?.Book_name}</td>
                  <td>{item?.Book_author}</td>

                  <td>{moment(item?.Publish_date).format("L")}</td>
                  <td>
                    <button onClick={() => navigate(`/edit/${item.id}`)}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>Page {currentPage}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={indexOfLastItem >= sortedData.length}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
