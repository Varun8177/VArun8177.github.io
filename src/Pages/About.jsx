import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";

const About = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      h={{
        base: "100vh",
        sm: "100vh",
        md: "100vh",
        lg: "100vh",
        xl: "100vh",
        "2xl": "100vh",
      }}
      id="about"
      className="about section"
    >
      <Center mb={"40px"}>
        <Heading
          fontSize={{
            sm: "20px",
            md: "25px",
            lg: "30px",
          }}
        >
          About me
        </Heading>
      </Center>
      <Box
        pl={{
          base: "5",
          sm: "5",
          md: "5",
          lg: "10",
          xl: "10",
          "2xl": "10",
        }}
        pr={{
          base: "5",
          sm: "5",
          md: "5",
          lg: "10",
          xl: "10",
          "2xl": "10",
        }}
      >
        <Flex justifyContent={"space-evenly"} w="100%">
          <Box
            w={{
              base: "80%",
              sm: "80%",
              md: "50%",
              lg: "50%",
              xl: "50%",
              "2xl": "50%",
            }}
          >
            <Heading
              id="user-detail-name"
              mb={"20px"}
              fontSize={{
                sm: "20px",
                md: "25px",
                lg: "30px",
              }}
            >
              Hello, my name is Varun Ergurala
            </Heading>
            <Heading
              mb={"20px"}
              fontSize={{
                sm: "20px",
                md: "25px",
                lg: "30px",
              }}
            >
              I'm a Full Stack Web Developer
            </Heading>
            <Text id="user-detail-intro" m={"auto"}>
              An enthusiastic Full-stack Developer, skilled in React.js .
              Developing websites using JavaScript, Node.js, Express.js,
              MongoDB. An optimistic man, always ready to take a critical
              decision, ready to work under pressure. Always ready to try some
              new things for optimization.
            </Text>

            <Button
              w={"200px"}
              p={"8"}
              mt={"20px"}
              _hover={{ color: "red", cursor: "pointer" }}
              bgGradient={
                colorMode === "light"
                  ? "linear(to-l,#3CAED7 100%, #40BAB6 100%)"
                  : "none"
              }
              bgColor={colorMode === "dark" ? "red" : "none"}
              borderRadius={"10px"}
              fontSize={["xs", "sm", "lg", "xl"]}
            >
              Contact me
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default About;