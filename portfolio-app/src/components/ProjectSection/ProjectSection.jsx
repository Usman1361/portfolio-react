import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Projects from "../Projects/Projects";
// import { urlFor } from "../../SanityImageUrl";
import client from "../../SanityClient";
import { getSanityFileUrl } from "../../SanityFileUrl";

const ProjectSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    client
      .fetch('*[_type == "ProjectsData"]')
      .then((data) => {
        setProjects(data);
      })
      .catch(console.error);
  }, []);

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
          {projects.map(({ _id, name, projectimg, viewlink, codelink }, i) => (
            <Grid
              key={_id}
              item
              mt={{ xs: 8, md: 6 }}
              xs={12}
              sm={12}
              md={6}
              lg={6}
              xl={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box>
                <Projects
                  title={name}
                  gif={getSanityFileUrl(projectimg)} // Construct the image URL
                  viewLink={viewlink}
                  gitLink={codelink}
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
