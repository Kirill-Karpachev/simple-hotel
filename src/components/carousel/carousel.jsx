import imagesArr from "../../images/carousel";
import styles from "./carousel.module.css";
import { Carousel } from "@trendyol-js/react-carousel";

const CarouselImg = () => {
  return (
    <div className={styles.carousel}>
      <Carousel show={3.5} slide={2} swiping={true} rightArrow leftArrow>
        {imagesArr.map((item, index) => (
          <img key={index} src={item} alt="Карьинка" />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselImg;
