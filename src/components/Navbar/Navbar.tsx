import { Link } from 'react-router-dom';

const Navbar = (): JSX.Element => {
  return (
    <nav>
      <ul className="flex justify-evenly p-8 m-auto bg-gray-300">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
