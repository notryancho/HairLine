import React, { useState } from "react";
import ImageGrid from "./ImageGrid";

const App = () => {
  const [selectedTag, setSelectedTag] = useState("thick"); 

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTagClick("thick")}>Thick</button>
        <button onClick={() => handleTagClick("wavy")}>Wavy</button>
        <button onClick={() => handleTagClick("thin")}>Thin</button>
        <button onClick={() => handleTagClick("fine")}>Fine</button>
        <button onClick={() => handleTagClick("afro")}>Afro</button>
      </div>
      <ImageGrid selectedTag={selectedTag} />
    </div>
  );
};

export default App;
