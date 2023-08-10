import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import AnimationCard from "../AnimatiionCard/AnimationCard";
import { DiReact, DiMongodb } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
const SkillCard = () => {
  const data = [
    {
      title: "Frontend Development",
      icon: DiReact,
      detail:
        "I excel at frontend development using JavaScript, React. I have a deep understanding of these technologies and utilize them effectively to build dynamic and responsive user interfaces.",
      color: "rgb(97, 218, 251)",
    },
    {
      title: "Backend Development",
      icon: FaNodeJs,
      detail:
        "With my good knowledge in MERN stack, I specialize in backend development using RESTful APIs, Express, and JWT. I leverage these technologies to build efficient and secure server-side applications",
      color: "rgb(51, 153, 51)",
    },
    {
      title: "Database Management",
      icon: DiMongodb,
      detail:
        "I have a good command of databases, particularly MongoDB with Mongoose. I possess the skills to design, optimize, and manage database systems, ensuring data integrity and efficient querying.",
      color: "rgb(51, 153, 51)",
    },
  ];
  return (
    <Box pt={10}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid item mb={1} xs={12}>
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
              What I Can Do
            </Typography>
          </Grid>
          {data.map(({ title, detail, icon, color }, i) => (
            <Grid
              item
              xs={12}
              sm={i === 2 ? 12 : 6}
              md={4}
              mt={3}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box>
                <AnimationCard
                  title={title}
                  icon={icon}
                  detail={detail}
                  color={color}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SkillCard;
