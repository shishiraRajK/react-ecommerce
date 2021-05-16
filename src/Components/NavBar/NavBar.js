import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
//Badge-> ho many notifications or items do we have
import { ShoppingCart } from "@material-ui/icons";
// import classes from "*.module.css";
import logo from "../../assets/logo.png";
import useStyles from "./styles";

const NavBar = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img
              src={logo}
              alt="GreeShish"
              height="25px"
              className={classes.image}
            />
            GreeShish
          </Typography>
          <div className={classes.grow} />
          <div className={classes.buttton} />
          <IconButton aria-label="Show cart items">
            <Badge badgeContent={2}>
              <ShoppingCart />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default NavBar;
