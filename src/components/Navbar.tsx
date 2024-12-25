
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "/logo.png";
import { NavLink } from "react-router-dom";

interface Nav_option{
   name:string;
   path:string;
}
const Navbar: React.FC = () => {
     const nav_options:Nav_option[]= [
            { name: "Home", path: "/" },
            { name: "Find Doctors", path: "/find-doctors" },
            { name: "About Us", path: "/about" },
          ]

  return (
    <>
      <div className="relative h-[80px] w-full bg-offYellow flex items-center px-5 lg:hidden">
        <RxHamburgerMenu className="w-8 h-8 text-green" />
        <img
          src={Logo}
          className="absolute left-1/2 transform -translate-x-1/2 scale-125"
          alt="logo"
        />
      </div>
      <div className="h-[80px] w-full bg-offYellow hidden lg:flex items-center justify-between px-8">
        <img src={Logo} className="scale-90" alt="logo" />

        <ul className="flex items-center text-lg gap-4 font-semibold">
          {nav_options.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) =>
                `cursor-pointer nav-option ${
                  isActive ? "text-green active" : "hover:text-green"
                }`
              }
            >
              {name}
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <button className="btn btn-transparent">Login</button>
          <button className="btn btn-primary">Sign-up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
