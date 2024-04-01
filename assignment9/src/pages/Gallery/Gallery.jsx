import React, { useEffect, useState } from "react";
import Navbar from "../../componets/Navbar"; // Ensure correct path
import axios from "axios";
import "./gallery.css";

const Gallery = ({ setUser }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch the image paths from the server
    axios.get("http://localhost:8000/user/images")
      .then((response) => {
        // Directly use the response data assuming it's in the expected format
        setImages(response.data); // Assuming this is an array of objects with a url key
      })
      .catch((error) => {
        console.error("There was an error fetching the images:", error);
      });
  }, []);

  return (
    <div className="gallery-container">
      <Navbar setUser={setUser} />
      <div className="gallery">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            {/* Ensure the src attribute uses the correct full path */}
            <img src={`http://localhost:8000${image.url}`} alt={`Gallery item ${index}`} className="company-image"/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
