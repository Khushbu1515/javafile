import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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

    if (!formData.Book_name || !formData.Book_author) {
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
    <div>
      <form>
        <h1>BOOK LISTING FORM!</h1>
        <br />
        <div className="form-group">
          <label htmlFor="bookname">Book_name: </label>
          <input
            type="text"
            placeholder="Enter a book name"
            name="Book_name"
            value={formData.Book_name}
            onChange={handlechange}
          />
          <div className="error-message">{errors.Book_name}</div>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="authorname">Book_author: </label>
          <input
            type="text"
            value={formData.Book_author}
            placeholder="Enter an author name"
            name="Book_author"
            onChange={handlechange}
          />
          <div className="error-message">{errors.Book_author}</div>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="publishdate">Publish_date: </label>
          <DatePicker
            selected={formData.Publish_date}
            onChange={(date) =>
              setFormData((prevData) => ({
                ...prevData,
                Publish_date: date,
              }))
            }
            placeholderText="dd/MM/yyyy"
          />
          <div className="error-message">{errors.Publish_date}</div>
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
