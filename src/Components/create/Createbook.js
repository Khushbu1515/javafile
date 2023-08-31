import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
const Createbook = () => {
  const navigate = useNavigate();
  const [formdata, Setformdata] = useState({
    Id:"",
    Book_name: "",
    Book_author: "",
    Publish_date: "",
  });
   
  const handlesubmit = () => {
    // Convert formdata to JSON string
    // Save JSON data to local storage
    localStorage.setItem("Book_data",(formdata.append("Id",""),formdata.append("Book_name",""),formdata.append("Book_author",""),formdata.append("Publish_date","")));
    // localStorage.setItem("Book_author", JSON.stringify(formdata.Book_author));
    // localStorage.setItem("Publish_date", JSON.stringify(formdata.Publish_date));
    // Optionally show a message or perform other actions
    alert("Data saved to local storage!");
    navigate("/");
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    Setformdata((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div>
      <form>
        <h1>BOOK LISTING FORM !</h1>
        <div class="form-group">
          <label for="bookname">Book_name: </label>
          <input
            type="text"
            placeholder="enter a author name"
            name="Book_name"
            value={formdata.Book_name}
            onChange={handlechange}
          />
        </div>

        <br />
        <div class="form-group">
          <label for="authorname">Book_author: </label>
          <input
            type="text"
            value={formdata.Book_author}
            placeholder="enter  author name"
            name="Book_author"
            onChange={handlechange}
          />
        </div>
        <br />
        <div class="form-group">
          <label for="publishdate">publish_date: </label>
          <input
            type="text"
            value={formdata.Publish_date}
            placeholder="enter publish date"
            name="Publish_date"
            onChange={handlechange}
          />
        </div>
        <br />
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <br />
        <button type="submit" class="btn btn-primary" onClick={handlesubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Createbook;
