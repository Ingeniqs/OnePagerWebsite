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
import { Link as SmoothLink } from "react-scroll";

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
    appbarSpace: theme.mixins.toolbar,
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

  const items = ["Identidad", "Nosotros", "Proyectos", "Servicios", "Contáctanos"]

  const list = (anchor) => (
    <div
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className={classes.list}
    >
      <List>
        {items.map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
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
              <Button href="#identidad" color="inherit">
                <SmoothLink
                  activeClass="active"
                  to="identidad"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Identidad
                </SmoothLink>
              </Button>
              <Button edge="right" href="#nosotros" color="inherit">
                <SmoothLink
                  activeClass="active"
                  to="nosotros"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Nosotros
                </SmoothLink>
              </Button>
              <Button edge="right" href="#proyectos" color="inherit">
                <SmoothLink
                  activeClass="active"
                  to="proyectos"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Proyectos
                </SmoothLink>
              </Button>
              <Button href="#servicios" color="inherit">
                <SmoothLink
                  activeClass="active"
                  to="servicios"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Servicios
                </SmoothLink>
              </Button>
              <Button href="#contactanos" color="inherit">
                <SmoothLink
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contáctanos
                </SmoothLink>
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
