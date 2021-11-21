import './App.css';
import React from 'react';
import { makeStyles} from "@material-ui/core/styles";
import Slide1 from './images/slide1.jpg'
import Slide2 from './images/slide2.jpg'
import Slide3 from './images/slide3.jpg'
import { Carousel} from 'react-carousel-minimal';
import MultiCarousel from 'react-multi-carousel';
import CustomCard from "./Card";
import "react-multi-carousel/lib/styles.css";
import HandleAppBar from './components/HandleAppBar'


const Shippop = () => {

  const useStyles = makeStyles({
    // This group of buttons will be aligned to the right
    card: {
      //maxWidth: 100,
      width: '250px',
      height: '350px',
      margin: '30px',
    },
    bigCard: {
      //maxWidth: 100,
      width: '1200px',
      height: '400px',
      margin: '30px',
      marginLeft: 150
    },
    rightToolbar: {
      marginLeft: "auto",
      marginRight: 150
    },
    menuButton: {
      //marginRight: "auto" ,
      marginLeft: 150
    }
  })

  const data = [
    {
      image: Slide1
    },
    {
      image: Slide2
    },
    {
      image: Slide3
    }
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 5
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1
    }
  };

  const renderItems = () =>{
    let cards = [];
    for (let i = 1; i <=10; i++) {
      cards.push(<CustomCard key={i} />);
    }
    return cards;
  }

  const classes = useStyles();
  return (
    <>
      <HandleAppBar/>
      <div className={classes.bigCard}>
          <Carousel
            data={data}
            time={2000}
            width="1150px"
            height="400px"
            captionPosition="bottom"
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "1150px",
              maxHeight: "400px",
              margin: "40px auto",
            }}
          />
        </div>
        <div className={classes.menuButton}>
            <label className="h2" style={{fontSize: 20 }}>สินค้าขายดี</label>
        </div>
       
        <div className={classes.bigCard}>
        <MultiCarousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          style={{
            textAlign: "center",
            Width: "1150px",
            Height: "400px",
            margin: "40px auto",
          }}
        >
          {renderItems()}
            
        </MultiCarousel>
        </div>
        <div className={classes.menuButton}>
            <label className="h2" style={{fontSize: 20 }}>สินค้าแนะนำ</label>
        </div>
        <div className={classes.bigCard}>
        <MultiCarousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} 
          infinite={true}
          autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          style={{
            textAlign: "center",
            Width: "1150px",
            Height: "400px",
            margin: "40px auto",
          }}
        >
          {renderItems()}
            
        </MultiCarousel>
        </div>
   
    </>
  );
}

export default Shippop;