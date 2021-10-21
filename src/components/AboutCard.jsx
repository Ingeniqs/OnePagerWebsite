import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useStyles = makeStyles({
  responsive: {
    width: "100%",
    height: "auto",
    borderRadius: "10%",
  },
});

export default function AboutCard({ data, imagePosition, isMobile }) {
  const classes = useStyles();
  const [spacing, setSpacing] = useState({
    right: 0,
    left: 0,
  });

  useEffect(() => {
    if (imagePosition === "left") {
      setSpacing({
        right: 4,
        left: 0,
      });
    } else if (imagePosition === "right") {
      setSpacing({
        right: 0,
        left: 4,
      });
    } else if (imagePosition === "mobile") {
      setSpacing({
        right: 0,
        left: 0,
      });
    }
  }, [imagePosition]);

  const ImageCard = () => (
    <Grid item sm={12} md={6} direction="column">
      <Box mr={spacing.right} ml={spacing.left}>
        <img src={data.image} alt={data.title} className={classes.responsive} />
      </Box>
    </Grid>
  );

  const InfoCard = () => (
    <Grid item sm={12} md={6} direction="column">
      <Box mb={2}>
        <Typography
          variant="h3"
          component="h2"
          style={{ fontFamily: "Share Tech" }}
        >
          {data.title.toUpperCase()}
        </Typography>
      </Box>
      <Typography variant="h6" component="p">
        {data.content}
      </Typography>
    </Grid>
  );

  return (
    <Box mt={3} pb={3} pt={3}>
      {imagePosition === "left" ? (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <ImageCard />
          <InfoCard />
        </Grid>
      ) : (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="flex-start"
        >
          <InfoCard />
          <ImageCard />
        </Grid>
      )}
    </Box>
  );
}
