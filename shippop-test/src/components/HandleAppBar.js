import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Avatar from '@material-ui/core/Avatar';
import Ava from '../images/ava.png';
import { makeStyles} from "@material-ui/core/styles";
import Badge from "@material-ui/core/Badge";
import '../App.css';
import Link from '@material-ui/core/Link';

const HandleAppBar = (props) =>{
 
    const itemCount = props.value;
    const useStyles = makeStyles({

        rightToolbar: {
          marginLeft: "auto",
          marginRight: 150
        },
        menuButton: {
          //marginRight: "auto" ,
          marginLeft: 150,
          fontSize: 40,
          fontWeight: 'bold'
        },
        butt: {
          width: '130px',
          height: '50px',
          margin: '20px',
      }
      })

    const handleClickCart = (e) =>{
      //
    }
   
    const classes = useStyles();
    
    return (
        <>
          <AppBar className="h2" position='fixed' color='inherit'>
            <Toolbar>
              <Link className={classes.menuButton} href="/" color="inherit" underline="none">
              Book
              </Link>
              <List >
                <ListItem component="div">
                  <ListItemText inset>
                    <Typography variant='title'>สินค้าใหม่</Typography>
                  </ListItemText>
                  <ListItemText inset>
                    <Typography variant='title'>สินค้าขายดี</Typography>
                  </ListItemText>
                  <ListItemText inset>
                    <Typography variant='title'>สินค้าลดราคา</Typography>
                  </ListItemText>
                  <ListItemText inset>
                    <Typography variant='title'>สินค้าแนะนำ</Typography>
                  </ListItemText>
                </ListItem >
              </List>
      
              <section className={classes.rightToolbar}>
                <IconButton color="inherit" aria-label='Search'>
                  <SearchIcon />
                </IconButton>
                {/* <IconButton color="inherit" aria-label="Save">
                  <ShoppingCartIcon/>
                </IconButton> */}
               
                <IconButton aria-label="cart" onClick={(event) => handleClickCart(event)}>
                <Badge color="primary" badgeContent={itemCount}>
                  <ShoppingCartIcon />{" "}
                </Badge>
                </IconButton>
              
        
                <IconButton color="inherit">
                  <Avatar alt="src" src={Ava}/>
                </IconButton>
              </section>
          
            </Toolbar>
          </AppBar>
        </>
    )
}
export default HandleAppBar;