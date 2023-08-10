import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import Projects from "../Projects/Projects";
import { gif1, gif2, gif3 } from "../smallComponents/images";

const ProjectSection = () => {
  const data = [
    {
      title: "Hotel Website",
      gif: gif1,
      viewLink: "https://usmanapp1.netlify.app/",
      gitLink: "https://github.com/Usman1361/resturent-app",
    },
    {
      title: "NFT Site",
      gif: gif2,
      viewLink: "https://usmannftapp.netlify.app/",
      gitLink: "https://github.com/Usman1361/nft-app/tree/main/nft-app",
    },
    {
      title: "Todo Mern App",
      gif: gif3,
      viewLink: "https://github.com/Usman1361/todo-mern-app",
      gitLink: "https://github.com/Usman1361/todo-mern-app",
    },
  ];
  return (
    <Box pt={10}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item mb={6} xs={12}>
            <Typography
              variant="h3"
              className="vertical-timeline-element-title"
              sx={{
                fontFamily: "Borel",
                color: "#29b6f6",
                fontWeight: "bolder",
                textAlign: "center",
              }}
            >
              Projects
            </Typography>
          </Grid>
          {data.map(({ title, gif, viewLink, gitLink }, i) => (
            <Grid
              item
              mt={{ xs: 8, md: 4 }}
              xs={12}
              sm={i === 2 ? 12 : 6}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box>
                <Projects
                  title={title}
                  gif={gif}
                  viewLink={viewLink}
                  gitLink={gitLink}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectSection;
