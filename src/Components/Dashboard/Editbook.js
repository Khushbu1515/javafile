import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//import "react-toastify/dist/ReactToastify.css";

const Editbook = () => {
  const navigate = useNavigate();

  const { id } = useParams();
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
  useEffect(() => {
    // Retrieve the data for the book with the given id from localStorage
    const existingData = JSON.parse(localStorage.getItem("crudData"));
    const bookToEdit = existingData.find((book) => book.id === parseInt(id));

    if (bookToEdit) {
      // If the book with the given id exists, set the form data to its values
      setFormData(bookToEdit);
    } else {
      // If the book with the given id does not exist, navigate back to the homepage or handle it as needed
      navigate("/");
    }
  }, [id,navigate]); // called when id and navigate is fetched in data


  const handleEditSubmit = (event) => {
    event.preventDefault();
    // Retrieve existing data from localStorage

    if (!formData.Book_name || !formData.Book_author||!formData.Publish_date) {
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
      toast.success("save the data succesfully");
    }
    
      const existingData = JSON.parse(localStorage.getItem("crudData")) || [];

      // Find the index of the book to edit
      const bookIndex = existingData.findIndex(
        (book) => book.id === parseInt(id)
      );

      if (bookIndex !== -1) {
        // Update the book data in the array
        existingData[bookIndex] = formData;

        // Update state and save the updated data to localStorage
        localStorage.setItem("crudData", JSON.stringify(existingData));

        // Navigate back to the homepage
        navigate("/");
      } else {
        // Handle the case where the book with the given id does not exist
        navigate("/");
      }
    }
  

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDateChange = (date) => {
   
    // Update the date in the formData state
    setFormData((prevData) => ({
      //console.log("ggggggjgjggjg",date)
      ...prevData,
      Publish_date: date ? date : "", // Store the date as ISO string
     
    }));
    console.log("ggggggjgjggjg",formData)
  };
  return (
    <div>
      <form>
        <h1>Edit Book</h1>
        <br />
        <div className="form-group">
          <label htmlFor="bookname">Book_name: </label>
          <input
            type="text"
            placeholder="Enter a book name"
            name="Book_name"
            value={formData.Book_name}
            onChange={handleEditChange}
          />
          <div className="error-message">{errors.Book_name}</div>
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="authorname">Book_author: </label>
          <input
            type="text"
            placeholder="Enter a  author name"
            name="Book_author"
            value={formData.Book_author}
            onChange={handleEditChange}
          />
          <div className="error-message">{errors.Book_author}</div>
        </div>
        <div className="form-group">
          <label htmlFor="publishdate">Publish_date: </label>
          <DatePicker
            selected={
              formData.Publish_date 
            }
            onChange={handleDateChange}
            placeholderText="YY/MM/DD"
          />
          <div className="error-message">{errors.Publish_date}</div>
        </div>
        <br />
        <button
          type="save"
          className="btn btn-primary"
          onClick={handleEditSubmit}
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Editbook;
