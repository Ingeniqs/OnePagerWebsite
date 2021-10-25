import { FormatQuote } from "@mui/icons-material";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default function Quote() {
  return (
    <Box
      style={{ position: "relative", zIndex: 10 }}
      pb={6}
      pt={6}
      id="nosotros"
      maxWidth="100vw"
    >
      <Container alignItems="center" justifyContent="center">
        <Box mb={2} display="flex" justifyContent="center">
          <FormatQuote style={{ color: "skyblue", fontSize: 100 }} />
        </Box>
        <Typography
          variant="h3"
          gutterBottom
          style={{ fontFamily: "Share Tech" }}
          align="center"
        >
          A very cool Quote
        </Typography>
        <Typography
          variant="body1"
          gutterBottom
          style={{ fontFamily: "Josefin Sans" }}
          align="right"
        >
          - Author
        </Typography>
      </Container>
    </Box>
  );
}
