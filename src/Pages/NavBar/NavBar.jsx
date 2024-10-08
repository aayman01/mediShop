import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const NavBar = () => {
    const {logOut} = useAuth();
    const navigate = useNavigate();
    const handleLogOut = () =>{
        logOut()
        .then(() => {
            navigate('/login')
        })
        .catch()
    }
    return (
      <>
        <div className="navbar bg-green-300">
          <div className="flex-1">
            <Link to="/" className="btn btn-ghost text-2xl font-bold">StyleBazar</Link>
          </div>
          <div className="flex-none gap-2">
            {/* <div className="form-control">
      <input
        type="text"
        placeholder="Search"
        className="input input-bordered w-24 md:w-auto"
      />
    </div> */}
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-11 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li className="font-medium">
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
};

export default NavBar;
