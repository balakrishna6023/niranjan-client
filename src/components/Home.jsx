import video from "../assets/background-video.mp4";
import image from "../assets/home-image.png";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Background Video */}
      <video src={video} autoPlay muted loop></video>

      {/* Main Content Section */}
      <div className="content">
        <div className="left">
          <h1 className="heading1">Welcome to Wellfo</h1>
          <p className="para">
            We specialize in AI-powered website solutions and student training
            programs, helping businesses and learners leverage the power of
            artificial intelligence.
          </p>
        </div>
        <div className="right">
          <img src={image} alt="AI Innovation" className="home-image" />
        </div>
      </div>
    </div>
  );
};

export default Home;