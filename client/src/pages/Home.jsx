
import { Link } from 'react-router-dom';
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import Search from '../components/Search'
// import Nav from '../components/Nav'
// import Footer from '../components/Footer' 

const Home = () => {
    return (
        <div className="home-page">
          <h1 className="title">HairLine</h1>
          <h3>Find a look that suits you</h3>
          <div className="button-container">
            <Link to="/about" className="button">About</Link>
            <Link to="/search" className="button">Search</Link>
            <Link to="/browse" className="button">Browse</Link>
          </div>
        </div>
      );
    };

export default Home;