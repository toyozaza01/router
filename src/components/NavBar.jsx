import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <div>
      <div className=" flex min-h-[6rem] min-w-[18rem] flex-wrap items-center justify-center gap-2  bg-cover bg-top p-4">
        <div className="navbar bg-[#fafafa] shadow-2xl rounded-box">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle text-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
              >
                <li>
                  <Link to="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <Link to="/infomation">
                    <a>Information</a>
                  </Link>
                </li>
                <li>
                  <Link to="/activities">
                    <a>Activities</a>
                  </Link>
                </li>
                <li>
                  <Link to='/education'>
                  <a>Education</a>
                  </Link>
                </li>
                <li>
                  <Link to='/contact'>
                  <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <Link to="/">
              <a className="btn btn-ghost text-xl text-black">PPS CH.</a>
            </Link>
          </div>
          <div className="navbar-end">
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
