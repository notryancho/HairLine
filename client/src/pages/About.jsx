
import Nav from "../components/Nav";
import "../styles/app.css"

const AboutPage = () => {
  return (
    <div>
      {window.location.pathname !== "/" && <Nav />}
      <div className="about-container">
        <h1>About</h1>
        <h2>
          HairLine includes an array of hairstyles that will help you choose the
          right hairstyle for you based 5 different hair types: 
        </h2>
        <h2>Wavy , Afro , Thin , Thick , and Fine. </h2>
        <img src="https://i.imgur.com/Hd1Fbls.gif" alt="My GIF" />
      </div>
    </div>
  );
};

export default AboutPage;
