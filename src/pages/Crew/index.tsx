import Header from "../../components/Header";
import Container from "../../components/utils/container";
import Layout from "../../components/utils/Layout";
import Typography from "../../components/utils/Typography";
import style from "./style.module.css";
import database from "../../lib/data.json";
import { useEffect, useRef, useState } from "react";

interface CrewInterface {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

interface touchEvents {
  end: any | null,
  start:  any | null,
}

const Crew = () => {

  const crew: CrewInterface[] = database.crew;

  const sliderRef = useRef<HTMLElement>(null);
  const [currentSlider, setCurrentSlider] = useState<number>(0);
  const [currentData, setCurrentData] = useState(crew[0]);
  const [touchEvent, setTouchEvent] = useState<touchEvents>({start: null, end: null})
  let timer: any = null;
  let timerStart:any = null;
  let timerEnd:any = null;

  function handleWheel(e: any) {
    e.stopPropagation();
    clearTimeout(timer);

    timer = setTimeout(() => {
      const delta = e.deltaY;

      if (delta > 0) {
        if (currentSlider + 1 < crew.length) {
          setCurrentSlider(currentSlider + 1);
        }
      } else {
        if (currentSlider - 1 >= 0) {
          setCurrentSlider(currentSlider - 1);
        }
      }
    }, 450);
  }

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const element = e.target as HTMLElement;
    const data: any = element.dataset.frame;

    if (sliderRef.current) {


      console.log(data);
      setCurrentSlider(data);
      setCurrentData(crew[data]);
    }
  }

  function onTouchStartHandle(e :React.TouchEvent<HTMLElement>){
    clearTimeout(timerStart)

    timerStart = setTimeout(()=>{
      setTouchEvent({...touchEvent, start : e.changedTouches[0].clientX})
    },300)
  }

  function onTouchEndHandle(e :React.TouchEvent<HTMLElement>){
    clearTimeout(timerEnd)

    timerEnd = setTimeout(()=>{
      setTouchEvent({...touchEvent, end : e.changedTouches[0].clientX})
    },300)
  }


  useEffect(() => {

    if (sliderRef.current) {
      setCurrentData(crew[currentSlider]);

      const indicators = sliderRef.current.getElementsByClassName(style.indicator);
      Array.from(indicators).forEach((e: any) => (e.dataset.active = "false"));

      const indicatorSelected = Array.from(indicators)[currentSlider] as HTMLElement
      if (indicatorSelected.dataset.active !== 'true') {
        indicatorSelected.dataset.active = "true";
      }

    }
  }, [currentSlider]);

  useEffect(() =>{

    if(touchEvent.start !== null && touchEvent.end !== null){
      const slide = touchEvent.start - touchEvent.end;

      if (slide > 0) {
        if (currentSlider + 1 < crew.length) {
          setCurrentSlider(currentSlider + 1);
        }
      } else {
        if (currentSlider - 1 >= 0) {
          setCurrentSlider(currentSlider - 1);
        }
      }
    }
   

  }, [touchEvent.end])

  return (
    <Layout className={style.crew}>
      <Header />
      <Container el="section" className={style.container}>
        <section
          className={style.sliderMain}
          ref={sliderRef}
          onWheel={(e) => handleWheel(e)}
          onTouchStart={e => onTouchStartHandle(e)}
          onTouchEnd={e => onTouchEndHandle(e)}
        >
          <Typography mask="heading5" className={style.presentationTitle}>
            <span>02</span>
            Meet your crew
          </Typography>

          <div className={style.sliderContent}>
            <Typography mask="heading4" className={style.role}>
              {currentData.role}
            </Typography>
            <Typography mask="heading3" className={style.name}>
              {currentData.name}
            </Typography>
            <Typography mask="Text" className={style.bio}>
              {currentData.bio}
            </Typography>
          </div>


          <div className={style.sliderIndicators}>
            {crew.map((n, index) => { return typeof n.role !== 'undefined' ? (
              <div
                key={index}
                data-active="false"
                data-frame={index}
                id={n.role}
                className={style.indicator}
                onClick={(e) => handleClick(e)}
              ></div>
            ) : null})}
          </div>
        </section>
        <section 
          className={style.sliderImage}
          onTouchStart={e => onTouchStartHandle(e)}
          onTouchEnd={e => onTouchEndHandle(e)}
        >
                    <Typography mask="heading5" className={style.presentationTitleMobile}>
            <span>02</span>
            Meet your crew
          </Typography>
          <img src={currentData.images.png} alt={currentData.name} />
        </section>
      </Container>
    </Layout>
  );
};

export default Crew;
