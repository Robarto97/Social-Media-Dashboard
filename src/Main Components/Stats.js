import facebook from "../images/icon-facebook.svg";
import twitter from "../images/icon-twitter.svg";
import instagram from "../images/icon-instagram.svg";
import youtube from "../images/icon-youtube.svg";
import up from "../images/icon-up.svg";
import down from "../images/icon-down.svg";

const Stats = () => {
  return (
    <div className="stats">
      <div className="card facebook">
        <div className="top-row">
          <img src={facebook} alt="" />
          <span>@nathanf</span>
        </div>
        <span>1987</span>
        <p>Followers</p>
        <div className="bottom-row up">
          <img src={up} alt="" />
          <span>12</span>
          <span>Today</span>
        </div>
      </div>
      <div className="card twitter">
        <div className="top-row">
          <img src={twitter} alt="" />
          <span>@nathanf</span>
        </div>
        <span>1044</span>
        <p>Followers</p>
        <div className="bottom-row up">
          <img src={up} alt="" />
          <span>99</span>
          <span>Today</span>
        </div>
      </div>
      <div className="card instagram">
        <div className="top-row">
          <img src={instagram} alt="" />
          <span>@realnathanf</span>
        </div>
        <span>11k</span>
        <p>Followers</p>
        <div className="bottom-row up">
          <img src={up} alt="" />
          <span>1099</span>
          <span>Today</span>
        </div>
      </div>
      <div className="card youtube">
        <div className="top-row">
          <img src={youtube} alt="" />
          <span>Nathan F.</span>
        </div>
        <span>8239</span>
        <p>Subscribers</p>
        <div className="bottom-row down">
          <img src={down} alt="" />
          <span>144</span>
          <span>Today</span>
        </div>
      </div>
    </div>
  );
};

export default Stats;
