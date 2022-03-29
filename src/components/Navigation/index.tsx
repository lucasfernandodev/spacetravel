import { useEffect } from "react";
import Typography from "../utils/Typography";
import style from "./style.module.css";

const Navigation = () => {

  function handlerClick(e: MouseEvent){
    e.preventDefault();

    const link = e.target as HTMLAnchorElement;
    document.querySelectorAll('a').forEach(e => e.classList.remove(style.active));

    link !== null && link.classList.add(style.active)
  }

  useEffect(() => {
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
      link.addEventListener('click', e => handlerClick(e))
    })
  }, [])
  return (
    <nav className={style.navigation}>
      <ul className="navigation">
        <li>
          <a href="#" className={style.active}>
            <Typography mask="navText" className={style.navLink}>
              <Typography mask="default">00</Typography>
              <Typography mask="default">Home</Typography>
            </Typography>
          </a>
        </li>

        <li>
          <a href="#">
            <Typography mask="navText" className={style.navLink}>
              <Typography mask="default">01</Typography>
              <Typography mask="default">DESTINATION</Typography>
            </Typography>
          </a>
        </li>

        <li>
          <a href="#">
            <Typography mask="navText"  className={style.navLink}>
              <Typography mask="default">02</Typography>
              <Typography mask="default">CREW</Typography>
            </Typography>
          </a>
        </li>

        <li>
          <a href="#">
            <Typography mask="navText" className={style.navLink}>
              <Typography mask="default">03</Typography>
              <Typography mask="default">TECHNOLOGY</Typography>
            </Typography>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
