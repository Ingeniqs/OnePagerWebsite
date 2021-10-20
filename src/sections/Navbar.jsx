import {
  AppBar,
  Button,
  Toolbar,
  makeStyles,
  useMediaQuery,
  useTheme,
  IconButton,
  List,
  ListItem,
  ListItemText,
  SwipeableDrawer,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import logoText from "../img/logo_texto.png";
import React from "react";

const useStyles = makeStyles((theme) => {
  return {
    logo: {
      maxWidth: 120,
      marginRight: "10px",
    },
    links: {
      marginLeft: "auto",
    },
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
    appbarSpace: theme.mixins.toolbar
  };
});

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={classes.list}
    >
      <List>
        {["Nosotros", "Servicios", "Contáctanos"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <img alt="logo" src={logoText} className={classes.logo} />
          {isMobile ? (
            <div className={classes.links}>
              <IconButton
                color="textPrimary"
                className={classes.menuButton}
                edge="start"
                aria-label="right"
                onClick={toggleDrawer("right", true)}
              >
                <MenuIcon />
              </IconButton>
              <SwipeableDrawer
                anchor={"right"}
                open={state["right"]}
                onClose={toggleDrawer("right", false)}
                onOpen={toggleDrawer("right", true)}
              >
                {list("right")}
              </SwipeableDrawer>
            </div>
          ) : (
            <div className={classes.links}>
              <Button edge="right" href="#nosotros" color="inherit">
                Nosotros
              </Button>
              <Button href="#identidad" color="inherit">
                Identidad
              </Button>
              <Button href="#servicios" color="inherit">
                Servicios
              </Button>
              <Button href="#contactanos" color="inherit">
                Contáctanos
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
