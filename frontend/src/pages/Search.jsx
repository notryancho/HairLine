import React from "react";
import Nav from "../components/Nav";
// import ImageGrid from "../components/ImageGrid";

const Search = () => { 
  // const [selectedTag, setSelectedTag] = useState("");

  const handleTagClick = (tag) => {
    // setSelectedTag(tag);
  };

  return (
    <div>
      {window.location.pathname !== "/" && <Nav />}
      <h1>Search</h1>
      <div>
        <button onClick={() => handleTagClick("thick")}>Thick</button>
        <button onClick={() => handleTagClick("thin")}>Thin</button>
        <button onClick={() => handleTagClick("wavy")}>Wavy</button>
        <button onClick={() => handleTagClick("fine")}>Fine</button>
        <button onClick={() => handleTagClick("afro")}>Afro</button>
      </div>
      <div>
        {/* <ImageGrid selectedTag={selectedTag} /> */}
      </div>
    </div>
  );
};

export default Search;

