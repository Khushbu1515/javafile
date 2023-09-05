import React, { useEffect, useState } from "react";
import "./File.css";
import book from "../assets/book.jpg";
import moment from "moment";
// import Createbook from "../create/Createbook";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    // Create a new array without the item with the specified ID
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    localStorage.setItem("crudData", JSON.stringify(updatedData));
  };
  useEffect(() => {
    // Retrieve data from localStorage and parse it as JSON
    const bookdata = localStorage.getItem("crudData");
    if (bookdata) {
      const parsedData = JSON.parse(bookdata);
      setData(parsedData);
    }
  }, []);
  return (
    <div className="homepage">
      <h1 className="logo">
        <img src={book} alt="" />
      </h1>
      <h2 className="login">
        <h1>BOOK MANAGEMENT APP</h1>
      </h2>
      <button className="button" onClick={() => navigate("/Create")}>
        create book
      </button>
      <br />

      <hr />

      <div className="tabletwo">
        <table className="table">
          <tr>
            <th>Id</th>
            <th>Book-name</th>
            <th>Book-author</th>
            <th>Publish-date</th>
            <th>Action</th>
          </tr>
          <tbody>
            {data.length > 0 ? (
              data.map((item, index) => (
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
      </div>
    </div>
  );
};

export default Homepage;
