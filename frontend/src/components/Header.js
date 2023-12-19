import React from "react";

function Header() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          Create Student
        </a>
      </li>
      
    </ul>
  );
}

export default Header;
