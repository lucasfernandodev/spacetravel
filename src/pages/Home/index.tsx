import style from "./style.module.css";
import Container from "../../components/utils/container";
import Typography from "../../components/utils/Typography";
import Layout from "../../components/utils/Layout";
import Navigation from "../../components/Navigation";

const Home = () => {
  return (
    <Layout className={style.home}>
      <header>
          <div className="brand">
            <img src="/src/assets/images/logo.svg" alt="logo" />
          </div>
          <div className="row"></div>
          <Navigation />
        </header>
      <Container el="section" className={style.container}>
        <section className={style.welcome}>
          <Typography mask="heading5">SO, YOU WANT TO TRAVEL TO</Typography>
          <Typography mask="heading1">SPACE</Typography>
          <Typography mask="Text">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
          </Typography>
        </section>
        <section  className={style.explorer}>
          <button className={style.btnExplorer}>Explorer</button>
        </section>
      </Container>
    </Layout>
  );
};

export default Home;
