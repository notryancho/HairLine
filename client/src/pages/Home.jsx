
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className="home-page">
          <h1 className="title">HairLine</h1>
          <h3>Find a look that suits you</h3>
          <div className="button-container">
            <Link to="/about" className="button">About</Link>
            <Link to="/browse" className="button">Browse</Link>
          </div>
        </div>
      );
    };

export default Home;