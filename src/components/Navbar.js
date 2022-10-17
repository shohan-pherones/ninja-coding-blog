const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Ninja Coding Blog</h1>
      <ul className="links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/create">New Blog</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
