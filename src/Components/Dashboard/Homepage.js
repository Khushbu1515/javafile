import React from "react";
import "./File.css";
import book from "../assets/book.jpg";
import books from "../../book.json";
// import Createbook from "../create/Createbook";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
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
      <br />

      <hr />

      <div className="tabletwo">
        <table>
          <tr>
            <th>Id</th>
            <th>Book-name</th>
            <th>Book-author</th>
            <th>Publish-date</th>
            <th>Action</th>
          </tr>
          <tbody>
            {books.books.map((item) => (
              <tr key={item.Id}>
                <td>{item.Id}</td>
                <td></td>
                <td></td>
                <td></td>
                <button onClick={()=>navigate("/Create")}>Edit</button>
                <button>Delete</button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Homepage;
