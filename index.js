const element = (
  <div className="bg-container">
    <h1 className="congrats">Congratulations</h1>
    <div className="card">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="image"
        ></img>
      </div>
      <h1>Kiran V</h1>
      <p>Vits</p>
      <p>Bheemavaram</p>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="image"
        ></img>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
