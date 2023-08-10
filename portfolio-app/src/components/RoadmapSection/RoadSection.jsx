import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CodeIcon from "@mui/icons-material/Code";
import StarIcon from "@mui/icons-material/Star";
import { DiReact, DiCss3 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import { FaNode } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { BiLogoCPlusPlus, BiLogoJavascript } from "react-icons/bi";
import { SiMui } from "react-icons/si";
const RoadSection = () => {
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid Container pt={10}>
          <Grid item mb={10} xs={12}>
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
              What I Know
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#263238",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="2021"
                iconStyle={{ background: "#263238", color: "white" }}
                icon={<CodeIcon />}
              >
                <Typography
                  variant="h5"
                  className="vertical-timeline-element-title"
                  sx={{
                    fontFamily: "Borel",
                    color: "#29b6f6",
                    fontWeight: "bolder",
                  }}
                >
                  Started Software Engineering
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "Roboto Serif" }}
                >
                  Started BS Software Engineering from National Textile
                  University Faisalabad.
                </Typography>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#263238",
                  color: "#fff",
                }}
                date="2022"
                iconStyle={{
                  background: "#263238",
                  color: "#2196f3",
                }}
                icon={<BiLogoCPlusPlus />}
              >
                <Typography
                  variant="h5"
                  className="vertical-timeline-element-title"
                  sx={{
                    fontFamily: "Borel",
                    color: "#29b6f6",
                    fontWeight: "bolder",
                  }}
                >
                  Learn C++
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "Roboto Serif" }}
                >
                  Learn C++ from NTU in 2nd semester and solve a lot of problems
                  in it.Later on I also Learn Data Structures in 2023 in my 4th
                  semester in C++.
                </Typography>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#263238",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="2022"
                iconStyle={{ background: "#263238", color: "#ff8a65" }}
                icon={<AiFillHtml5 />}
              >
                <Typography
                  variant="h5"
                  className="vertical-timeline-element-title"
                  sx={{
                    fontFamily: "Borel",
                    color: "#29b6f6",
                    fontWeight: "bolder",
                  }}
                >
                  Learn Html
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "Roboto Serif" }}
                >
                  Learn html from SMIT
                </Typography>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#263238",
                  color: "#fff",
                }}
                date="2022"
                iconStyle={{ background: "#263238", color: "#29b6f6" }}
                icon={<DiCss3 />}
              >
                <Typography
                  variant="h5"
                  className="vertical-timeline-element-title"
                  sx={{
                    fontFamily: "Borel",
                    color: "#29b6f6",
                    fontWeight: "bolder",
                  }}
                >
                  Learn CSS
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "Roboto Serif" }}
                >
                  Learn CSS also from SMIT
                </Typography>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#263238",
                  color: "#fff",
                }}
                date="2023"
                iconStyle={{
                  background: "#263238",
                  color: "#2196f3",
                }}
                icon={<TbBrandCSharp />}
              >
                <Typography
                  variant="h5"
                  className="vertical-timeline-element-title"
                  sx={{
                    fontFamily: "Borel",
                    color: "#29b6f6",
                    fontWeight: "bolder",
                  }}
                >
                  Learn C#
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "Roboto Serif" }}
                >
                  Learn C# from NTU and made a hospital management system on
                  window forms C# and Sql as Database.I also learn OOP concepts
                  in this language.
                </Typography>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#263238",
                  color: "#fff",
                }}
                date="2023"
                iconStyle={{ background: "#263238", color: "#ffeb3b" }}
                icon={<BiLogoJavascript fontSize="large" />}
              >
                <Typography
                  variant="h5"
                  className="vertical-timeline-element-title"
                  sx={{
                    fontFamily: "Borel",
                    color: "#29b6f6",
                    fontWeight: "bolder",
                  }}
                >
                  Learn Js
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "Roboto Serif" }}
                >
                  Learn Js and solve many basic problems with it.
                </Typography>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#263238",
                  color: "#fff",
                }}
                date="2023"
                iconStyle={{
                  background: "#263238",
                  color: "#2196f3",
                }}
                icon={<DiReact />}
              >
                <Typography
                  variant="h5"
                  className="vertical-timeline-element-title"
                  sx={{
                    fontFamily: "Borel",
                    color: "#29b6f6",
                    fontWeight: "bolder",
                  }}
                >
                  Learn React
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "Roboto Serif" }}
                >
                  Learn React from youtube and some online resources along with
                  SMIT and made multiple projects in it.
                </Typography>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#263238",
                  color: "#fff",
                }}
                date="2023"
                iconStyle={{
                  background: "#263238",
                  color: "#2196f3",
                }}
                icon={<SiMui />}
              >
                <Typography
                  variant="h5"
                  className="vertical-timeline-element-title"
                  sx={{
                    fontFamily: "Borel",
                    color: "#29b6f6",
                    fontWeight: "bolder",
                  }}
                >
                  Learn MUI
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "Roboto Serif" }}
                >
                  Learn MUI for styling.It can be more helpful for making
                  responsive design.
                </Typography>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#263238",
                  color: "#fff",
                }}
                date="2023"
                iconStyle={{
                  background: "#263238",
                  color: "Green",
                }}
                icon={<FaNode />}
              >
                <Typography
                  variant="h5"
                  className="vertical-timeline-element-title"
                  sx={{
                    fontFamily: "Borel",
                    color: "#29b6f6",
                    fontWeight: "bolder",
                  }}
                >
                  Learn Backend Development
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "Roboto Serif" }}
                >
                  Learn Node js and Express js to be a full stack web developer.
                </Typography>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "#263238",
                  color: "#fff",
                }}
                date="2023"
                iconStyle={{
                  background: "#263238",
                  color: "#2196f3",
                }}
                icon={<CodeIcon />}
              >
                <Typography
                  variant="h5"
                  className="vertical-timeline-element-title"
                  sx={{
                    fontFamily: "Borel",
                    color: "#29b6f6",
                    fontWeight: "bolder",
                  }}
                >
                  Learn from NTU
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "white", fontFamily: "Roboto Serif" }}
                >
                  I learn a lot from NTU.I just complete my 4th semester.I know
                  all the basic concepts of programming languages and also OOP
                  and DSA.I also know a lot about how to gather requirements
                  from the customer and in future i expected to learn more from
                  NTU.
                </Typography>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                iconStyle={{ background: "#ffeb3b", color: "#fff" }}
                icon={<StarIcon />}
              />
            </VerticalTimeline>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default RoadSection;
