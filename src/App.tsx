import React from "react";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import Hexagram from "./Hexagram";
import StaticPage from "./StaticPage";
import { trigrams } from "./data";

function App() {
  let history = useHistory();

  const goToRandom = () => {
    let upper = Math.floor(Math.random() * 8);
    let lower = Math.floor(Math.random() * 8);
    let url = `/${trigrams[upper]}/${trigrams[lower]}`;
    history.push(url);
  };

  const hidenav = () => {
    document.getElementById("sidenav")!.style.width = "0px";
  };

  const shownav = () => {
    document.getElementById("sidenav")!.style.width = "150px";
  };

  return (
    <>
      <div id="sidenavbutton" onClick={() => shownav()}></div>

      <div id="sidenav">
        <div className="sidenavmenuitem header">About</div>
        <div className="sidenavmenuitem clickable">
          <Link to="/tao">The Tao</Link>
        </div>
        <div className="sidenavmenuitem clickable">
          <Link to="/iching">I Ching</Link>
        </div>
        <div className="sidenavmenuitem header">Trigrams</div>
        <div className="sidenavmenuitem clickable">
          <Link to="/earth">Earth</Link>
        </div>
        <div className="sidenavmenuitem clickable">
          <Link to="/mountain">Mountain</Link>
        </div>
        <div className="sidenavmenuitem clickable">
          <Link to="/water">Water</Link>
        </div>
        <div className="sidenavmenuitem clickable">
          <Link to="/wind">Wind</Link>
        </div>
        <div className="sidenavmenuitem clickable">
          <Link to="/thunder">Thunder</Link>
        </div>
        <div className="sidenavmenuitem clickable">
          <Link to="/fire">Fire</Link>
        </div>
        <div className="sidenavmenuitem clickable">
          <Link to="/lake">Lake</Link>
        </div>
        <div className="sidenavmenuitem clickable">
          <Link to="/heaven">Heaven</Link>
        </div>
        <div className="sidenavmenuitem header">Hexagrams</div>
        <div className="sidenavmenuitem clickable">
          <Link to="/earth/earth">First</Link>
        </div>
        <div className="sidenavmenuitem clickable random" onClick={goToRandom}>
          Random
        </div>
        <div
          className="sidenavmenuitem header clickable"
          onClick={() => hidenav()}>
          Hide Menu
        </div>
      </div>

      <div id="randombutton" onClick={goToRandom}></div>

      <Switch>
        <Route path="/:upper/:lower" children={<Hexagram />} />
        <Route path="/:name" children={<StaticPage />} />
        <Route path="/" children={<StaticPage />} />
        <Route path="*" children={<StaticPage />} />
      </Switch>
    </>
  );
}

export default App;
