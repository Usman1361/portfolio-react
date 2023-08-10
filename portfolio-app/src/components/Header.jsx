import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { logo } from "./smallComponents/images.jsx";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { BiLogoGmail } from "react-icons/bi";
import { Link } from "react-scroll";
import Loading from "./smallComponents/Loading.jsx";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import { Link } from "react-router-dom";

export const drawerWidth = 240;
const navItems = ["Work", "skill", "projects", "About"];
function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loader, setLoader] = useState(false);
  const loadingOn = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 500);
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleNavItemClicked = () => {
    loadingOn();
    if (mobileOpen) {
      handleDrawerToggle();
    }
  };
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
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        marginTop: "20px",
        justifyContent: "space-around",
      }}
    >
      <List>
        {navItems.map((item, i) => (
          <ListItem key={item}>
            <ListItemButton
              sx={{
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              {/* <ListItemText sx={{ color: "#F5F5F5" }} primary={item} /> */}
              {i === 0 && (
                <Link
                  to="work"
                  smooth={true}
                  duration={500}
                  onClick={handleNavItemClicked}
                >
                  <ListItemText sx={{ color: "#F5F5F5" }} primary={item} />
                </Link>
              )}
              {i === 1 && (
                <Link
                  to="skill"
                  smooth={true}
                  duration={500}
                  onClick={handleNavItemClicked}
                >
                  <ListItemText sx={{ color: "#F5F5F5" }} primary={item} />
                </Link>
              )}
              {i === 2 && (
                <Link
                  to="projects"
                  smooth={true}
                  duration={500}
                  onClick={handleNavItemClicked}
                >
                  <ListItemText sx={{ color: "#F5F5F5" }} primary={item} />
                </Link>
              )}
              {i === 3 && (
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={handleNavItemClicked}
                >
                  <ListItemText sx={{ color: "#F5F5F5" }} primary={item} />
                </Link>
              )}
            </ListItemButton>
          </ListItem>
        ))}
        {contactData}
        {/* <Button
          mt={{ xs: 5, md: 0 }}
          color="success"
          variant="contained"
          size="small"
        >
          Book Table
        </Button> */}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <Box>
        <Container maxWidth="xl">
          <AppBar
            sx={{
              boxShadow: "none",
              position: "static",
              backgroundColor: "#121120",
            }}
          >
            <Toolbar>
              <Box sx={{ flexGrow: { xs: 1, md: 0 } }}>
                <img src={logo} width={80} height={60} alt="logo" />
              </Box>
              <Box sx={{ display: { xs: "none", md: "block" }, flexGrow: 1 }}>
                {contactData}
              </Box>
              <Box sx={{ display: { xs: "none", md: "block" } }}>
                {navItems.map((item, i) => (
                  <Button key={item} sx={{ color: "#F5F5F5", mx: 2 }}>
                    {i === 0 && (
                      <Link
                        to="work"
                        smooth={true}
                        duration={500}
                        onClick={handleNavItemClicked}
                      >
                        {item}
                      </Link>
                    )}
                    {i === 1 && (
                      <Link
                        to="skill"
                        smooth={true}
                        duration={500}
                        onClick={handleNavItemClicked}
                      >
                        {item}
                      </Link>
                    )}
                    {i === 2 && (
                      <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        onClick={handleNavItemClicked}
                      >
                        {item}
                      </Link>
                    )}
                    {i === 3 && (
                      <Link
                        to="about"
                        smooth={true}
                        duration={500}
                        onClick={handleNavItemClicked}
                      >
                        {item}
                      </Link>
                    )}
                  </Button>
                ))}

                {/* 
                <Button
                  color="success"
                  variant="contained"
                  size="small"
                  sx={{ marginLeft: "10px" }}
                >
                  Book Table
                </Button> */}
              </Box>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{
                  display: { sm: "block", md: "none" },
                  color: "white",
                }}
              >
                <MenuIcon />
              </IconButton>
              <Box
                sx={{
                  display: {
                    xs: "block",
                    md: "none",
                  },
                }}
              >
                <Drawer
                  container={container}
                  variant="temporary"
                  anchor="right"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true,
                  }}
                  sx={{
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: drawerWidth,
                      backgroundColor: "#121120",
                    },
                  }}
                >
                  <Box>
                    <IconButton
                      sx={{
                        display: "inline",
                        float: "right",
                      }}
                      onClick={() => setMobileOpen(!mobileOpen)}
                    >
                      <CloseIcon sx={{ color: "white" }} />
                    </IconButton>
                  </Box>
                  {drawer}
                </Drawer>
              </Box>
            </Toolbar>
          </AppBar>
        </Container>
        <Loading loading={loader} />
      </Box>
    </>
  );
}

export default Header;
