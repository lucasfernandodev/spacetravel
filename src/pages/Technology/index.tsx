import Header from "../../components/Header";
import Container from "../../components/utils/container";
import Layout from "../../components/utils/Layout";
import Typography from "../../components/utils/Typography";
import style from "./style.module.css";
import database from '../../lib/data.json';
import { useRef, useState } from "react";

const Technology = () => {

  const {technology} = database;
  console.log(technology)
  const indicatorsRef = useRef<HTMLElement>(null);
  const [currentData, setCurrentData] = useState(technology[0]);
  
  function handleSlider(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    const currentElement = e.target as HTMLElement;
    const currentIndex = currentElement.dataset.index ? parseInt(currentElement.dataset.index) : 0;

    if(typeof technology[currentIndex] !== 'undefined'){
      setCurrentData(technology[currentIndex])

      if(indicatorsRef.current){
        const buttons = indicatorsRef.current.querySelectorAll('button');
        buttons.forEach(e => e.dataset.state = 'hide');

        currentElement.dataset.state = 'active'
      }
    }

  }
  
  return (
    <Layout className={style.technology}>
      <Header />
      <Container el="section" className={style.container}>
        <Typography mask="heading5" className={style.presentationTitle}>
          <span>03</span>
          SPACE LAUNCH 101
        </Typography>
        <div className={style.slider}>
          <section className={style.SliderWrapper}>
            <aside className={style.sliderIndicators} ref={indicatorsRef}>
              <button onClick={e => handleSlider(e)}className={style.btn} data-index="0" data-state="active">1</button>
              <button onClick={e => handleSlider(e)}className={style.btn} data-index="1">2</button>
              <button onClick={e => handleSlider(e)}className={style.btn} data-index="2">3</button>
            </aside>
            <article className={style.sliderContent}>
              <Typography className={style.subtitle} mask="navText">THE TERMINOLOGY…</Typography>
              <Typography className={style.title} mask="heading3">{currentData.name}</Typography>
              <Typography className={style.description} mask="Text">{currentData.description}</Typography>
            </article>
          </section>
          <section className={style.sliderImages}>
            <img src={currentData.images.portrait} alt={currentData.name} />
          </section>
        </div>
      </Container>
    </Layout>
  );
};

export default Technology;
