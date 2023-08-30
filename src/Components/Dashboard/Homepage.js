import React from "react";
import "./File.css";
import book from "../assets/book.jpg";
import books from "../../book.json";
const Homepage = () => {
  return (
    <div className="homepage">
      <h1 className="logo">
        <img src={book} alt="" />
      </h1>
      <h2 className="login">
        <h1>BOOK MANAGEMENT APP</h1>
      </h2>
      <button className="button">create book</button>
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
          </tr>

          <tr>
            <td></td>
            <td>Math</td>
            <td>Germany</td>
          </tr>
          
        </table>
      </div>
    </div>
  );
};

export default Homepage;
