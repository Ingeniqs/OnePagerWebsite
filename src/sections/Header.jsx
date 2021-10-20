import {
  makeStyles,
  Typography,
  Box,
  IconButton,
  useTheme,
} from "@material-ui/core";
import { ArrowDropDown, ArrowDropDownCircle } from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles((theme) => {
  return {
    backImageDiv: {
      height: 600,
      backgroundImage: `url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      width: "100%",
      position: "absolute",
      filter: "brightness(0.5)",
      top: 0,
      left: 0,
    },
    main: {
      position: "relative",
      zIndex: 10,
      minWidth: "100%",
      height: "100%",
    },
    title: {
      fontSize: 50,
      color: "#ffe300",
      fontFamily: "Share Tech",
    },
    container: {
      width: "100vw",
      height: 600,
    },
    appbarSpace: theme.mixins.toolbar,
  };
});

export default function Header() {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.container}>
      <div className={`${classes.backImageDiv} ${classes.appbarSpace}`}></div>
      <Box
        className={classes.main}
        flexDirection="column"
        justifyContent="center"
        display="flex"
        alignItems="center"
      >
        <Box m={2}>
          <Typography
            variant="h2"
            component="h6"
            align="center"
            mt={4}
            style={{ fontFamily: "Share Tech", color: "white" }}
          >
            Soluciones digitales a tu alcance
          </Typography>
        </Box>
        <Box m={2}>
          <IconButton variant="contained" rounded color="inherit" size="large">
            <ArrowDropDownCircle fontSize="large" />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
}
