import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";

const Overview = () => {
  return (
    <div className="overview">
      <h2>Overview - Today</h2>
      <div className="cards">
        <div className="card">
          <div className="top">
            <h3>Page Views</h3>
            <img src={facebook} alt="" />
          </div>
          <div className="bottom">
            <span>87</span>
            <p className="up">
              <img src={up} alt="" /> 3%
            </p>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <h3>Likes</h3>
            <img src={facebook} alt="" />
          </div>
          <div className="bottom">
            <span>52</span>
            <p className="down">
              <img src={down} alt="" /> 2%
            </p>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <h3>Likes</h3>
            <img src={instagram} alt="" />
          </div>
          <div className="bottom">
            <span>5462</span>
            <p className="up">
              <img src={up} alt="" /> 2257%
            </p>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <h3>Profile Views</h3>
            <img src={instagram} alt="" />
          </div>
          <div className="bottom">
            <span>52k</span>
            <p className="up">
              <img src={up} alt="" /> 1375%
            </p>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <h3>Retweets</h3>
            <img src={twitter} alt="" />
          </div>
          <div className="bottom">
            <span>117</span>
            <p className="up">
              <img src={up} alt="" /> 303%
            </p>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <h3>Likes</h3>
            <img src={twitter} alt="" />
          </div>
          <div className="bottom">
            <span>507</span>
            <p className="up">
              <img src={up} alt="" /> 553%
            </p>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <h3>Likes</h3>
            <img src={youtube} alt="" />
          </div>
          <div className="bottom">
            <span>107</span>
            <p className="down">
              <img src={down} alt="" /> 19%
            </p>
          </div>
        </div>
        <div className="card">
          <div className="top">
            <h3>Total Views</h3>
            <img src={youtube} alt="" />
          </div>
          <div className="bottom">
            <span>1407</span>
            <p className="down">
              <img src={down} alt="" /> 12%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
