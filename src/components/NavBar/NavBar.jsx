import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import useDarkMode from "../../useDarkMode";
import * as serviceWorker from "../../serviceWorker";


const NavBar = (props) => {
  serviceWorker.register();
  const { isMobile } = props;
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex items-center ">
      <div className="flex items-center">
        <div className="text-20 font-bold mr-2"> FireBrowser </div>
        {isDarkMode ? (
        <BsSunFill size={"24px"} color="#e9c46a" className="cursor-pointer" onClick={()=>toggleDarkMode(!isDarkMode)} />
        ):(
        <FaMoon size={"24px"} color="#e9c46a" className="cursor-pointer" onClick={()=>toggleDarkMode(!isDarkMode)} />
        )}
        
      </div>
     
    </nav>
  );
};
serviceWorker.unregister();

export default NavBar;
