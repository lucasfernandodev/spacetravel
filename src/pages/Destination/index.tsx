import style from "./style.module.css";
import Header from "../../components/Header";
import Container from "../../components/utils/container";
import Layout from "../../components/utils/Layout";
import Typography from "../../components/utils/Typography";
import database from "../../lib/data.json";
import { useEffect, useRef, useState } from "react";

interface Destination {
  name: string;
    images: {
        png: string;
        webp: string;
    };
    description: string;
    distance: string;
    travel: string;
}
const Destination = () => {
  const { destinations } = database;
  const navigationRef = useRef<HTMLElement>(null)
  const [currentData, setCurrentData] = useState<Destination>(destinations[0]);
  const [currentTab, setCurrentTab] = useState<string>('default')

  function selectCurrentData(element: any){
    
    const content = element.textContent;

    const isContent = destinations.find(item => content == item.name)
    
    if(typeof isContent !== 'undefined' || isContent !== 'undefined'){
      setCurrentData(isContent as Destination)
      setCurrentTab(content)
    }
  }

  useEffect(() => {
    if(navigationRef.current){
      const navigation = navigationRef.current;
      const navigationLinks = navigation.querySelectorAll('li')

      navigationLinks.forEach(e => e.classList.remove(style.active))

      if(currentTab === 'default'){
        navigationLinks[0].classList.add(style.active);
      }else{
        navigationLinks.forEach(e => {
          if(e.textContent === currentTab){
            e.classList.add(style.active)
          }
        })
      }
    }
  }, [currentTab])

  console.log(database.destinations);
  return (
    <Layout className={style.destination}>
      <Header />
      <Container el="section" className={style.container}>
        <section className={style.presentation}>
          <Typography mask="heading5" className={style.presentationTitle}>
            <span>01</span>
            Pick your destination
          </Typography>

          <img src={currentData.images.png} alt="Planet" />
        </section>
        <section className={style.page}>
          <nav className={style.pageNavigation} ref={navigationRef}>
            <ul>
              {destinations.map((item) => (
                <li key={item.name} onClick={e => selectCurrentData(e.target)}>
                  <Typography mask="navText">{item.name}</Typography>
                </li>
              ))}
            </ul>
          </nav>

          <Typography mask="heading2" className={style.title}>{currentData.name}</Typography>
          <Typography mask="Text" className={style.description}>{currentData.description}</Typography>
          <hr />
          <div className={style.info}>
            <div className="planets-distance">
              <Typography mask="subHeading2" className={style.subTitle}>AVG. DISTANCE</Typography>
              <Typography mask="subHeading1">{currentData.distance}</Typography>
            </div>
            <div className="planets-distance-time">
              <Typography mask="subHeading2" className={style.subTitle}>Est. travel time</Typography>
              <Typography mask="subHeading1">{currentData.travel}</Typography>
            </div>
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default Destination;
