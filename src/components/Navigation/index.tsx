import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import Typography from "../utils/Typography";
import style from "./style.module.css";

const Navigation = () => {

  const currentPath = useLocation()
  const navigationRef = useRef<HTMLElement>(null);

  
  useEffect(() => {
    if(navigationRef.current){

      const navigation = navigationRef.current;
      const navigationLinks = navigation.querySelectorAll('a');

      navigationLinks.forEach(link => {

        link.classList.remove(style.active)
  
        if(link.pathname === currentPath.pathname){
          link !== null && link.classList.add(style.active)
        }
        
        link.onclick = () => link.classList.add(style.active);
      })
    }
  }, [])
  
  return (
    <nav className={style.navigation} ref={navigationRef}>
    
      <button className={style.btnNavigation}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <line x1="4" y1="6" x2="20" y2="6"></line>
        <line x1="4" y1="12" x2="20" y2="12"></line>
        <line x1="4" y1="18" x2="20" y2="18"></line>
      </svg>
      </button>

      <ul className="navigation">
      <div className={style.glass}></div>
        <li>
          <Link to="/" className={style.active}>
            <Typography mask="navText" className={style.navLink}>
              <Typography mask="default" className={style.indicator}>00</Typography>
              <Typography mask="default">Home</Typography>
            </Typography>
          </Link>
        </li>

        <li>
          <Link to="/destination">
            <Typography mask="navText" className={style.navLink}>
              <Typography mask="default" className={style.indicator}>01</Typography>
              <Typography mask="default">DESTINATION</Typography>
            </Typography>
          </Link>
        </li>

        <li>
          <Link to="/Crew">
            <Typography mask="navText"  className={style.navLink}>
              <Typography mask="default" className={style.indicator}>02</Typography>
              <Typography mask="default">CREW</Typography>
            </Typography>
          </Link>
        </li>

        <li>
          <Link to="/Technology">
            <Typography mask="navText" className={style.navLink}>
              <Typography mask="default" className={style.indicator}>03</Typography>
              <Typography mask="default">TECHNOLOGY</Typography>
            </Typography>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
