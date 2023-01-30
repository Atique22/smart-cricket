import { useState } from "react";

const Video = (props) => {
  const [src, setSrc] = useState("");

  const handleChange = (event) => {
    try {
      // Get the uploaded file
      const file = event.target.files[0];

      // Transform file into blob URL
      setSrc(URL.createObjectURL(file));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <video src={src} controls width="100%">
        Sorry, your browser doesn't support embedded videos.
      </video>
      <input type="file" onChange={handleChange} />
    </>
  );
};

export default Video;