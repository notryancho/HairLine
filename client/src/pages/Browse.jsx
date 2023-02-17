import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Browse = () => {
  const [hairTypes, setHairTypes] = useState([]);

  const getHairTypes = async () => {
    const types = await axios.get('/api/getAllHairTypes');
    setHairTypes(types.data.hairTypes);
  };

  useEffect(() => {
    getHairTypes();
  }, []);

  return (
    <div>
      {window.location.pathname !== "/" && <Nav />}
      <h1>Browse Hairstyles</h1>
      {hairTypes && (
        <div className="gallery">
          {hairTypes.map((hairType) => (
            <div key={hairType._id}>
              <Link to={`/browse/hairStyle/${hairType._id}`}>
                <h3>{hairType.name}</h3>
                <img src={hairType.imageUrl} alt={hairType.name} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Browse;
