import { useState } from "react";
import axios from "axios";

function App() {

  const [formData, setFormData] = useState({
    bookTitle: "",
    authorName: "",
    isbn: "",
    description: "",
    category: "",
    publicationYear: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/books",
        formData
      );

      setMessage("Book added successfully!");

      setFormData({
        bookTitle: "",
        authorName: "",
        isbn: "",
        category: "",
        publicationYear: ""
      });

    } catch (error) {
      setMessage("Failed to add book");
    }
  };

  return (
    <div>

      <h1>Library Book Management System</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="bookTitle"
          placeholder="Book Title"
          value={formData.bookTitle}
          onChange={handleChange}
        />
        <br/>
        <input
          type="text"
          name="authorName"
          placeholder="Author Name"
          value={formData.authorName}
          onChange={handleChange}
        />
        <br/>
        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={formData.isbn}
          onChange={handleChange}
        />
        <br/>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
        <br/>
        <input
          type="number"
          name="publicationYear"
          placeholder="Publication Year"
          value={formData.publicationYear}
          onChange={handleChange}
        />
        <br/>
        <button type="submit">
          Add Book
        </button>

      </form>

      <p>{message}</p>

    </div>
  );
}

export default App;



