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
      <ul className="navigation">
        <li>
          <Link to="/" className={style.active}>
            <Typography mask="navText" className={style.navLink}>
              <Typography mask="default">00</Typography>
              <Typography mask="default">Home</Typography>
            </Typography>
          </Link>
        </li>

        <li>
          <Link to="/destination">
            <Typography mask="navText" className={style.navLink}>
              <Typography mask="default">01</Typography>
              <Typography mask="default">DESTINATION</Typography>
            </Typography>
          </Link>
        </li>

        <li>
          <Link to="/Crew">
            <Typography mask="navText"  className={style.navLink}>
              <Typography mask="default">02</Typography>
              <Typography mask="default">CREW</Typography>
            </Typography>
          </Link>
        </li>

        <li>
          <Link to="/Technology">
            <Typography mask="navText" className={style.navLink}>
              <Typography mask="default">03</Typography>
              <Typography mask="default">TECHNOLOGY</Typography>
            </Typography>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
