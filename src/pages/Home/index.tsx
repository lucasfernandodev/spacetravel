import style from "./style.module.css";
import Container from "../../components/utils/container";
import Typography from "../../components/utils/Typography";
import Layout from "../../components/utils/Layout";
import Header from "../../components/Header";

const Home = () => {
  return (
    <Layout className={style.home}>
      <Header />
      <Container el="section" className={style.container}>
        <section className={style.welcome}>
          <Typography mask="heading5" className={style.subTitle}>SO, YOU WANT TO TRAVEL TO</Typography>
          <Typography mask="heading1">SPACE</Typography>
          <Typography mask="Text" className={style.description}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </Typography>
        </section>
        <section className={style.explorer}>
          <button className={style.btnExplorer}>Explorer</button>
        </section>
      </Container>
    </Layout>
  );
};

export default Home;
