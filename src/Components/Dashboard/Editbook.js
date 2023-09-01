
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Editbook = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    Book_name: "",
    Book_author: "",
    Publish_date: "",
  });

  const handlesubmit = (event) => {
    event.preventDefault();
    if (formData.Book_name && formData.Book_author && formData.Publish_date) {
      const newData = { ...formData, id: Date.now() };
  
      // Retrieve existing data from localStorage
      const existingData = JSON.parse(localStorage.getItem("crudData")) || [];
  
      // Merge the new data with the existing data
      const updatedData = [...existingData, newData];
  
      // Update state and save the merged data to localStorage
      setData(updatedData);
      localStorage.setItem("crudData", JSON.stringify(updatedData));
  
      // Reset the form fields
      setFormData({
        id: "",
        Book_name: "",
        Book_author: "",
        Publish_date: "",
      });
  
      navigate("/");
    } else {
      // Add validation/error handling here
      alert("Please fill in all the fields.");
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
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="publishdate">Publish_date: </label>
          <input
            type="text" 
            value={formData.Publish_date}
            placeholder="Enter publish date"
            name="Publish_date"
            onChange={handlechange}
          />
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
