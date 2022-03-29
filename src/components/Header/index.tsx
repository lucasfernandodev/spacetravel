import Navigation from "../Navigation";
import style from "./style.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className="brand">
        <img src="/src/assets/images/logo.svg" alt="logo" />
      </div>
      <div className="row"></div>
      <Navigation />
    </header>
  );
};

export default Header;
