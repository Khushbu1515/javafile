import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../Dashboard/File.css";

const Createbook = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    id: "",
    Book_name: "",
    Book_author: "",
    Publish_date: "",
  });
  const [errors, setErrors] = useState({
    Book_name: "",
    Book_author: "",
    Publish_date: "",
  });

  const handlesubmit = (event) => {
    event.preventDefault();

    if (
      !formData.Book_name ||
      !formData.Book_author ||
      !formData.Publish_date
    ) {
      // Set error messages for empty fields
      setErrors({
        Book_name: !formData.Book_name ? "Book name is required" : "",
        Book_author: !formData.Book_author ? "Author name is required" : "",
        Publish_date: !formData.Publish_date ? "Publish date is required" : "",
      });
      return; // Prevent form submission
    }
    // Validate required fields
    else {
      toast.success("submit the data succesfully");
    }

    // Clear any previous error messages
    setErrors({
      Book_name: "",
      Book_author: "",
    });
    if (formData.Book_name && formData.Book_author && formData.Publish_date) {
      const newData = { ...formData, id: Date.now() };

      // Retrieve existing data from localStorage
      const existingData = JSON.parse(localStorage.getItem("crudData")) || [];

      // Merge the new data with the existing data
      const updatedData = [...existingData, newData];

      // Update state and save the merged data to localStorage
      //setData(updatedData);
      localStorage.setItem("crudData", JSON.stringify(updatedData));

      // Reset the form fields
      setFormData({
        id: "",
        Book_name: "",
        Book_author: "",
        Publish_date: "",
      });

      navigate("/");
    }
  };

  // Handling onChange event
  const handlechange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <div className="form-container">
      <form className="form">
        <h1 className="heading">BOOK LISTING FORM!</h1>
        <br />
        <div className="textsize">
          <label htmlFor="bookname">Book_name: </label>
          <input
            className="inputfield"
            type="text"
            placeholder="Enter a book name"
            name="Book_name"
            value={formData.Book_name}
            onChange={handlechange}
          />
          <div className="text">{errors.Book_name}</div>
        </div>
        <br />
        <div className="textsize">
          <label htmlFor="authorname">Book_author: </label>
          <input
            className="inputfield"
            type="text"
            value={formData.Book_author}
            placeholder="Enter an author name"
            name="Book_author"
            onChange={handlechange}
          />
          <div className="text">{errors.Book_author}</div>
        </div>
        <br />
        <div className="textsize">
          <label htmlFor="publishdate">Publish_date: </label>
          <DatePicker
            className="inputfield"
            selected={formData.Publish_date}
            onChange={(date) =>
              setFormData((prevData) => ({
                ...prevData,
                Publish_date: date,
              }))
            }
            placeholderText="dd/MM/yyyy"
          />
          <div className="text">{errors.Publish_date}</div>
        </div>
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handlesubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Createbook;
