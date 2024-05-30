import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <h1>NIKE</h1>
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/admin">Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="login">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <span>/</span>
          <li>
            <Link to="/sigin"> Sigin </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
