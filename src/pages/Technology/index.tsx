import Header from '../../components/Header';
import Container from '../../components/utils/container';
import Layout from '../../components/utils/Layout';
import style from './style.module.css';

const Technology = () => {
  return (
    <Layout className={style.Technology}>
    <Header />
    <Container el="section" className={style.container}></Container>
    </Layout>
  )
}

export default Technology;