import "./home.css";
import homeCover from "../../assets/images/more/home-cover.png";
import queality1 from "../../assets/images/icons/1.png";
import queality2 from "../../assets/images/icons/2.png";
import queality3 from "../../assets/images/icons/3.png";
import queality4 from "../../assets/images/icons/4.png";
import AllCoffee from "./AllCoffee/AllCoffee";

const Home = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <div className="home-cover-container">
        <img className="home-cover-bg" src={homeCover} alt="" />
        <div className="home-cover-content">
          <h1>Would you like a Cup of Delicious Coffee?</h1>
          <p>
            It is coffee time - Sip & Savor - Relaxation in every sip! Get the
            nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="button">Learn More</button>
        </div>
      </div>
      <div className="qualities-container">
        <div className="quality">
          <img src={queality1} alt="" />
          <h2>Awesome Aroma</h2>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="quality">
          <img src={queality2} alt="" />
          <h2>High Quality</h2>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="quality">
          <img src={queality3} alt="" />
          <h2>Pure Grades</h2>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="quality">
          <img src={queality4} alt="" />
          <h2>Proper </h2>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
      </div>
      <AllCoffee></AllCoffee>
    </div>
  );
};

export default Home;
