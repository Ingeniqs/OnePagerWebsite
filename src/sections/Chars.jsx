import {
  Container,
  makeStyles,
  useTheme,
  Grid,
  Typography,
  Box,
} from "@material-ui/core";
import React from "react";
import CharCard from "../components/CharCard";
import ColorDivider from "../components/ColorDivider";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      background: "transparent",
      color: "black",
    },
    back: {
      background: "fefefe",
      width: "100vw",
    },
  };
});

export default function Chars({ data }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box className={classes.back} pb={6} id="servicios">
      <Container
        justifyContent="center"
        align="center"
        className={classes.container}
      >
        <Box pt={6} pb={2}>
          <Typography
            variant="h2"
            component="h2"
            className="subtitle"
            style={{ fontFamily: "Share Tech" }}
          >
            Lo que nos caracteriza
          </Typography>
        </Box>
        <ColorDivider />
        <CharCard />
      </Container>
    </Box>
  );
}
