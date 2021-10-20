import React from "react";
import { Container, Typography, Box, useTheme, useMediaQuery } from "@material-ui/core";
import AboutCard from "../components/AboutCard";
import ColorDivider from "../components/ColorDivider";

export default function About({data}) {
  const theme= useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      style={{ position: "relative", zIndex: 10 }}
      pb={6}
      pt={6}
      id="nosotros"
    >
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
        {!isMobile ? (
          <div>
            <AboutCard
              data={data.mission}
              imagePosition="left"
              isMobile={isMobile}
            />
            <AboutCard
              data={data.vision}
              imagePosition="right"
              isMobile={isMobile}
            />
          </div>
        ) : (
          <div>
            <AboutCard
              data={data.mission}
              imagePosition="mobile"
              isMobile={isMobile}
            />
            <AboutCard
              data={data.vision}
              imagePosition="mobile"
              isMobile={isMobile}
            />
          </div>
        )}
      </Container>
    </Box>
  );
}
