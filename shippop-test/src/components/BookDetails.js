import React, { useState } from "react";
import HandleAppBar from './HandleAppBar';
import MultiCarousel from 'react-multi-carousel';
import { makeStyles} from "@material-ui/core/styles";
import { Carousel} from 'react-carousel-minimal';
import CustomCard from "../Card";
import BatmanBook from '../images/batmanbook1.jpg';
import BatmanBookBack from '../images/batmanbook2.jpg';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FavoriteIcon from '@material-ui/icons/Favorite';
import '../App.css'
const bookDetails = () => {

    const[numCart,setNumCart] = useState(1);
    const[bookToCart,setBookToCart] = useState(0);

    const useStyles = makeStyles({
        bigCard: {
          width: '1200px',
          height: '400px',
          margin: '30px',
          marginLeft: 150
        },
        card: {
            width: '400px',
            height: '600px',
          },
        picOfBook: {
          margin: '100px',
          marginLeft: 150
        },
        marDetail: {
            margin: '100px',
        },
        textF: {
            width: '100px',
            height: '6px',
            margin: '20px',
        },
        butt: {
            width: '130px',
            height: '50px',
            margin: '20px',
        },
        menuButton: {
          //marginRight: "auto" ,
          marginLeft: 150
        }
      });
    
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 5 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
    };
    
    const renderItems = () =>{
        let cards = [];
        for (let i = 1; i <=10; i++) {
          cards.push(<CustomCard key={i} />);
        }
        return cards;
    }

    const data = [
        {
          image: BatmanBook
        },
        {
          image: BatmanBookBack
        }
    ];

    const handleClickAddToCart = () =>{
        setBookToCart(numCart);
    }

    const handleTextFieldOnChangeItem = (e) =>{
        const value = e.target.value;
        setNumCart(value);
        
    }
    const classes = useStyles();
    return (
        <>
          <HandleAppBar
            value={bookToCart}
          />

          <Grid  className="h2" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
                <div className={classes.picOfBook}>
                    <Carousel
                        data={data}
                        width="500px"
                        height="600px"
                        thumbnails={true}
                        thumbnailWidth="120px"
                    />
                </div> 
            </Grid>
            <Grid item xs={6}>
                <div className = {classes.marDetail}>
                    <div className="h2">
                        <label style={{ fontWeight: 'bold',fontSize: 40 }}>Batman: An Origin Story </label>
                    </div>
                    <div className="h2">
                        <label style={{fontSize: 20 }}> ผู้เขียน : John Sazaklis</label>
                    </div>
                    <div className="h2">
                    <label style={{fontSize: 20 }}> สำนักพิมพ์ : Stone Arch Books</label>
                    </div>
                    <div className="h2">
                    <label style={{fontSize: 20 }}>หมวดหมู่ : วรรณกรรม เรื่องสั้น</label>
                    </div>
                    <div className="h2">
                    <label style={{fontSize: 20 }}>ประเภทของสินค้า : Books</label>
                    </div>
                    <div className="h2">
                    <label style={{fontSize: 20 }}>บาร์โค้ด : 1434297314</label>
                    </div>
                    <label className="h2" style={{ fontSize: 30 }}>ราคา
                        <label className="h2" style={{ fontWeight: 'bold', fontSize: 50 }}> THB299.00 </label>
                        <label className="h2" style={{color:'#A9A7A7',fontWeight: 'bold',fontSize: 30,textDecorationLine: 'line-through' }}> THB599.00 </label>
                    </label>
             
                    <TextField
                        className={classes.textF}
                        id="filled-number"
                        type="number"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value = {numCart || 1}
                        onChange={event => handleTextFieldOnChangeItem(event)}
                        variant="filled"
                    />
                    <Button 
                    className={classes.butt} 
                    variant="contained"  
                    size="medium" 
                    color="primary"
                    onClick={() => handleClickAddToCart()}
                    >Add</Button>
                    <Button className={classes.butt} variant="outlined" color="secondary" startIcon={<FavoriteIcon />}>Wishlist</Button>
                </div>
            </Grid>
          </Grid>
          <div className={classes.menuButton}>
            <label className="h2" style={{fontSize: 20 }}>สินค้าที่เกี่ยวข้อง</label>
        </div>
          <div className={classes.bigCard}>
            <MultiCarousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                //autoPlay={this.props.deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                //deviceType={this.props.deviceType}
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
    )

}
export default bookDetails;