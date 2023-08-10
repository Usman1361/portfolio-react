import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { logo } from "../components/smallComponents/images";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { BiLogoGmail } from "react-icons/bi";
import {
  gmailLogo,
  phoneLogo,
  mapLogo,
} from "../components/smallComponents/images";
import { Link } from "react-scroll";

const Footer = () => {
  const contact = [
    {
      icon: phoneLogo,
      title: "Phone",
      content: "+923098479197",
    },
    {
      icon: gmailLogo,
      title: "Email",
      content: "usmanjavaid231@gmail.com",
    },
    {
      icon: mapLogo,
      title: "Address",
      content: "Faisalabad, Punjab, Pakistan",
    },
  ];
  const siteData = [
    {
      name: "Work",
      link: "work",
    },
    {
      name: "skill",
      link: "skill",
    },
    {
      name: "projects",
      link: "projects",
    },
    {
      name: "About",
      link: "about",
    },
  ];
  const contactData = (
    <>
      <Button
        variant="text"
        size="small"
        href="https://www.linkedin.com/in/muhammad-usman-aa7023230/"
      >
        <LinkedInIcon sx={{ color: "#616161" }} />
      </Button>
      <Button variant="text" size="small" href="https://github.com/Usman1361">
        <GitHubIcon sx={{ color: "#616161" }} />
      </Button>
      <Button
        variant="text"
        size="small"
        href="mailto:usmanjavaid231@gmail.com"
        sx={{ color: "#616161" }}
      >
        <BiLogoGmail fontSize="1.5rem" />
      </Button>
    </>
  );
  return (
    <Box mt={15} sx={{ backgroundColor: "#121212" }}>
      <Container maxWidth="xl">
        <Grid container>
          <Grid
            item
            xs={12}
            md={4}
            sx={{ textAlign: { xs: "center", md: "left" } }}
          >
            <Box>
              <img src={logo} hight={70} width={70} />
            </Box>
            <Box>
              <Typography
                mt={3}
                ml={1}
                variant="h4"
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "Urbanist",
                  fontWeight: 700,
                }}
              >
                Usman
              </Typography>
              <Typography
                mt={3}
                variant="body1"
                sx={{
                  color: "var(--text-text-light, #8393AF)",
                  fontFamily: "Urbanist",
                  fontWeight: 700,
                }}
              >
                Contact me if you like to work with me.
              </Typography>
              <Box mt={6}>{contactData}</Box>
            </Box>
          </Grid>
          <Grid mt={5} item xs={12} md={4}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="h6"
                sx={{
                  color: "#FFFFFF",
                  fontFamily: "Urbanist",
                  fontWeight: 700,
                  textAlign: "center",
                }}
              >
                Links
              </Typography>
              {siteData.map(({ name, link }) => (
                <Button
                  variant="secondary"
                  sx={{
                    color: "#8393AF",
                    fontFamily: "Urbanist",
                    fontWeight: 700,
                    marginTop: "20px",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  <Link to={link} smooth={true} duration={500}>
                    {name}
                  </Link>
                </Button>
              ))}
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              textAlign: "left",
            }}
          >
            <Box>
              <Typography
                mt={3}
                ml={1}
                variant="h6"
                sx={{
                  textAlign: { xs: "center", md: "left" },
                  color: "var(--text-text-light, #8393AF)",
                  fontFamily: "Urbanist",
                  fontWeight: 700,
                }}
              >
                Student at NTU FSD.
              </Typography>
              {contact.map(({ icon, title, content }) => (
                <Box
                  key={title}
                  mt={3}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "880px",
                      background:
                        "var(--neutral-white-20, rgba(255, 255, 255, 0.20))",
                      padding: "12px",
                    }}
                    component="img"
                    src={icon}
                    height={24}
                    width={24}
                  />
                  <Stack direction="column">
                    <Typography
                      ml={2}
                      mt={1}
                      variant="body2"
                      sx={{
                        color: "var(--text-text-light, #8393AF)",
                        fontFamily: "Urbanist",
                        fontWeight: 700,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      ml={2}
                      variant="body1"
                      sx={{
                        fontSize: "20px",
                        color: "var(--neutral-white, #FFF)",
                        fontFamily: "Urbanist",
                        fontWeight: 400,
                      }}
                    >
                      {content}
                    </Typography>
                  </Stack>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
        <Typography
          mt={5}
          variant="body1"
          sx={{
            fontSize: "20px",
            color: "var(--text-text-light, #8393AF)",
            fontFamily: "Urbanist",
            fontWeight: 400,
          }}
        >
          © 2023, All Rights Reserved to Usman
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
