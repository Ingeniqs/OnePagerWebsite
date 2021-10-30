import React from "react";
import { Container, Typography, Box, Grid, useTheme, makeStyles } from "@material-ui/core";
import ColorDivider from "../components/ColorDivider";
import InfoCard from "../components/InfoCard";

const useStyles = makeStyles((theme) => {
  return {
    backImageDiv: {
      height: "100%",
      backgroundImage: `url(https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80)`,
      backgroundPosition: "bottom",
      backgroundSize: "cover",
      width: "100%",
      position: "absolute",
      filter: "brightness(0.5)",
      top: 0,
      left: 0,
      zIndex: -1,
      backgroundAttachment: "fixed"
    },
    root: {
      color: "white",
    },
  };
});

export default function About({ data }) {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box
      style={{ position: "relative", zIndex: 10 }}
      pb={6}
      pt={6}
      id="nosotros"
      maxWidth="100vw"
      className={classes.root}
    >
      <div className={`${classes.backImageDiv} ${classes.appbarSpace}`}></div>
      <Container alignItems="center" justifyContent="center">
        <Box mb={2}>
          <Typography
            variant="h2"
            component="h2"
            align="center"
            className="subtitle"
            style={{ fontFamily: "Share Tech" }}
          >
            Sobre Nosotros
          </Typography>
        </Box>
        <ColorDivider />
        <Box mt={2}>
          <Grid container justifyContent="center" alignItems="flex-start">
            <InfoCard data={data.mission} />
            <InfoCard data={data.vision} />
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
