import React from "react";
//stateless component. unless using redux, this is to help with state management since it can get tricky to maintain or even produce bugs in code. overall, stateless components help with performance.
export const Header = (props) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container">
        <div className="navbar-header">
          <ul className="nav navbar-nav">
            <li><a href="#">{props.homeLink}</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
