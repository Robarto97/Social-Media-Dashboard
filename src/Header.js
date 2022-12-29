const Header = () => {
  return (
    <header>
      <div className="title">
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
      </div>
      <div className="input">
        <label htmlFor="checkbox">Dark Mode</label>
        <input
          onChange={() => document.body.classList.toggle("dark")}
          type="checkbox"
          name="checkbox"
          id="checkbox"
          defaultChecked
        />
      </div>
    </header>
  );
};

export default Header;
