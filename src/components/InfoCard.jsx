import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";

export default function InfoCard({ data }) {
  return (
    <Grid
      item
      sm={12}
      md={6}
      direction="column"
      style={{ position: "relative" }}
    >
      <Box
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        m={2}
        p={2}
      >
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
      </Box>
    </Grid>
  );
}
