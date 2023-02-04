import { Box, Flex, Image, Button, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ColorModeToggle from "./Darkmode";
import myLogo from "../images/protfolio-icon.png";
import { NavLink } from "react-router-dom";
import { TfiDownload } from "react-icons/tfi";

function Navbar() {
  const { colorMode } = useColorMode();

  const [logo, setLogo] = useState(false);
  const handleLogo = () => {
    setInterval(() => {
      setLogo(true);
    }, 2000);
  };
  useEffect(() => {
    handleLogo();
  }, []);

  //   Element linked to Home section : class="nav-link home"
  // Element linked to About section : class="nav-link about"
  // Element linked to Skills section : class="nav-link skills"
  // Element linked to Projects section : class="nav-link projects"
  // Element linked to Contact section : class="nav-link contact"
  // Element linked to Resume : class="nav-link resume"
  return (
    <Box
      position={"sticky"}
      top={0}
      bgColor={colorMode === "light" ? "white" : "black"}
    >
      <Flex
        h={"70px"}
        id="nav-menu"
        borderWidth={5}
        animation={"ease-in-out"}
        animation-delay={"2s"}
        justifyContent={"space-between"}
        pl={"10"}
        direction={["column", "column", "row", "row", "row"]}
      >
        <Image
          src={
            logo
              ? myLogo
              : "https://cliply.co/wp-content/uploads/2021/08/472108440_HELLO_STICKER_400px.gif"
          }
          w={"70px"}
        />
        <Flex justifyContent={"space-evenly"} w={"60%"} alignItems={"center"}>
          <NavLink to={"#"} class="nav-link home">
            <Button id="home" _hover={{ color: "red" }}>
              Home
            </Button>
          </NavLink>
          <NavLink to={"#"} class="nav-link about">
            <Button
              id="about"
              class="about section"
              onClick={() => {
                window.scroll({
                  top: 100,
                  left: 0,
                });
              }}
            >
              about
            </Button>
          </NavLink>
          <NavLink to={"#"} class="nav-link skills">
            <Button id="skills" _hover={{ color: "red", cursor: "pointer" }}>
              skills
            </Button>
          </NavLink>
          <NavLink to={"#"} class="nav-link projects">
            <Button id="projects" _hover={{ color: "red", cursor: "pointer" }}>
              projects
            </Button>
          </NavLink>
          <NavLink to={"#"} class="nav-link contact">
            <Button id="contact" _hover={{ color: "red", cursor: "pointer" }}>
              contact
            </Button>
          </NavLink>
          <NavLink to={"#"} class="nav-link contact">
            <Button id="contact" _hover={{ color: "red", cursor: "pointer" }}>
              Resume{" "}
              <Box as={"span"} ml={"2"}>
                {<TfiDownload />}
              </Box>
            </Button>
          </NavLink>
          <ColorModeToggle />
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navbar;
